module.exports = [{
  name: "daily",
  aliases: ['diario', 'd'],
  description: "Resgate uma recompensa em Trizes por dia. No entanto, é importante lembrar que só é possível realizar um resgate por dia, ou seja, após resgatar a recompensa, você deverá aguardar até o próximo dia para realizar um novo resgate.",
  usage: "daily",
  category: "Economia",
  code: `
  
  $setGlobalUserVar[wallet;$sum[$getGlobalUserVar[wallet;$authorID];$get[daily]];$authorID]

  $color[#ffffff]
  $title[**Baú de Recompensa Diária**]
  $addField[Recordando;Você pode reivindicar outras recompensas de dinheiro em sua conta, você pode ver os comandos usando **help** e conferindo a categoria  Economia.]
  $addField[Próximo Baú;<t:$round[$math[($datestamp/1000)+86400]]:F>]
  $description[
  **$userTag[$authorID]**, obrigado por coletar seu baú de presente diário! 
  Você ganhou <:trizes_amanitakde:1100930885504741467>  **$numberSeparator[$get[daily];,] Trizes** \`($abbreviate[$get[daily];1])\` nesse baú.]
  $footer[$userTag[$authorID];$useravatar]
  $addTimestamp

  $let[daily;$random[777;7777]]

  $globalCooldown[1d;{newEmbed:{description:**$userTag[$authorID]**, espere \`%hour% horas %min% minutos %sec% segundos\` para poder utilizar esse comando novamente.}{color:#ffffff}] 

<@$authorID>
  $reply
`
}]
