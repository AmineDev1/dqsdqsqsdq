const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` KSA Community Forever ♥  `,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online ')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '521265412944691211').setName("W");
client.channels.find('id', '521265412944691211').setName("We");
client.channels.find('id', '521265412944691211').setName("Wel");
client.channels.find('id', '521265412944691211').setName("Welc");
client.channels.find('id', '521265412944691211').setName("Welco");
client.channels.find('id', '521265412944691211').setName("Welcom");
client.channels.find('id', '521265412944691211').setName("Welcome");
client.channels.find('id', '521265412944691211').setName("Welcome T");
client.channels.find('id', '521265412944691211').setName("Welcome To");
client.channels.find('id', '521265412944691211').setName("Welcome To K");
client.channels.find('id', '521265412944691211').setName("Welcome To KS");
client.channels.find('id', '521265412944691211').setName("Welcome To KSA");
client.channels.find('id', '521265412944691211').setName("Welcome To KSA C");
client.channels.find('id', '521265412944691211').setName("Welcome To KSA Com");
client.channels.find('id', '521265412944691211').setName("Welcome To KSA Comm");
client.channels.find('id', '521265412944691211').setName("Welcome To KSA Commu");
client.channels.find('id', '521265412944691211').setName("Welcome To KSA Commun");
client.channels.find('id', '521265412944691211').setName("Welcome To KSA Communi");
client.channels.find('id', '521265412944691211').setName("Welcome To KSA Communit");
client.channels.find('id', '521265412944691211').setName("Welcome To KSA Community");
  }, 3000);
});


 client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("☀ Members Of Community","☀ Members Of Community"));
    });
 

client.on('message',async message => {
    if(message.content.startsWith(prefix + "bc")) {
      let filter = m => m.author.id === message.author.id;
      let thisMessage;
      let thisFalse;
      message.channel.send('🇧🇨| **ارسل الرسالة الان**').then(msg => {

      let awaitM = message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      })
      .then(collected => {
        collected.first().delete();
        thisMessage = collected.first().content;
        msg.edit('🇧🇨| **هل انت متأكد؟**');
        let awaitY = message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
          max: 1,
          time: 20000,
          errors: ['time']
        })
        .then(collected => {
          if(collected.first().content === 'لا') {
            msg.delete();
            message.delete();
            thisFalse = false;
          }
          if(collected.first().content === 'نعم') {
            if(thisFalse === false) return;
          message.guild.members.forEach(member => {
            msg.edit('🇧🇨| **جاري الارسال**');
            collected.first().delete();
            member.send(`${thisMessage}\n\n${member} ,\nتم الارسال من : ${message.guild.name}\n تم الارسال بواسطة : ${message.author.tag}`);
          });
          }
        });
      });
      });
    }
  });


client.on('message', msg => {

    if (msg.content == '$join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
client.on('ready', () => {
    client.channels.get("506417070024556544").join(); 
    });


var prefix = "*";

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  **Welcome To KSA Community:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})




client.login(process.env.BOT_TOKEN);
