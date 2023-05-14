const { checkPermission } = require('../helpers/adminLock');
const { randomRefused } = require('../helpers/randomRefused');

module.exports = {
  name: 'messageReactionAdd',
  async execute(reaction, user, client) {
    const firstChannel = process.env.VALIDATE;
    const newChannel = process.env.REFUSED;

    const message = await reaction.message.fetch();

    const hasPermission = await checkPermission(user, message);
    if (!hasPermission) return;

    if (message.channel.id === firstChannel) {
      if (reaction.emoji.name !== '❌') return;
      try {
        const getChannel = client.channels.cache.get(newChannel);
        const fetchChannel = await getChannel.fetch();
        const randomSentence = randomRefused();
        await fetchChannel.send(`❌ ${message.content} ${randomSentence} ❌`);
      } catch (error) {
        console.log(error);
      }
    }
  },
};
