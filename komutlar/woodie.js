const  Discord  =  zorunlu ( ' discord.js ' );


ihracat . run  =  function ( istemci , mesaj ) {
 
    const  embed  =  yeni  Discord.RichEmbed ()
        . setDescription ( " ** WOODIE ** " )
        . setImage ( " https://vignette.wikia.nocookie.net/dont-starve-game/images/2/23/Woodie.png/revision/latest/scale-to-width-down/350?cb=20140330212814 " )
        . setThumbnail ( " https://vignette.wikia.nocookie.net/dont-starve-game/images/2/23/Woodie.png/revision/latest/scale-to-width-down/350?cb=20140330212814 " )
        . setColor ( 0x00AE86 )
        . addField ( " Lakabı " , " Oduncu) (Oduncu) " , doğru )
        . addField ( " Yetenekleri " , `
        * Çok güzel bir baltası var
   * Korkunç bir sırrı var (Werebeaver)
   ` , doğru )
   . addField ( " Motto " , ` Güzel bir ağaç, ha? (güzel ağaç, ha?) ` , doğru )
   . addField ( " selam " , " haha naber " )
   

   mesajı . Kanal . gönder (yerleştir)
};

ihracat . conf  = {
  etkin :  doğru ,
  guildOnly :  false ,
  takma adlar : [],
  permLevel :  0 
};

ihracat . yardım  = {
  adı :  ' woodie ' ,
  açıklama :  ' Woodie the Lumberjack hakkında bilgi verir ' ,
  kullanım :  ' woodie '
};