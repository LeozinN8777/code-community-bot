const Discord = require('discord.js')
module.exports =(client, member) => {
    const channel = "1071174132303155253";
    if (!channel) return;
  
    const embed = new Discord.EmbedBuilder()
    .setColor("Green")
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .setTitle("👋 Seja bem vindo!")
    .setDescription(`> Olá ${member}!\nSeja Bem-Vindo(a) a nossa comunidade <3 \`${member.guild.name}\`!\nAtualmente estamos com \`${member.guild.memberCount}\` membros.`)
    .addFields(
        {
          name: 'Leia as regras!',
          value: '<#1071177272146542633>',
          inline: true,
        },
        {
          name: 'Converse com a galera, e tire suas dúvidas!',
          value: '<#1071177842571890790>', 
          inline: true,
        }
    );
  
    member.guild.channels.cache.get(channel).send({ embeds: [embed], content: `${member}` })
}
