const fs = require("fs");
module.exports.config = {
  name: "admins",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "KRISHNA-BABU", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "admin",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("owner")==0 || event.body.indexOf("Owner")==0 || event.body.indexOf("OWNER")==0 || event.body.indexOf("Owner")==0) {
    var msg = {
        body: "👸 🔰𝗔𝗗𝗠𝗜𝗡 𝗜𝗡𝗙𝗢🔰👸\n❥────────────────────❥\n꧁≛⃝💗꯭ꪸ  ⃪꯭̽ ❥༺𝐉𝐀𝐓𝐈𝐍 ༻❦≛⃝💖꧂\n❥────────────────────❥\n𝐁𝐎𝐓 𝐊𝐀 𝐁𝐎𝐒𝐒:-👇👇👇\n   𝗝𝗔𝗧𝗜𝗡 𝗢𝗪𝗡𝗘𝗥\n❥────────────────────❥\n",
        attachment: 
fs.createReadStream(__dirname + `/noprefix/JATINBOTDP.jpeg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👸", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
