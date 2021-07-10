module.exports = ({
    name: "timer", 
    code: `$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{title:**⛔ You are blocked in the bot**}{color:RANDOM}]
    $reply[$messageID;$messageSlice[1;9999];yes]
    $wait[$message[1]]
    $addCmdReactions[⏰]
    $argsCheck[1>;{title:Command "+timer"}{description:Allows you to manage reminders on the server, create new ones.
    **Using**
    \`+timer <time> <text>\`
    **Пример:**
    \`+timer 2m to work!\`
    **╰Remind you to "work!" in 2 minutes**}{color:RANDOM}{delete:10s}]
    $suppressErrors`
    }) 