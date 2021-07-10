module.exports = ({
 type: "interactionCommand",
 name: "bannn",
 prototype: "button",
 code: `	
$interactionReply[;{title:**\`Пользаватель был Разбанен\`**}{color:#7C7876};;0;4]
$unban[$getUserVar[idd]]
$onlyPerms[ban; ]
$onlyBotPerms[ban; ]
$suppressErrors
`})