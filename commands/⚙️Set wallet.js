/*CMD
  command: ⚙️Set wallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📌 Set Your Paypal Email

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let wallet = User.getProperty("Paypal")
User.setProperty("Paypal" , data.message ,"string")
Bot.sendMessage("✅ Paypal wallet Email set To :* "+data.message+"")
