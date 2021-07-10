//открытие
module.exports = ({
    name:"openc", 
    code: `
    $title[Открываем кeйс...]
  $description[Открытие]
  $color[YELLOW]
  $editIn[5s;Вы открыли кейс и получили $random[100;3000]]
  $setUserVar[case;$sub[$getUserVar[case];1]]
  $setUserVar[money;$sum[$getUserVar[money];$random[100;3000]]]
  $onlyIf[$getUserVar[case]>=1;У вас нету кейсов!]
   
  `
  });