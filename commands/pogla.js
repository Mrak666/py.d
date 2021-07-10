module.exports = {
    name: "погладить",
    aliases: ["пог"],
    code: `
    $description[<@$authorID> погладил <@$findUser[$message[1]]>]
    $image[$jsonRequest[https://api.leref.ga/neko/sfw/pat;url;]]
    $onlyIf[$findUser[$message[1]]!=$authorID;{description: Самолюбие не лучшая ваша черта!}{color: GREEN}]
    $argsCheck[>1;Вы должны написать кого хотите погладить]
    `
  }