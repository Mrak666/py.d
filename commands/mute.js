module.exports = ({
    name: "mute",
    cat: "Модерация",
    desc: "Заглушает указанного вами пользователя",
    usage: "mr:mute <user>",
    code: `$setTimeout[$message[2];userID: $findMember[$message[1];no]]
    $setUserVar[mute;true;$findMember[$message[1];no]]
    $description[$username[$findMember[$message[1];no]] был звглушен]
    $addTimestamp
    $color[GREEN]
    $addCmdReactions[<:success:822166949102354464>]
    $onlyIf[$userExists[$findMember[$message[1];no]]==true;{author:Ошибка!:https://cdn.discordapp.com/emojis/754343018244603964.gif } {color:RED} {description: Этого участника не существует!} {footer:$username:$authorAvatar} {delete:6s} {execute:awaitX}]
    $onlyIf[$checkContains[$toLowerCase[$message[2]];1s;2s;3s;4s;5s;6s;7s;8s;9s;10s;11s;12s;13s;14s;15s;16s;17s;18s;19s;20s;21s;22s;23s;24s;25s;26s;27s;28s;29s;30s;31s;32s;33s;34s;35s;36s;37s;38s;39s;40s;41s;42s;43s;44s;45s;46s;47s;48s;49s;50s;51s;52s;53s;54s;55s;56s;57s;58s;59s;1m;2m;3m;4m;5m;6m;7m;8m;9m;10m;11m;12m;13m;14m;15m;16m;17m;18m;19m;20m;21m;22m;23m;24m;25m;26m;27m;28m;29m;30m;31m;32m;33m;34m;35m;36m;37m;38m;39m;40m;41m;42m;43m;44m;45m;46m;47m;48m;49m;50m;51m;52m;53m;54m;55m;56m;57m;58m;59m;1h;2h;3h;4h;5h;6h;7h;8h;9h;10h;11h;12h;13h;14h;15h;16h;17h;18h;19h;20h;21h;22h;23h;1d;2d;3d;4d;5d;6d;7d;8d;9d;10d;11d;12d;13d;14d;15d;16d;17d;18d;19d;20d;21d;22d;23d;24d]==true;{author:Ошибка!:https://cdn.discordapp.com/emojis/754343018244603964.gif } {color:RED} {description: Мне не известно такое время :(} {footer:$username:$authorAvatar} {delete:6s} {execute:awaitX}]
    $argsCheck[>1;{author:Ошибка!:https://cdn.discordapp.com/emojis/754343018244603964.gif } {color:RED} {description: Укажите участника!} {footer:$username:$authorAvatar} {delete:6s} {execute:awaitX}]
  $onlyPerms[kick;{author:Ошибка!https://cdn.discordapp.com/emojis/754343018244603964.gif } {color:RED} {description:У вас нет прав на мьют участников!} {footer:$username:$authorAvatar} {delete:6s} {execute:awaitX}]`
  })
  
  bot.timeoutCommand({
  //    channel: "ID", (This is optional)
      code: `$setUserVar[mute;false;$timeoutData[userID]]`
  });