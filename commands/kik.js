Кик:
module.exports = ({
 name: "kick",
 code: `$kick[$mentioned[1]]
$if[$mentioned[1]==]
$title[<a:krest:765982494582767706>Произошла ошибка]
$description[Упамяните участника.]
$color[#C70039]
$elseIf[$message[2]==]
$author[$username[$mentioned[1]] был выгнан ;$userAvatar[$mentioned[1]]]
$description[
 **Тэг:** $userTag[$findUser[$message[1]]]
 **Упоминание:** <@$findUser[$message[1]]>
 **Айди:** $findUser[$message[1]]]
 $addField[**Был выгнан:**; $userTag[$authorID]]
$addField[Причина:; Не указана]
$color[RED]
$sendDM[$mentioned[1];Вас выгнали из **$serverName** Причина: Не указана]
$endelseIf
$elseIf[$message[2]==$message[2]]
$author[$username[$mentioned[1]] был выгнан ;$userAvatar[$mentioned[1]]]
$description[
 **Тэг:** $userTag[$findUser[$message[1]]]
 **Упоминание:** <@$findUser[$message[1]]>
 **Айди:** $findUser[$message[1]]]
 $addField[**Был выгнан:**; $userTag[$authorID]]
$addField[**Причина:**; $noMentionMessage]
$color[RED]
$sendDM[$mentioned[1];Вас выгнали из **$serverName** Причина: $noMentionMessage]
$endelseIf
$endif
$onlyIf[$findUser[$message[1]]!=$clientID;{title:<a:x:765982494582767706>Произошла ошибка}{description:Я не могу кикнуть самого себя.}{color:#C70039}]
$onlyIf[$findUser[$message[1]]!=$authorID;{title:<a:x:765982494582767706>Произошла ошибка}{description:Вы не можете выгнать самого себя.}{color:#C70039}]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];{title:<a:x:765982494582767706>Произошла ошибка}{description:Вы не можете выгнать кого-то с более высокими или теми же ролями, что и вы.}{color:#C70039}]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];Я не могу выгнать кого-то с более высокими или теми же ролями, что и я.]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;{title:<a:x:765982494582767706>Произошла ошибка}{description:Не удалось найти участника с этим айди/именем/упоминанием на сервере.}{color:#C70039}]
$onlyIf[$findUser[$message[1]]!=$ownerID;{title:<a:x:765982494582767706>Произошла ошибка}{description:Я не могу выгнать владельца сервера.}{color:#C70039}]
$onlyBotPerms[kick;{title:<a:x:765982494582767706>Произошла ошибка}{description:У меня недостаточно прав.}{color:#C70039}]
$onlyPerms[kick;{title:<a:x:765982494582767706>Произошла ошибка}{description:У вас недостаточно прав.}{color:#C70039}]`
})