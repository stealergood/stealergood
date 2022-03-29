/*CMD
  command: 💸Earn More
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

let url = Libs.Webhooks.getUrlFor({
  command: "onWebhook",
  content: "+$1 Balance Was Added To Your Balance",
  user_id: user.id,
  redirect_to: "https://fastrsrvr.com/list/466149"
  })
  
 let prms = { disable_web_page_preview: true };
 
Bot.sendMessage("📚Complete Some Offer To Get More Paypal Balance📚\n\n[Click Me]("+url+") and get bonus $1\n\nYou Will Redirected To Offer Page!!",prms);
