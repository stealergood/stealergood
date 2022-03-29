/*CMD
  command: auto
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var withdrawn = Bot.getProperty("totalWithdrawn");
withdrawn = parseFloat(withdrawn); 
var wallet = User.getProperty("Paypal");
var balance = Libs.ResourcesLib.userRes("balance")
if(data.message < 200 ){
Bot.sendMessage("_❌ Minimum withdraw $200_")
}else{
if(data.message > balance.value()){
Bot.sendMessage("_❌ Maximum withdraw $"+balance.value().toFixed(6)+"_")
}else{
Bot.sendMessage("*✅ Withdrawal sent\n\n💳 Transaction Details :\n 💰Amount : "+data.message+" ₹\n💼 wallet : "+wallet+"\n\n⛔️ May be it will take upto 72 hours*")
balance.add(-data.message)
Api.sendMessage({ 
chat_id: "@dny0804", 
text: "*🔋 New Approved Payout\n\n▪️ Status : Confirmed\n▪️ User Id :* "+user.telegramid+"\n*▪️ Amount :* "+data.message+" TRX\n\n*♦️ Paid Address ♦️\n "+wallet+"\n\n✅ Bot @paypalmakerBot*" , 
parse_mode: "Markdown"})
}
}
