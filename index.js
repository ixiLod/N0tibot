const { GatewayIntentBits, Client, Partials,} = require('discord.js');
const fs = require('node:fs');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildEmojisAndStickers,
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction],
});

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
// Retrieve all event files
const eventFiles = fs.readdirSync('./events').filter((file) => file.endsWith('.js'));

// Charge all event files
for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  client.on(event.name, (...args) => event.execute(...args, client));
}

client.login(process.env.TOKEN);
