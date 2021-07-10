module.exports = {
    name: "аниме",
    aliases: ["ан"],
    code: `
    $image[$jsonRequest[https://api.leref.ga/neko/sfw/neko;url;]]
    $onlyIf[$findUser[$message[1]]!=$authorID;{description: Самолюбие не лучшая ваша черта!}{color: GREEN}]
    `
  }