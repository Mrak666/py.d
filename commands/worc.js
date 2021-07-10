module.exports = ({
    name: "work",
    aliases: ['working'],
    usage: "work",
    code:
      `
  $onlyIf[$message!=;{author:Произошла ошибка!:$userAvatar[$clientID]}
  {description: Выберите одну из доступных работ, список снизу.}
  {field: Доступные работы:\`\`\`
  cashier
   programmer
   waiter\`\`\`} {color: $getVar[cr]}]
    $if[$message==cashier]
    $author[Работа кассиром;$userAvatar[$clientID]]
    $description[Вы ($username[$authorID]), поработали кассиром и за этот рабочий день проверили $random[1;149] товаров.]
    $addField[Баланс (на $day.$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;01];February;02];March;03];April;04];May;05];June;06];July;07];August;08];September;09];October;10];November;11];December;12]
  .$year);$getUserVar[nm] $getVar[nc];yes]
    $addField[Вам заплатили;$multi[20;$random[1;149]] $getVar[nc];yes]
  $setUserVar[nm;$sum[$getUserVar[nm];$multi[20;$random[1;149]]]]
  $endif
  $if[$message==programmer]
  $author[Работа программистом;$userAvatar[$clientID]]
  $description[Вы ($username[$authorID]), создали $random[1;26] программ и успешно их продали! Покупатели были в восторге.]
   $addField[Баланс (на $day.$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;01];February;02];March;03];April;04];May;05];June;06];July;07];August;08];September;09];October;10];November;11];December;12]
  .$year);$getUserVar[nm] $getVar[nc];yes]
  $addField[Вам заплатили;$multi[20;$random[1;26]] $getVar[nc];yes]
  $setUserVar[nm;$sum[$getUserVar[nm];$multi[20;$random[1;26]]]]
  $endif
  $if[$message==waiter]
  $author[Работа официантом;$userAvatar[$clientID]]
  $description[Вы ($username[$authorID]), обслужили $random[1;19] клиентов за этот день. Молодцы!]
  $addField[Баланс (на $day.$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$month;January;01];February;02];March;03];April;04];May;05];June;06];July;07];August;08];September;09];October;10];November;11];December;12]
  .$year);$getUserVar[nm] $getVar[nc];yes]
  $addField[Вам заплатили;$multi[20;$random[1;26]] $getVar[nc];yes]
  $setUserVar[nm;$sum[$getUserVar[nm];$multi[150;$random[1;19]]]]
  $endIf
  
  $onlyIf[$message!=;{author:Произошла ошибка!:$userAvatar[$clientID]}
  {description: Выберите одну из доступных работ, список снизу.}
  {field: Доступные работы:\`\`\`
  cashier
   programmer
   waiter\`\`\`} {color: $getVar[cr]}]
  $color[$getVar[cr]]
    `
  })