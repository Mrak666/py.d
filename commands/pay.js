module.exports = ({
  name: "pay", 
  code: `
$setUserVar[nm;$sum[$getUserVar[nm;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$setUserVar[nm;$sub[$getUserVar[nm];$noMentionMessage]]
$title[Перевод] 
$description[$userTag[$authorID] перевёл $userTag[$mentioned[1]] $noMentionMessage $getServerVar[currency]] 
$footer[By Deadly Software©️ | Всё права защищены] 
$color[$getServerVar[color]] 
$onlyIf[$getUserVar[nm]>=100;Ваш баланс слишком мал. Минимум на балансе должно быть 100 монет] 
$onlyIf[$noMentionMessage>=20;Минимум для перевода 20]
$onlyIf[$findUser[$message[1]]==$mentioned[1];Пользователь не найден] 
$onlyIf[$noMentionMessage!=;Впишите число] 
$onlyIf[$isNumber[$noMentionMessage]==true;Аргумент не число]
$onlyIf[$mentioned[1]!=;Упомяните юзера] 
$onlyIf[$authorID!=$mentioned[1];Нельзя дать деньги себе] 
`
 
 })