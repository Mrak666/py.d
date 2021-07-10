module.exports = ({
 type: "interactionCommand",
 name: "bann",
 prototype: "button",
 code: `	
$interactionReply[;{title:**\`Пользаватель был Забанен\`**}{color:#7C7876};;0;4]
$ban[$getUserVar[idd]]
$onlyPerms[ban; ]
$onlyBotPerms[ban; ]
$suppressErrors
`})