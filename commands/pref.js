module.exports = {
    name: "setprefix",
    aliases: ["sprefix", "sp", "prefix"],
    code: `
    $sendMessage[
      {title:Префикс успешно изменён!}
      {description:**Новый префикс\:** \`$message[1]\`}
    ;no]
    $setServerVar[prefix;$message[1]]
    $onlyIf[$charCount[$message[1]]<=8;:x:\`Префикс не может быть длиннее 8 символов!\`]
    $onlyIf[$message[1]!=;:x:\`Префикс не может быть пустым!\`]
    $onlyPerms[manageserver;:x:\`У вас недостаточно прав для смены префикса!\`]
    `
  }