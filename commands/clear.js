module.exports = ({
    name:"clear",
    code: `$deletecommand
    $clear[$message[1]]
    $title[Очищено!]
    $image[https://media.discordapp.net/attachments/822533019725201449/845967126259171348/4444441.png]
    $description[Успешно удалено $message[1] сообщений]
    $argsCheck[>1;Вы не указали сколько сообщений очистить!]
    $color[RANDOM]
    $onlyIf[$message<=100;{description:Я не могу очистить больше чем 100 сообщений}]
    $addCmdReactions[🧹]
    $deleteIn[5s]`
});