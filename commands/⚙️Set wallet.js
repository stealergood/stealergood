/*CMD
  command: âï¸Set wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ð Set Your Paypal Email

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let wallet = User.getProperty("Paypal")
User.setProperty("Paypal" , data.message ,"string")
Bot.sendMessage("â Paypal wallet Email set To :* "+data.message+"")
