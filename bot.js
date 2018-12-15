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


const adminprefix = "$";
const devs = ['417377495160193044'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
   
if (message.content.startsWith(adminprefix + 'setg')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else    
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
 
});


client.on('message', async message => {
  if(message.author.bot) return;
  let prefix = '*';

  let command = message.content.split(" ")[0].slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if(!message.content.toLowerCase().startsWith(prefix)) return;

  if(command == 'dc') {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`لاتمتلك الصلاحيات لفعل ذلك! :x:`);
    message.channel.send("جاري المسح..").then(async m => {
      await message.guild.roles.forEach(role => {
        if(/^\d+$/gi.test(role.name)) {
          role.delete();
        }
      });
      await m.edit(`تم إزالة جميع الالوان.`)
    });
  }
});


client.on('message', async msg => {
const devs = ['417377495160193044'];
if(!devs.includes(message.author.id)) return;
  if(msg.author.bot) return;
  let prefix = "*";
  if(!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0].slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

  if(command == 'say') {
    if(!args.join(" ")) return msg.delete();
    msg.channel.send(args.join(" "));
    return;
  }
});


client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
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
client.on('ready', () => { //code bot not leave room voice //Bot Is Online
    client.channels.get("521265412944691211").join(); //by : Toxic Codes
    });

client.on('message', message => {
 var prefix = "*"

if (message.content.toLowerCase().startsWith(prefix + `new`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "☀ Support Team")) return message.channel.send(`\`☀ Support Team\` **لا توجد رتبة بأسم**`);
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`**لديك تذكرة مفتوحة بالفعل**`);
    message.guild.createChannel(`ticket`, "text").then(c => {
        let role = message.guild.roles.find("name", "☀ Support Team");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: تم انشاء التذكرة`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`${message.author.username} **مرحبا بك**`, `
يرجى محاولة شرح سبب فتح هذه التذكرة بأكبر قدر ممكن من التفاصيل. سيكون فريق الدعم ** ** هنا قريباً لمساعدتك`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `close`)) {
    if (!message.channel.name.startsWith(`ticket`)) return message.channel.send(`لا يمكنك استخدام أمر الإغلاق خارج قناة التذاكر`);

    message.channel.send(`**confirm** : هل انت متأكد من اغلاق التذكرة ؟ اذا انت متأكد اكتب`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === 'confirm', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('انتهي وقت اغلاق التذكرة').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}

});


client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '521265412944691211').setName("Welcome ");
client.channels.find('id', '521265412944691211').setName("Welcome To ");
client.channels.find('id', '521265412944691211').setName("Welcome To KSA");
client.channels.find('id', '521265412944691211').setName("Welcome To KSA Community ");
client.channels.find('id', '521265412944691211').setName("Welcome To KSA Community ♥");
client.channels.find('id', '521265412944691211').setName("Welcome To KSA Community ♥");
client.channels.find('id', '521265412944691211').setName("سبحــآآن آللـہ ۆ بحمده");
client.channels.find('id', '521265412944691211').setName("سبحــآآن آللـہ ۆ بحمده");
client.channels.find('id', '521265412944691211').setName("سبحــآآن آللـہ ۆ بحمده");
client.channels.find('id', '521265412944691211').setName("سبحــآآن آللـہ ۆ بحمده");
client.channels.find('id', '521265412944691211').setName("سبحــآآن آللـہ آلعظيّـمَ ");
client.channels.find('id', '521265412944691211').setName("سبحــآآن آللـہ آلعظيّـمَ ");
client.channels.find('id', '521265412944691211').setName("سبحــآآن آللـہ آلعظيّـمَ ");
client.channels.find('id', '521265412944691211').setName("سبحــآآن آللـہ آلعظيّـمَ ");
client.channels.find('id', '521265412944691211').setName("لآ إله الا آللـہ");
client.channels.find('id', '521265412944691211').setName("لآ إله الا آللـہ");
client.channels.find('id', '521265412944691211').setName("لآ إله الا آللـہ");
client.channels.find('id', '521265412944691211').setName("لآ إله الا آللـہ");
client.channels.find('id', '521265412944691211').setName("مـحــمد رســول آللـہ");
client.channels.find('id', '521265412944691211').setName("مـحــمد رســول آللـہ");
client.channels.find('id', '521265412944691211').setName("مـحــمد رســول آللـہ");
client.channels.find('id', '521265412944691211').setName("مـحــمد رســول آللـہ");
client.channels.find('id', '521265412944691211').setName("♥ ");
client.channels.find('id', '521265412944691211').setName("♥ ");
client.channels.find('id', '521265412944691211').setName("♥ ");
client.channels.find('id', '521265412944691211').setName("Welcome ");
client.channels.find('id', '521265412944691211').setName("Welcome To ");
client.channels.find('id', '521265412944691211').setName("Welcome To KSA");
client.channels.find('id', '521265412944691211').setName("Welcome To KSA Community ");
client.channels.find('id', '521265412944691211').setName("Welcome To KSA Community ♥");
client.channels.find('id', '521265412944691211').setName("Welcome To KSA Community ♥");
  }, 3000);
});


 client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","☀ Members Of Community"));
    });


client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var RaYaN= new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``New Message in private``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    client.channels.get("521271463135805450").send({embed:RaYaN});
    }
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
