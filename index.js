const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = `faxx.`
const got = require('got');

client.once('ready', () => {
  client.user.setActivity("with Faxx members! || faxx.help ", {type: "PLAYING", url: "https://www.twitch.tv/FaxxOnTop"})
  console.log(`The bot is functioning as dogshit as usual: ${client.user.tag}`)
})

client.on('message', message => {
  if (message.content === `${prefix}test`) 
  message.channel.send('Testing has succesfully completed.');
})

client.on('message', message => {
  if (message.content === `${prefix}raid`) 
  message.channel.send('SIKE YOU THOUGHT YOU COULD RAID??? THAT EASY??? BANNED LOLOLOLOL');
})

client.on('message', message => {
  if (message.content === `${prefix}porn`) 
  message.channel.send('https://tenor.com/view/sex-dick-boner-erection-porn-gif-19273527');
})

client.on('message', message => {
  if (message.content === `${prefix}wakeup`) 
  message.channel.send('@everyone WAKE UP SHITTERS');
})

client.on('message', message => {
  if (message.content === `${prefix}reboot`) 
  message.channel.send('@everyone WAKE UP SHITTERS');
})

client.on('message', message => {
  if (message.content === `${prefix}faxx`) 
  message.channel.send('WHAT WE OFFER? Scrims everyday and tournaments every week. Active chat Good, experienced and strict staffs so make sure to be good when you join :) If you need tips on how to get more Elo or get better at the game then Team Faxx is the right place to be! Non-Toxic and fun Society Staffs who always love to help! WHAT WE ARE LOOKING FOR. Big content  for Cracked Mobile,Controller and PC players Cracked kbm players Experienced GFX makers Experienced video editors Creative warriors Top 10 players More dedicated staffs STAFF APPLICATION Must be active always Experienced Must be respectful and Linear to the community FAXX ON TOP LETS GO');
})

client.on('message', message => {
  if (message.content === `${prefix}fuckyoufaggot`) 
  message.channel.send('THE FUCK YOU SAY TO ME YOU LITTLE SHIT? AHAHAHAHAHAHAH HOW ARE YOU NOT IN FUCKING SCHOOL? YOU KISS YOUR MOTHER WITH THAT MOUTH? ITS CALLED YOU KISS YOUR MOTHER WITH THAT FUCKING MOUTH? HUH HUH? AHHAHAHAHAHA "WHY ARE YOU SO" AHAHAHHA, BECAUSE THE FUCKING YOUTH OF AHAHHDGSJGDA YOU SHUT UP WHEN IM TALKING TO YOU, YOU SHUT YOUR MOUTH. -Ninja');
})

client.on('message', message => {
  if (message.content === `${prefix}kys`) 
  message.channel.send('Okay. I will. I hope you are happy with your choices, here is my suicide note: I have to do this. I can not weigh my name. There are no excuses right now. I do not care if you give a fuck. Ive embarrassed my mother. I have to do this for her. I wish it did not come to this. Im just stupid. Ill probably be too much of a wimp to do that. But I have to. I guess I never thought I would write this note. I apologize. I deserve to burn ');
})

client.on('message', message => {
  if (message.content === `${prefix}youregay`) 
  message.channel.send("What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little __clever__ comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead.");
})

client.on('message', message => {
  if (message.content === `${prefix}whatami`) 
  message.channel.send('A shitter.');
})

client.on('message', message => {
  if (message.content === `${prefix}invite`) 
  message.channel.send('https://discord.com/oauth2/authorize?client_id=787066026504093756&permissions=8&scope=bot Invite our bot to your server!');
})

client.on('message', message => {
  if (message.content === `${prefix}server`) {
    const embed = new Discord.MessageEmbed()
     .setTitle("Discord Guild Info")
     .addField(`Guild Member Count: ${message.guild.memberCount}`, `the amount of members this server currently has.\n`)
     .addField(`Guild ID: ${message.guild.id}`, `the ID of this server.\n`)
     .addField(`Guild Age: ${message.guild.createdAt}`, `The current age of this guild.\n`)
     .addField(`Guild Name: ${message.guild.name}`, `The name of the guild you have used the command on a server.\n`)
     .setFooter('Discord bot made by Cooper and Rayn')
    message.channel.send(embed)
    .then( () => {
      message.reply('The server information has successfully shown!')
       .then (message => {
        message.delete({ timeout: 2000})
      })
      })
    }
})

client.on('message', message => {
  if (message.content === `${prefix}help`) {
    const embed = new Discord.MessageEmbed()
    .setTitle(`${message.guild.name}'s Commands`)
    .addField(`${prefix}server`, 'Shows the Server Info')
    .addField(`${prefix}test`, "Replies with **Testing has successfully completed**")
    .addField(`${prefix}whatami`, "Replies with **what you are**")
    .addField(`${prefix}youregay`, "Replies with **a surprise \;)**")
    .addField(`${prefix}slowmode`, "Adds a slowmode in a channel.")
    .addField(`${prefix}kys`, "Replies with **my suicide note :pensive:**").addField(`${prefix}kick`, "Coming soon.")
    .addField(`${prefix}faxx`, "gives you a description of what faxx is")
    .addField(`${prefix}fuckyoufaggot`, "gives you a ninja quote lol")
    .addField(`${prefix}porn`, "you know what its for :smirk:")
    .addField(`${prefix}raid`, "raids the server")
    .addField(`${prefix}meme`, "posts random reddit memes! (sort of working)")
    .addField(`${prefix}purge`, "coming soon...")
     .addField(`${prefix}invite`, "sends an invite to our bot!")
    .setFooter('Discord bot made by Cooper, Rayn, and Bytes ')
  message.channel.send(embed)
  .then( () => {
    message.reply('The server commands has successfully shown!')
     .then (message => {
     message.delete({ timeout: 2000 })
  })
  })
}})

client.on('message', message => {
  var args = message.content.substr(1).split(/ +/);
  var command = args[0].toLowerCase();

 if(command === "slow"){
   if(args[1] != null) {
      message.channel.setRateLimitPerUser(args[1] , "reason")
      .then( () => {
        message.channel.send('This channel now contains a slowmode, please carry on with your typing!');
        })
      .catch(err => {
        message.reply("Sorry but that isn't a number, so please do the command again with an **__actual digit__**. If this isn't the problem then you probably had inputted a number that contains more then 26000 seconds!")
        .then(message => {
          message.delete({ timeout: 5000})
        })
        console.error(err);
      })
  } else {
    message.reply("Sorry but you need to input a number containing the amount of seconds for the slowmode!")
    .then(message => {
      message.delete({ timeout: 3000})
})
  }}});

client.on('message', message => {
  if (message.content === `${prefix}meme`) embed =  new Discord.MessageEmbed()
    got('https://www.reddit.com/r/memes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let permalink = content[0].data.children[0].data.permalink;
        let memeUrl = `https://reddit.com${permalink}`;
        let memeImage = content[0].data.children[0].data.url;
        let memeTitle = content[0].data.children[0].data.title;
        let memeUpvotes = content[0].data.children[0].data.ups;
        let memeNumComments = content[0].data.children[0].data.num_comments;
        embed.setTitle(`${memeTitle}`);
        embed.setURL(`${memeUrl}`)
        embed.setColor('RANDOM')
        embed.setImage(memeImage);
        embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);
        message.channel.send(embed)
    }).catch(console.error);
})

module.exports.config = {
    name: "meme",
    aliases: []
}

client.login("Nzg3MDY2MDI2NTA0MDkzNzU2.X9PiWw.BHg1x6dT-qBB-L3nNFzC2536768")