const { PermissionsBitField } = require('discord.js');

module.exports = {
  checkPermission: async (user, message) => {
    if (user.bot) return false;

    const member = await message.guild.members.fetch(user.id);
    const requiredPermission = 'Administrator';
    if (!member.permissions.has(PermissionsBitField.Flags[requiredPermission])) return false;
    return true;
  },
};
