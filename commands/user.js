module.exports = ({
    name: "ui",
    aliases: ['user'],
    cat: "Информация",
    desc: "Выдает инофрмацию о пользователе",
    usage: "mr:user (user)",
    code: `
    $thumbnail[$userAvatar[$findUser[$message[1]]]]
    $title[Информация о пользователе - $username[$findUser[$message[1]]]]
    $description[**Имя** - $username[$findUser[$message[1]]]
  **Статус** - $replaceText[$replaceText[$replaceText[$replaceText[$status[$findUser[$message[1]]];online;В сети;-1];offline;Не в сети;-1];idle;Не активен;-1];dnd;Не беспокоить;-1]
  **Пользовательский статус** - $replaceText[$replaceText[$checkCondition[$getCustomStatus[$findUser[$message];emote]$getCustomStatus[$findUser[$message];state]==nonenone];true;Отсутствует];false;$replaceText[$replaceText[$checkCondition[$getCustomStatus[$findUser[$message];emote]$getCustomStatus[$findUser[$message];state]==$getCustomStatus[$findUser[$message];emote]none];true;$getCustomStatus[$findUser[$message];emote]];false;$replaceText[$replaceText[$checkCondition[$getCustomStatus[$findUser[$message];emote]$getCustomStatus[$findUser[$message];state]==none$getCustomStatus[$findUser[$message];state]];true;$getCustomStatus[$findUser[$message];state]];false;$getCustomStatus[$findUser[$message];emote] $getCustomStatus[$findUser[$message];state]]
  **Самая высокая роль** - $replaceText[<@&$highestRole[$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]]>;<@&everyone>;Нет роли;-1]
  **Платформа** - $replaceText[$replaceText[$replaceText[$replaceText[$platform[$findUser[$message[1]]];none;❓ Отсутствует;-1];web;📄 Браузер;-1];mobile;📱 Телефон;-1];desktop;🖥️ Компьютер;-1]
  **Дата создания** - $creationDate[$findUser[$message[1]];date]
  **Присоединился** - $memberJoinedDate[$findUser[$message]]]
  $footer[ID: $findUser[$message]]
    $color[GREEN]
    `
  })
