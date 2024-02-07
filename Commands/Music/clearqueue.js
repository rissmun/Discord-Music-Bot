const { Command } = require("reconlx");
const ee = require('../../settings/embed.json')
const config = require('../../settings/config.json')
const player = require('../../handlers/player')
module.exports = new Command({
  name: 'clearqueue',
  description: `Clear All Songs From a Queue`,
  userPermissions: ['SEND_MESSAGES'],
  category: "Music",
  run: async ({ client, interaction, args }) => {
    let member = interaction.guild.members.cache.get(interaction.member.id)
    let channel = member.voice.channel;
    if (!channel) {
      return interaction.followUp(`You Need to Join Voice Channel`)
    }
    let queue = player.getQueue(interaction.guild.id)
    if (!queue.songs) {
      return interaction.followUp(`No Songs in Queue`)
    }
    else {
      await queue.delete()
      interaction.followUp(`Queue Cleared`)
    }
  }
})
