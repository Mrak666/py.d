module.exports = {
    name: "птыкнуть",
    aliases: ["тык"],
    code: `
    $description[<@$authorID> тыкнул <@$findUser[$message[1]]>]
    $image[$jsonRequest[https://api.leref.ga/neko/sfw/poke;url;]]
    $onlyIf[$findUser[$message[1]]!=$authorID;{description: Самолюбие не лучшая ваша черта!}{color: GREEN}]
    $argsCheck[>1;Вы должны написать кого хотите тыкнуть]
    `
  }