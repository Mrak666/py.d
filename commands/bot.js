
  // ——— Bot Command
  module.exports = ({
  name: "bot", 
  aliases: ['lrpg', 'info', 'invite'],
  code: `
  $title[:bookmark: • **LEGEND-BOT** • :bookmark:]
  
  $description[
  __** • Основное**__
  ┏│ **Версия:**
  ┗│ $getVar[version]
  ┏│ **Разработчик:**
  ┗│ Shen#7777
  
  __** • Статистика**__
  ┏│ **Количество Серверов:**
  ┗│ $serverCount серверов
  ┏│ **Количество Пользователей:**
  ┗│ $allMembersCount пользователей
  ┏│ **Количество команд:**
  ┗│ 10 команд
  ┏│ **Количество обработанных команд:**
  ┗│ $getVar[npc] обработанных команд
  
  __** • Статус**__
  ┏│ **Задержка:**
  ┗│ $ping мс
  ┏│ **Время в сети:**
  ┗│ $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$uptime;m;:;-1];s;:;-1];d;:;-1];y;:;-1];h;ч;-1];w;:;-1];m;:;-1]
  
  __** • Ссылки**__
  ┏│ **Пригласить бота на свой сервер:**
  ┗│  [Бот](https://discord.com/oauth2/authorize?client_id=748225031120879648&scope=bot&permissions=2147483647h)
  ]
  
  $color[$getServerVar[colour]]
  $footer[Legendary RPG • .bot • $userTag]
  `
  })
  
  
  