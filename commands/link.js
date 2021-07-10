module.exports = ({
    type: "awaitedCommand",
    name: "awaitPage3",
    code: `$if[$getServerVar[page]==5]
  $if[$getEmbed[$channelID;$message[1];title]==Page 5/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 4/$getServerVar[page]}]
  
    $elseIf[$getEmbed[$channelID;$message[1];title]==Page 4/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 3/$getServerVar[page]}]
     $endelseif
  
     $elseIf[$getEmbed[$channelID;$message[1];title]==Page 3/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 2/$getServerVar[page]}]
     $endelseif
  
     $elseIf[$getEmbed[$channelID;$message[1];title]==Page 2/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 1/$getServerVar[page]}]
    $endelseif
  
     $elseIf[$getEmbed[$channelID;$message[1];title]==Page 1/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 5/$getServerVar[page]}]
     $endelseif
     $endif
     $else
  
     $elseIf[$getServerVar[page]==4]
   $if[$getEmbed[$channelID;$message[1];title]==Page 4/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 3/$getServerVar[page]}]
    $elseIf[$getEmbed[$channelID;$message[1];title]==Page 3/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 2/$getServerVar[page]}]
     $endelseif
     $elseIf[$getEmbed[$channelID;$message[1];title]==Page 2/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 1/$getServerVar[page]}]
     $endelseif
     $elseIf[$getEmbed[$channelID;$message[1];title]==Page 1/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 4/$getServerVar[page]}]
     $endelseif
     $endif
     $endelseif
  
      $elseIf[$getServerVar[page]==3]
       $if[$getEmbed[$channelID;$message[1];title]==Page 3/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 2/$getServerVar[page]}]
    $elseIf[$getEmbed[$channelID;$message[1];title]==Page 2/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 1/$getServerVar[page]}]
     $endelseif
     $elseIf[$getEmbed[$channelID;$message[1];title]==Page 1/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 3/$getServerVar[page]}]
     $endelseif
     $endif
     $endelseif
  
      $elseIf[$getServerVar[page]==2]
     $endelseif
  $if[$getEmbed[$channelID;$message[1];title]==Page 2/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 1/$getServerVar[page]}]
    $elseIf[$getEmbed[$channelID;$message[1];title]==Page 1/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 2/$getServerVar[page]}]
     $endelseif
     $endif
     $endelseif
    
  
   $elseIf[$getServerVar[page]==1]
   $editMessage[$message[1];{title:Page 1/$getServerVar[page]}]
     $endelseif
     $endif
    `
  })
  
  module.exports = ({
    type: "awaitedCommand",
    name: "awaitPage4",
    code: `$if[$getServerVar[page]==5]
  $if[$getEmbed[$channelID;$message[1];title]==Page 1/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 2/$getServerVar[page]}]
  
    $elseIf[$getEmbed[$channelID;$message[1];title]==Page 2/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 3/$getServerVar[page]}]
     $endelseif
  
     $elseIf[$getEmbed[$channelID;$message[1];title]==Page 3/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 4/$getServerVar[page]}]
     $endelseif
  
     $elseIf[$getEmbed[$channelID;$message[1];title]==Page 4/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 5/$getServerVar[page]}]
    $endelseif
  
     $elseIf[$getEmbed[$channelID;$message[1];title]==Page 5/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 1/$getServerVar[page]}]
     $endelseif
     $endif
  $else
  
     $elseIf[$getServerVar[page]==4]
   $if[$getEmbed[$channelID;$message[1];title]==Page 1/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 2/$getServerVar[page]}]
    $elseIf[$getEmbed[$channelID;$message[1];title]==Page 2/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 3/$getServerVar[page]}]
     $endelseif
     $elseIf[$getEmbed[$channelID;$message[1];title]==Page 3/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 4/$getServerVar[page]}]
     $endelseif
     $elseIf[$getEmbed[$channelID;$message[1];title]==Page 4/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 1/$getServerVar[page]}]
     $endelseif
     $endif
     $endelseif
  
      $elseIf[$getServerVar[page]==3]
       $if[$getEmbed[$channelID;$message[1];title]==Page 1/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 2/$getServerVar[page]}]
    $elseIf[$getEmbed[$channelID;$message[1];title]==Page 2/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 3/$getServerVar[page]}]
     $endelseif
     $elseIf[$getEmbed[$channelID;$message[1];title]==Page 3/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 1/$getServerVar[page]}]
     $endelseif
     $endif
     $endelseif
  
      $elseIf[$getServerVar[page]==2]
     $endelseif
  $if[$getEmbed[$channelID;$message[1];title]==Page 1/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 2/$getServerVar[page]}]
    $elseIf[$getEmbed[$channelID;$message[1];title]==Page 2/$getServerVar[page]]
    $editMessage[$message[1];{title:Page 1/$getServerVar[page]}]
     $endelseif
     $endif
     $endelseif
    
  
   $elseIf[$getServerVar[page]==1]
   $editMessage[$message[1];{title:Page 1/$getServerVar[page]}]
     $endelseif
     $endif
    `
  })