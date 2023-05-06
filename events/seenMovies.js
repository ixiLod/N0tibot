module.exports = {
  name: 'messageReactionAdd',
  async execute(reaction, user, client) {
    const firstChannel = process.env.SEEN;
    const newChannel = process.env.SEENNEW;
    const message = reaction.message;
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
