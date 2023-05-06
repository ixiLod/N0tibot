module.exports = {
  name: 'messageReactionAdd',
  async execute(reaction, user, client) {
    const firstChannel = process.env.VALIDATE;
    const newChannel = process.env.VALIDATENEW;
    const message = reaction.message;
    if (message.channel.id === firstChannel) {
      if (reaction.emoji.name !== '✅') return;
      try {
        const getChannel = client.channels.cache.get(newChannel);
        const fetchChannel = await getChannel.fetch();
        await fetchChannel.send(`✅ ${message.content} est validé ✅`);
      } catch (error) {
        console.log(error);
      }
    }
  },
};
