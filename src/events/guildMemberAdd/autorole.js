module.exports =(client, member) => {
    let role = member.guild.roles.cache.get("1071178650835234858")
    if (!role) return console.log("❌ O AUTOROLE não está configurado.")
  
    member.roles.add(role).catch(err => {
      console.log(`❌ Não foi possível adicionar o cargo de autorole no usuário ${member.user.tag}.`)
    })
}