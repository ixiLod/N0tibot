const { checkPermission } = require('../helpers/adminLock');

module.exports = {
  name: 'messageReactionAdd',
  async execute(reaction, user, client) {
    const firstChannel = process.env.VALIDATENEW;
    const newChannel = process.env.SEEN;
    const message = reaction.message;
    const hasPermission = await checkPermission(user, message);
    if (!hasPermission) return;
    if (message.channel.id === firstChannel) {
      if (reaction.emoji.name !== '🎬') return;
      try {
        const getChannel = client.channels.cache.get(newChannel);
        const fetchChannel = await getChannel.fetch();
        await fetchChannel.send(`🎬 ${message.content} et à était vu 🎬`);
      } catch (error) {
        console.log(error);
      }
    }
  },
};
