module.exports = ({ 
name: "очистить",
code: `$setServerVar[msgID;$get[id]]
$buttonCollector[$get[id];$authorID;24h;custom;custom;Призвал команду $usertag вы не можете ээ использавать!,,64;1]
$let[id;$apiMessage[;{description:**Удалить сообщений можно!**}{color:RANDOM};{actionRow:100,2,2,clerr:250,2,1,clerrr:500,2,3,clerrrr:750,2,4,clerrrrr:1000,2,4,clerrrrrr};;yes]
$onlyBotPerms[managemessages;{title:**Бот не имеет прав**}{description:\`управление сообщениями\`}{color:RANDOM}]
$onlyPerms[managemessages;{title:**У тебя нет прав**}{description:\`управление сообщениями\`}{color:RANDOM}]
$suppressErrors`})