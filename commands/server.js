module.exports = ({
    name: "server",
    aliases: ['guild'],
    cat: "Информация",
    desc: "Выдает статистику сервера",
    usage: "mr:server/guild",
    code: `$title[Информация о сервер: $serverName]
    $thumbnail[$serverIcon]
    $addField[Остальное;• **Создатель** - $username[$ownerID]
    • **Дата Создания** - $creationDate[$guildID]
    • **Уровень Верефикации** - $replaceText[$replaceText[$replaceText[$replaceText[$serverVerificationLevel;Low;Низкий;-1];Very High;Очень Высокий;-1];Medium;Средний;-1];High;Высокий;-1]
    • **Регион** - $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$serverRegion;frankfurt; Франкфурт];brazil; Бразилия];europe; Европа];hongkong; Гонконг];india; Индия];japan; Япония];russia; Россия];singapore; Сингапур];southafrica; Южная Африка];sydney; Сидней];us-central; Центральная часть США];us-east; Восток США];us-south; Юг США];us-west; Запад США];amsterdam; Амстердам];dubai; Дубай];south-korea; Южная Корея];london; Лондон];eu-west; Западная Европа];eu-central; Центральная Европа]
    • **Уровень буста** - $replaceText[$replaceText[$checkCondition[$serverBoostLevel<2];true;Нет уровня];false;$replaceText[$replaceText[$checkCondition[$serverBoostLevel<15];true;1 (Бусты: $serverBoostLevel)];false;$replaceText[$replaceText[$checkCondition[$serverBoostLevel<30];true;2 (Бусты: $serverBoostLevel)];false;3 (Бусты: $serverBoostLevel)]]]]
    $addField[Каналы (Всего: $channelCount);:text: **Текстовые** - $channelCount[text]
  :loud_sound: **Голосовые** - $channelCount[voice]
  :chains: **Категории** - $channelCount[category]]
  $addField[Подробно о статусах;:green_circle: **В сети** - $membersCount[$guildId;online]
  :yellow_circle: **Неактивны** - $membersCount[$guildId;idle]
  :red_circle: **Не беспокоить** - $membersCount[$guildId;dnd]
  :radio_button: **Не в сети**- $membersCount[$guildId;offline];yes]
  $addField[Участники;:globe_with_meridians: **Всего** - $membersCount
  :bust_in_silhouette: **Люди** - $sub[$membersCount;$botCount]
  :link: **Боты** - $botCount;yes]
  $color[GREEN]
  `
  })