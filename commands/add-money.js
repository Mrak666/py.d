module.exports = ({
    name: "add-money",
    code: `$argsCheck[>1;:x: Укажите кому вы хотите добавить денег!]
    $argsCheck[>2;:x: Укажите сколько вы хотите добавить денег!]$onlyAdmin[:x: Вы не являетесь администратором этого сервера!]
    $setUserVar[nm;$sum[$getUserVar[nm;$mentioned[1]];$noMentionMessage];$mentioned[1]]
    $title[Добавление денег]
    $description[Участнику <@$mentioned[1]> было добавлено $noMentionMessage денег.]
    $footer[Администратор:$username]
    $color[00FF7F]
    $onlyAdmin[Только администраторы могут использовать эту команду.]`
    })