/*CMD
  command: 💲Withdraw
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let stat = Bot.getProperty(""+user.telegramid+"")
let wdinfo = Bot.getProperty("wdInfo")
if (stat=="ban"){
Bot.sendMessage("*You're Ban*")
}else{
let balance = Libs.ResourcesLib.userRes("balance")
let withdrawn = Libs.ResourcesLib.userRes("withdrawn")
var wallet = User.getProperty("Paypal")
if( wallet == undefined ){
Bot.sendMessage("_❌ wallet Not set_")
}else{
if (balance.value() < 200){
Bot.sendMessage("_❌ You have to earn at least $200!_")
}else{
Bot.sendMessage("*📤 Enter Amount in ₹*")
Bot.runCommand("auto")
}
}}
