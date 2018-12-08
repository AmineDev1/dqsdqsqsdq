const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` اكتب اي شي هنا  `,"http://twitch.tv/S-F")
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



client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const ar = JSON.parse(fs.readFileSync(`AutoRole.json`, `utf8`))
const prefix = "*"
const devs = ['461386341146558475'];



client.on('message', message => {
    const prefix = "*";
      if (message.author.kick) return;
      if (!message.content.startsWith(prefix)) return;
     
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
     
      let args = message.content.split(" ").slice(1);
     
      if (command == "kick") {
                   if(!message.channel.guild) return;
             
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
      if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
      let user = message.mentions.users.first();
      let reason = message.content.split(" ").slice(2).join(" ");
     
      if (message.mentions.users.size < 1) return message.reply("منشن شخص");
      if(!reason) return message.reply ("اكتب سبب الطرد");
      if (!message.guild.member(user)
      .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");
     
      message.guild.member(user).kick(7, user);
     
      const banembed = new Discord.RichEmbed()
      .setAuthor('Kicked !', user.displayAvatarURL)
      .setColor("RANDOM")
      .setTimestamp()
      .addField("User:",  `[ + ${user.tag} + ]`)
      .addField("By:", `[  + ${message.author.tag} +  ]`)
      .addField("Reason:", `[ + ${reason} +  ]`)
      client.channels.get("492583022982463500").send({embed : banembed})
    }
    });
    client.on('message' , message => {
        ;
        let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
        if(message.content.startsWith(prefix + 'unban')) {
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
            if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
            message.guild.unban(user);
            message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
            var embed = new Discord.RichEmbed()
            .setThumbnail(message.author.avatarURl)
            .setColor("RANDOM")
            .setTitle('**●Unban** !')
            .addField('**●User Unban :** ', `${user}` , true)
            .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
            .setAuthor(message.guild.name)
            message.channel.sendEmbed(embed)
        }
    });
    
    client.on('message', async message => {
        let args = message.content.split(" ");
        let command = args[0];
    
        if(command === prefix + 'ban') {
          if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply('انت لا تملك الصلاحيات اللازمة').then(msg => {
            msg.delete(3500);
            message.delete(3500);
          });
    
          if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply('انا لا املك الصلاحيات اللازمة. يحب توفر صلاحيات `Ban Members , Embed Links`').then(msg => {
            msg.delete(3500);
            message.delete(3500);
          });
          let mention = message.mentions.members.first();
          if(!mention) return message.reply('**منشن عضو لطرده**').then(msg => {
            msg.delete(3500);
            message.delete(3500);
          });
          if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**لا يمكنك طرد شخص رتبته اعلى منك**').then(msg => {
            msg.delete(3500);
            message.delete(3500);
          });
          if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('**لا يمكنني طرد شخص رتبته اعلى مني**').then(msg => {
            msg.delete(3500);
            message.delete(3500);
          });
          if(mention.id === message.author.id) return message.reply('**لا يمكنك طرد  نفسك**').then(msg => {
            msg.delete(3500);
            message.delete(3500);
          });
    
           let duration = args[2];
           if(!duration) return message.reply('**حدد وقت زمني لفك البان عن الشخص**').then(msg => {
             msg.delete(3500);
             message.delete(3500);
           });
           if(isNaN(duration)) return message.reply('**حدد وقت زمني صحيح**').then(msg => {
             msg.delete(3500);
             message.delete(3500);
           });
    
           let reason = message.content.split(" ").slice(3).join(" ");
           if(!reason) reason = 'غير محدد';
    
           let thisEmbed = new Discord.RichEmbed()
           .setAuthor(mention.user.username , mention.user.avatarURL)
           .setTitle('لقد تبندت من سيرفر')
           .setThumbnail(mention.avatarURL)
           .addField('# - السيرفر:',message.guild.name,true)
           .addField('# - تم طردك بواسطة',message.author,true)
           .addField('# - السبب',reason)
           .setFooter(message.author.tag,message.author.avatarURL);
           mention.send(thisEmbed).then(() => {
           mention.ban({
             reason: reason,
           });
           message.channel.send(`**:white_check_mark: ${mention.user.username} banned from the server ! :airplane: **  `)
           setTimeout(() => {
             if(duration === 0) return;
             message.guild.unban(mention);
           },duration * 60000);
         });
       }
    });
    
    client.on('message', message => {
    
      if(command === prefix + 'mc') {
                            if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');
    
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
               message.channel.overwritePermissions(message.guild.id, {
             SEND_MESSAGES: false
    
               }).then(() => {
                   message.reply("تم تقفيل الشات ✅ ")
               });
                 }
                 if(command === prefix + 'unmc') {
        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');
    
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
               message.channel.overwritePermissions(message.guild.id, {
             SEND_MESSAGES: true
    
               }).then(() => {
                   message.reply("تم فتح الشات✅")
               });
                 }
    
    
    
    });

    client.on('message', message => {
        var sender = message.author
       
      if(!message.guild) return
        if(!ar[message.guild.id]) ar[message.guild.id] = {
        onoff: 'Off',
        role: 'Member'
        }
       
        if(command === prefix + 'autorole') {
               
        let perms = message.member.hasPermission(`MANAGE_ROLES`)
       
        if(!perms) return message.reply(`You don't have permissions, required permission : Manage Roles.`)
       let args = message.content.split(" ").slice(1)
       if(!args.join(" ")) return message.reply(`${prefix}autorole toggle / set [ROLE NAME]`)
       let state = args[0]
       if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'setrole') return message.reply(`Please type a right state, ${prefix}modlogs toggle/setrole [ROLE NAME]`)
         if(state.trim().toLowerCase() == 'toggle') {
          if(ar[message.guild.id].onoff === 'Off') return [message.channel.send(`**The Autorole Is __𝐎𝐍__ !**`), ar[message.guild.id].onoff = 'On']
          if(ar[message.guild.id].onoff === 'On') return [message.channel.send(`**The Autorole Is __𝐎𝐅𝐅__ !**`), ar[message.guild.id].onoff = 'Off']
         }
        if(state.trim().toLowerCase() == 'set') {
        let newRole = message.content.split(" ").slice(2).join(" ")
        if(!newRole) return message.reply(`${prefix}autorole set [ROLE NAME]`)
          if(!message.guild.roles.find(`name`,newRole)) return message.reply(`I Cant Find This Role.`)
         ar[message.guild.id].role = newRole
          message.channel.send(`**The AutoRole Has Been Changed to ${newRole}.**`)
        }
              }
              if(command === prefix + 'info') {
         let perms = message.member.hasPermission(`MANAGE_GUILD`)
         if(!perms) return message.reply(`You don't have permissions.`)
          var embed = new Discord.RichEmbed()
       
      .addField(`Autorole : :sparkles:  `, `
      State : __${ar[message.guild.id].onoff}__
      Role : __${ar[message.guild.id].role}__`)
       
       
          .setColor(`BLUE`)
          message.channel.send({embed})
        }
       
       
          fs.writeFile("./AutoRole.json", JSON.stringify(ar), (err) => {
          if (err) console.error(err)
        });
       
       
      });
      
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

      client.on('ready', () => {
        console.log(`----------------`);
           console.log(`Desert Bot- Script By : Diamond Codes`);
             console.log(`----------------`);
           console.log(`ON ${client.guilds.size} Servers '     Script By : Diamond Codes ' `);
         console.log(`----------------`);
       console.log(`Logged in as ${client.user.tag}!`);
     client.user.setGame(`KSA Community | System`)//حقوق دايموند كودز
     client.user.setStatus("online")
     
     });

     client.on('message', async message => {
        let muteReason = message.content.split(" ").slice(3).join(" ");
        let mutePerson = message.mentions.users.first();
        let messageArray = message.content.split(" ");
        let muteRole = message.guild.roles.find("name", "Muted");
        let time = messageArray[2];
        if(message.content.startsWith(prefix + "mute")) {
          if(!message.channel.guild) return message.reply message.channel.send("هذا الامر للسيرفرات فقط :no_entry: ");
            if(!message.member.hasPermission('ADMINISTATOR')) return message.channel.send('**لا تملك برمشن** `ADMINISTATOR`' );
            if(!mutePerson) return message.channel.send('**Mention Someone**')
            if(mutePerson === message.author) return message.channel.send('** :no_entry: لا تستطيع اعطاء نفسك ميوت**');
            if(mutePerson === client.user) return message.channel.send('** :no_entry: لا تستطيع اعطاء البوت ميوت**');
            if(message.guild.member(mutePerson).roles.has(muteRole.id)) return message.channel.send('**هذا الشخص لديه ميوت من قبل !**');
            if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });
            if(!time) return message.channel.send("**اكتب الوقت**");
            if(!time.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send('**البوت لا يدعم الوقت هذا**');
            if(!muteReason) return message.channel.send('** اكتب السبب **')
            message.guild.member(mutePerson).addRole(muteRole);
            message.channel.send(`**:white_check_mark: ${mutePerson} has been muted ! :zipper_mouth: **`)
            message.delete()
            let muteEmbed = new Discord.RichEmbed()
            .setTitle(`ميوت جديد`)
            .setThumbnail(message.guild.iconURL)
            .addField('تم بواسطة :',message.author,true)
            .addField('تم اعطاء :', `${mutePerson}`)
            .addField('السبب :',muteReason,true)
            .addField('الوقت :',`${mmss(mmss(time), {long: true})}`)
            .setFooter(message.author.username,message.author.avatarURL);
            let logchannel = message.guild.channels.find(`name`, "log");
            if(!logchannel) return message.channel.send("** انا لا اجد اللوق **");
            logchannel.sendEmbed(muteEmbed)
            mutePerson.send(`**لقد تم اعطاءك ميوت داخل ${message.guild.name} السبب : ${muteReason}**`)
            .then(() => { setTimeout(() => {
               message.guild.member(mutePerson).removeRole(muteRole);
           }, mmss(time));
        });
        }
    });

    client.on("message",(message) => {
        if (message.channel.type !== "text") return;
        if (!message.content.startsWith(prefix)) return;
            if(message.content.startsWith(prefix + "temp on")) {
                if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("** You Don't Have Permission `Manage channels` To Do This Command");
                temp[message.guild.id] = {
                    work : true,
                    channel : "Not Yet"
                };
                message.guild.createChannel("اضغط لصنع روم مؤقت", 'voice').then(c => {
                    c.setPosition(1);
                    temp[message.guild.id].channel = c.id
                    message.channel.send("** Done.**");
                });
            if(message.content.startsWith(prefix + "temp off")) {
                if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("** You Don't Have Permission `Manage channels` To Do This Command");
            message.guild.channels.get(temp[message.guild.id]).delete();
                temp[message.guild.id] = {
                    work : false,
                    channel : "Not Yet"
                };
            message.channel.send("** Done.**");
        };
    }})

    client.on('message',async msg => {
        
        if(msg.content.startsWith(p + "c-count")) {
        if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **لا تملك الصلاحيات**');
        if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
        msg.guild.createChannel(`يتم تحضير الروم :[]` , 'voice').then(time => {
          time.overwritePermissions(msg.guild.id, {
            CONNECT: false,
            SPEAK: false
          });
        setInterval(() => {
            var currentTime = new Date(),
      Year = currentTime.getFullYear(),
      Month = currentTime.getMonth() + 1,
      Dat = currentTime.getDate()
            time.setName(`Members : ◤ → ${client.users.size} ← ◢`);
       },1000);
        });
        }
       
      });

      client.on("message", (message) => {
        if (message.content.startsWith("-cv")) {
                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
                let args = message.content.split(" ").slice(1);
            message.guild.createChannel(args.join(' '), 'voice');
            message.channel.sendMessage('تـم إنـشاء روم صـوتي')
            
        }
        });
        client.on("message", (message) => {
        if (message.content.startsWith("-ct")) {
                    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
                let args = message.content.split(" ").slice(1);
            message.guild.createChannel(args.join(' '), 'text');
        message.channel.sendMessage('تـم إنـشاء روم كـتابـي')
        
        }
        });
      
        client.on('message', message => {
            if (message.author.bot) return;
             if (message.content === prefix + "help") {
             message.channel.send('**تم ارسال رسالة في الخاص**');
        
        
        
        
         message.author.sendMessage(`
         **
        ${member}
        [❖═════ Administrator Commands ═══════❖]
        
        『-clear / لحذف الشات 』
        『-mc / لقفل الشات  』
        『-unmc / لفتح الشات 』
        『-bc / لارسال رسالة لجميع اعضاء السيرفر 』
        『-kick / لطرد شخص من الدسكورد 』
        『-ban / لاعطاء شخص باند من الدسكورد 』
        『-ct / لانشاء روم كتابي 』
        『-cv / لانشاء روم صوتي 』
        『-autorole / لتحديد رتبة تلقائية 』
        『-temp on / لتشغيل الرومات المؤقتة 』
        『-temp off / لاطفاء الرومات المؤقتة 』
        『-c-channel / لانشاء روم يكون بعدد اعضاء السيرفر 』

        
         **`);
        
            }
        });
        
const adminprefix = "*";
const devs = ['417377495160193044'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'p')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else 
  if (message.content.startsWith(adminprefix + 'n')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'a')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else     
if (message.content.startsWith(adminprefix + 's')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");//wennnn
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}
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

client.login(process.env.BOT_TOKEN);
