//покупка
module.exports = ({
    name: "buyc", 
    code: `
    $title[Успешно]
  $description[Вы купили 1 кейс 🧰
  Потратили: 3000 💸
  Всего кейсов: $sum[$getUserVar[case];1]]
  $footer[+openc - открыть]
  $color[YELLOW]
  $setUserVar[case;$sum[$getUserVar[case];1]]
  $setUserVar[money;$sub[$getUserVar[money];3000]]
  $onlyIf[$getUserVar[money]>=3000;Недостаточно денежных средств!]
   `
  });