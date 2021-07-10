// ————— General Commands
// ——— Help Command
module.exports = ({ 
  name: "help", 
  code: `
  $title[:books: • **Команды** • :books:]
  
  $description[
  __** • Основные**__
  ┏│ **.help**
  ┗│ Команды бота.
  ┏│ **.bot**
  ┗│ Информация про Legendary RPG.
  ┏│ **.version**
  ┗│ Информация о версиях бота.
  
  __** • Профиль**__
  ┏│ **.profile**
  ┗│ Посмотреть профиль.
  ┏│ **.inv**
  ┗│ Посмотреть инвентарь.
  
  __** • Исцеление**__
  ┏│ **.sleep**
  ┗│ Поспать.
  
  __** • Добыча древесины**__
  ┏│ **.cut**
  ┗│ Срубить дерево.
  ┏│ **.chop**
  ┗│ Нарезать древесину.
  
  __** • Добыча пиши**__
  ┏│ **.hunt**
  ┗│ Охотиться.
  ┏│ **.fish**
  ┗│ Рыбалка.
  ]
  
  
  $color[$getServerVar[colour]]
  $footer[Legendary RPG • .help • $userTag]
  ` 
  })