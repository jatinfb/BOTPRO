module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Shivam Saini",
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.postimg.cc/qMbCdZxg/received-800551649419010.jpg"];
var callback = () => api.sendMessage({body:`⏤͟͟͞͞❥ Th͜͡ɜ Uƞdɛ͜͡ɼwo͜͡ɼɭd Do͜͡ƞ J̶A̶T̶I̶N̶ Hɜ͜͡rɜ̽ ♛➺ 🫨👿

☄️𝐁𝐎𝐓 𝐍𝐀𝐌𝐄☄️  ${global.config.BOTNAME}

🔥𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍 𝆺𝅥☔❃ 𝐉𝐀𝐓𝐈𝐍 𝐒𝐇𝐀𝐑𝐌𝐀 😈

🙈𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍 𝐎𝐖𝐍𝐄𝐑 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 𝐋𝐈𝐍𝐊 👻➪ https://www.facebook.com/share/1CyjToPkJP/ 💞🕊️

👋𝐁𝐎𝐓 𝐀𝐃𝐌𝐈𝐍 𝐎𝐖𝐍𝐄𝐑 𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 𝐋𝐈𝐍𝐊 👻➪ 𝗡𝗔

✧══════•❁❀❁•══════✧

🌸 🌸☞︎︎︎☜︎︎︎✰ ${global.config.PREFIX}

♥️𝐁𝐎𝐓 𝐎𝐖𝐍𝐄𝐑♥️ ⤾➝𝗝𝗔𝗧𝗜𝗡 𝗦𝗛𝗔𝗥𝗠𝗔 ↬ X⤹🩷😈🩵󱢏

🥳𝐔𝐏𝐓𝐈𝐌𝐄🥳

🌪️𝐓𝐎𝐃𝐀𝐘 𝐈𝐒🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡𝐁𝐎𝐓 𝐈𝐒 𝐑𝐔𝐍𝐍𝐈𝐍𝐆⚡ ${hours}:${minutes}:${seconds}.

✅𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐈𝐍𝐆 ${global.config.BOTNAME} 𝐁𝐎𝐓🖤

🦢🍒•••ꞪɛᏒɛ ɪʂ ɮ❍┼ ❍ωɳɜɽ ɳaʍɜ•••🌷💞
┏━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┓
🌸✦✧✧✰✰🍒𝕁𝔸𝕋𝕀ℕ 𝕊ℍ𝔸ℝ𝕄𝔸🌿✰✰✧✧✦🌸
┗━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┛
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
