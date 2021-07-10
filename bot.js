const Aoijs = require("aoi.js")
const discord = require(`discord.js`)
const buttons = ("discord-buttons")

nonPrefixed: true

const bot = new Aoijs.Bot({
token: "NzQ4MjI1MDMxMTIwODc5NjQ4.X0aU3A.33IZW2oDRgBNb5HNYrApfVhX7mo", //Discord Bot Token
prefix: "+" //Customizable
})
bot.onMessage() //Allows to run Commands

bot.command({
name: "ping", //Trigger name (command name)
code: `$title[Понг:underage:] $description[Мой пинг $ping] $color[$random[100000;999999]]` //Code
})

//You can delete it, if already have it//
bot.status({
  text: "Music",
  type: "LISTENING",
  time: 3
})

bot.command({
    name: "+",
    code: `$updateCommands
    Команды обновленны ↻`
    })

bot.loadCommands("./commands/")

bot.variables({
  Theme : "FF0000",
  money : 50,
  bank : 0,
  xp : 0,
  lvl : 1,
  need : 80,
  emojiB : ":dollar:",
  mute : false,
  cr : 0,
  nc : ":dollar:",
  nm : 0,
  case : "", 
  link : 0,
  color : "FF0000",
  currency : 0,
  page : 3,
  group : "Игрок",
  colour : "FF0000",
  npc : 0,
  version : "1.1.0"

})

// --- Code Example

bot.command({
name: "h", 
code: `
$title[:: • **** • ::]



$color[$getServerVar[colour]]
$footer[LEGEND-BOT • +help • $userTag]
$setVar[npc;$sum[$getVar[npc];1]]
`
})



bot.readyCommand({
  channel: "664902505247014963",
  code: `
  $title[<:green_circle:861162537260417024>  •  **Online**  •  <:green_circle:861162537260417024>]
  $description[
  **Бот успешно запущен!**
  
  ┏│ **Время:**
  ┗│ $day $month $year  $hour:$minute
  ┏│ **Статус**
  ┗│ <:green_circle:861162537260417024>  **Online**
  ┏│ **Версия:**
  ┗│ $getVar[version]
  ]
  
  $color[$getServerVar[colour]]
  $footer[LEGEND-BOT Beta • Status]
  `
  })

//Музыка:
//Включить музыку

bot.command({
    name: "play",
    usage: "play <song_name/song_url>",
    aliases: ["p"],
    code: `
    $thumbnail[$songInfo[thumbnail]]
   $title[Музыка]
    $description[$replaceText[$replaceText[$checkCondition[$queueLength!=1];false; Включаю:];true;В очередь добавлен трек:] $playSong[$message;1m;yes;yes;Что-то пошло не так]]
    $footer[$username[$authorID]#$discriminator[$authorID];$authorAvatar]
   $addTimestamp
    $color[DB8200]
   $onlyIf[$voiceID[$clientID]==;{execute:play1}]
   $argsCheck[>1;{title:Ошибка}{description:Укажите название песни}{color:FF0000}]
   $onlyIf[$voiceID!=;{title:Ошибка}{description:Вы не в голосовом канале}{color:ff0000}]
   $onlyBotPerms[connect;speak;{title:Ошибка}{description:У меня нет прав подключаться к голосовым каналам и разговаривать}{color:FF0000}]
     `
   })
   
   bot.awaitedCommand({
    name: "play1",
    code: `
    $thumbnail[$songInfo[thumbnail]]
    $title[Музыка]
    $description[$replaceText[$replaceText[$checkCondition[$queueLength!=1];false; Включаю:];true;В очередь добавлен трек:] $playSong[$message;1m;yes;yes;Что-то пошло не так]]
    $footer[$username[$authorID]#$discriminator[$authorID];$authorAvatar]
   $addTimestamp
    $color[DB8200]
   $onlyIf[$voiceID!=;{title:Ошибка}{description:Вы не в голосовом канале}{color:ff0000}]
   $argsCheck[>1;{title:Ошибка}{description:Вы забыли написать название песни}{color:FF0000}]
   $onlyIf[$voiceID[$authorID]==$voiceID[$clientID];{title:Ошибка}{description: Бот уже играет в <#$voiceID[$clientID]>}{color:FF0000}]
   $onlyBotPerms[connect;speak;{title:Ошибка}{description:У меня нет прав подключаться к голосовым каналам и разговаривать}{color:FF0000}]
     `
   })
   
   //Очередь
   bot.command({
    name: "queue",
    aliases: ["plist"],
    description: "queue",
    code: `
    $title[Очередь]
    $description[$queue[1;10;{number}. {title} от <@{userID}>]]
    $color[DB8200]
    $footer[$username[$authorID]#$discriminator[$authorID];$authorAvatar]
   $addTimestamp
    $onlyIf[$voiceID!=;{title:Ошибка}{description:Вы не в голосовом канале}{color:ff0000}]
    `
   })
   
   //Стоп (очистка очереди)
   bot.command({
    name: "stop",
    code: `
    $title[Музыка]
    $description[Воспроизведение остановлено участником <@$authorID>]
    $stopSong
    $color[DB8200]
    $footer[$username[$authorID]#$discriminator[$authorID];$authorAvatar]
   $addTimestamp
    $onlyIf[$voiceID!=;{title:Ошибка}{description:Вы не в голосовом канале}{color:ff0000}]
    $onlyBotPerms[connect;speak;{title:Ошибка}{description:У меня нет прав подключаться к голосовым каналам и разговаривать}{color:FF0000}]
    `
   })
   
   //Скип (пропустить)
   bot.command({
    name: "skip",
    aliases: ["s"],
    code: `
    $title[Музыка]
    $description[Трек пропущен]
    $skipSong
    $color[DB8200]
    $footer[$username[$authorID]#$discriminator[$authorID];$authorAvatar]
   $addTimestamp
    $onlyIf[$voiceID!=;{title:Ошибка}{description:Вы не в голосовом канале}{color:ff0000}]
    $onlyBotPerms[connect;speak;{title:Ошибка}{description:У меня нет прав подключаться к голосовым каналам и разговаривать}{color:FF0000}]
    `
   })
   
   //Поставить на паузу
   bot.command({
    name: "pause",
    code: `
    $title[Музыка]
    $description[Воспроизведение поставлено на паузу]
    $pauseSong
    $color[DB8200]
    $footer[$username[$authorID]#$discriminator[$authorID];$authorAvatar]
   $addTimestamp
    $onlyIf[$voiceID!=;{title:Ошибка}{description:Вы не в голосовом канале}{color:ff0000}]
    $onlyBotPerms[connect;speak;{title:Ошибка}{description:У меня нет прав подключаться к голосовым каналам и разговаривать}{color:FF0000}]
    `
   })
   
   //Снять с паузы
   bot.command({
    name: "resume",
    code: `
    $title[Музыка]
    $description[Воспроизведение снято с паузы]
    $resumeSong
    $color[DB8200]
    $footer[$username[$authorID]#$discriminator[$authorID];$authorAvatar]
   $addTimestamp
    $onlyIf[$voiceID!=;{title:Ошибка}{description:Вы не в голосовом канале}{color:ff0000}]
    $onlyBotPerms[connect;speak;{title:Ошибка}{description:У меня нет прав подключаться к голосовым каналам и разговаривать}{color:FF0000}]
    `
   })
   
   //Сейчас играет
   bot.command({
     name: "np",
     code: `
     $title[Музыка]
     $description[Сейчас играет: $songInfo[title]]
     $thumbnail[$songInfo[thumbnail]]
     $footer[$username[$authorID]#$discriminator[$authorID];$authorAvatar]
   $addTimestamp
   $color[DB8200]
   `
   })
   
   bot.command({
     name: "volume",
     aliases: ["vol"],
     usage: "volume <number>",
     code: `
     $title[Музыка]
     $description[Громкость установлена на $message %]
     $color[DB8200]
     $volume[$message]
     $onlyIf[$isNumber[$message]==true;{title:Ошибка}{description:Введёное значение не число}]
     
     `
   })

   bot.awaitedCommand({
    name: "custom",
    code: ``})
    
    bot.interactionCommand({
    name: "clerr",
    prototype: "button",
    code: `    
    $interactionReply[;{title:**\`Очищено 100\`**}{color:#7C7876};;0;4]
    $clear[100]
    $onlyPerms[managemessages; ]
    $onlyBotPerms[managemessages; ]
    $suppressErrors
    `})
    
    
    bot.interactionCommand({
    name: "clerrr",
    prototype: "button",
    code: `    
    $interactionReply[;{title:**\`Очищено 250\`**}{color:#7C7876};;0;4]
    $clear[250]
    $onlyPerms[managemessages; ]
    $onlyBotPerms[managemessages; ]
    $suppressErrors
    `})
    
    bot.interactionCommand({
    name: "clerrrr",
    prototype: "button",
    code: `    
    $interactionReply[;{title:**\`Очищено 500\`**}{color:#7C7876};;0;4]
    $clear[500]
    $onlyPerms[managemessages; ]
    $onlyBotPerms[managemessages; ]
    $suppressErrors
    `})
    
    bot.interactionCommand({
    name: "clerrrrr",
    prototype: "button",
    code: `    
    $interactionReply[;{title:**\`Очищено 750\`**}{color:#7C7876};;0;4]
    $clear[750]
    $onlyPerms[managemessages; ]
    $onlyBotPerms[managemessages; ]
    $suppressErrors
    `})
    
    bot.interactionCommand({
    name: "clerrrrrr",
    prototype: "button",
    code: `    
    $interactionReply[;{title:**\`Очищено 1000\`**}{color:#7C7876};;0;4]
    $clear[1000]
    $onlyPerms[managemessages; ]
    $onlyBotPerms[managemessages; ]
    $suppressErrors
    `})

    bot.command({
      name: "очистить",
      code: `$setServerVar[msgID;$get[id]]
      $buttonCollector[$get[id];$authorID;24h;custom;custom;Призвал команду $usertag вы не можете ээ использавать!,,64;1]
      $let[id;$apiMessage[;{description:**Удалить сообщений можно!**}{color:RANDOM};{actionRow:100,2,2,clerr:250,2,1,clerrr:500,2,3,clerrrr:750,2,4,clerrrrr:1000,2,4,clerrrrrr};;yes]
      $onlyBotPerms[managemessages;{title:**Бот не имеет прав**}{description:\`управление сообщениями\`}{color:RANDOM}]
      $onlyPerms[managemessages;{title:**У тебя нет прав**}{description:\`управление сообщениями\`}{color:RANDOM}]
      $suppressErrors`})