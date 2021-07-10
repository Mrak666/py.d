
    //Баланс
module.exports = ({
    name: "bal",
    code: `
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$title[Баланс $userName[$mentioned[1;yes]]:]
$description[
ᅠ
**💰Наличные : \`$GetUserVar[nm;$mentioned[1;yes]]\`$getVar[emojiB]**
 
**🏦Банк : \`$GetUserVar[bank;$mentioned[1;yes]]\`$getVar[emojiB]**
ᅠ]
$footer[📍| userID : $mentioned[1;yes]]
$color[$getRoleColor[$highestRole[$authorID]]]

`
});