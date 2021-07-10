module.exports = {
    name: "ударить",
    aliases: ["удар"],
    code: `
    $description[<@$authorID> ударил <@$findUser[$message[1]]>]
    $image[$jsonRequest[https://api.leref.ga/neko/sfw/slap;url;]]
    $onlyIf[$findUser[$message[1]]!=$authorID;{description: Самолюбие не лучшая ваша черта!}{color: GREEN}]
    $argsCheck[>1;Вы должны написать кого хотите ударить]
    `
  }