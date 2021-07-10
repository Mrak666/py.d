module.exports = ({
type: "interactionCommand",
name: "clerr",
prototype: "button",
code: `	
$interactionReply[;{title:**\`Очищено 100\`**}{color:#7C7876};;0;4]
$clear[100]
$onlyPerms[managemessages; ]
$onlyBotPerms[managemessages; ]
$suppressErrors
`})