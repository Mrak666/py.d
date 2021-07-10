module.exports = ({
    name: "page",
    code: `$suppressErrors[{title::mg_reactno: Error!} {description:Sorry, but you can't add another reaction :(}{color: $getVar[errorcol]}]
    $reactionCollector[$splitText[1];$authorID;1h;◀,▶;awaitPage3,awaitPage4;yes]
  $textSplit[$sendMessage[{title: Page 1/$getServerVar[page]};yes]; ]`
  })