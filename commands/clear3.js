module.exports = ({
type: "interactionCommand",
name: "clerrr",
prototype: "button",
code: `	
$interactionReply[;{title:**\`Очищено 250\`**}{color:#7C7876};;0;4]
$clear[250]
$onlyPerms[managemessages; ]
$onlyBotPerms[managemessages; ]
$suppressErrors
`})