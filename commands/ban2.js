module.exports = ({ 
 name: "бан",
 code: `$setServerVar[msgID;$get[id]]
$buttonCollector[$get[id];$authorID;24h;custom;custom;Призвал команду $usertag вы не можете ээ использавать!,,64;1]
$let[id;$apiMessage[;{description:**Ваш выбор!**}{color:RANDOM};{actionRow:Забанить,2,4,bann:Разбанить,2,3,bannn};;yes]
$argsCheck[>1;{description:**Недопустимое использование команды, попробуйте использовать:** \`!бан [@Участник|ID]\`}]
$onlyBotPerms[ban;{title:**Бот не имеет прав**}{description:\`Банить участников\`}{color:RANDOM}]
$onlyPerms[ban;{title:**У тебя нет прав**}{description:\`Банить участников\`}{color:RANDOM}]
$setUserVar[idd;$findUser[$message[1]]]
$suppressErrors`})