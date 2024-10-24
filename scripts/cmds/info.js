module.exports = {
  config: {
    name: "info",
    version: "1.0",
    author: "SK-SIDDIK-KHAN", 
    countDown: 5,
    role: 0,
    shortDescription: "admin and info",
    longDescription: "bot owner info",
    category: "auto",
  },

  onStart: async function () {},

  onStart: async function ({ event, message, getLang, usersData, threadsData }) {
  
      const data = await usersData.get(event.senderID);

      const name = data.name;

      const thread = await threadsData.get(event.threadID);

      const threadName = thread.threadName;

      const currentDate = new Date();

      const options = { year: "numeric", month: "numeric", day: "numeric" };

      const date = currentDate.toLocaleDateString("en-US", options);

      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Dhaka",
        hour12: true,
      });

      const img = `https://graph.facebook.com/100059026788061/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`;

      const msg = `╭────────────────⊙\n├─☾ 𝐀𝐒𝐒𝐀𝐋𝐀𝐌𝐔 𝐖𝐀𝐋𝐀𝐈𝐊𝐔𝐌 \n├─☾ 𝐀𝐃𝐃𝐌𝐈𝐍 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍\n├─☾ 𝐍𝐀𝐌𝐄𝐒 : 𝐒𝐊 𝐒𝐈𝐃𝐃𝐈𝐊 𝐊𝐇𝐀𝐍 \n├─☾ 𝐀𝐃𝐃𝐑𝐄𝐒𝐒 : 𝐑𝐀𝐉𝐒𝐇𝐀𝐇𝐈 \n├─☾ 𝐂𝐎𝐍𝐓𝐀𝐂𝐓\n├─☾ 𝐅𝐁 𝐍𝐀𝐌𝐄𝐒 : 𝐓𝐀𝐍𝐉𝐈𝐃 𝐇𝐀𝐒𝐀𝐍 𝐓𝐀𝐌𝐈𝐌\n├─☾ 𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌 : t.me/rdxprem12\n├─☾ 𝐁𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗 : [ / ]\n├─☾ 𝐁𝐎𝐓 𝐍𝐀𝐌𝐄𝐒 : 𝐒𝐊_𝐒𝐈𝐃𝐃𝐈𝐊_⓿❼\n├─☾ 𝐍𝐀𝐌𝐄𝐒 : ${threadName}\n├─☾ 𝐓𝐈𝐌𝐄𝐒 : ${date} ${time} \n├─☾ 𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐈𝐍𝐆 𝐁𝐎𝐓\n╰────────────────⊙`;

      message.reply({
        body: msg,
        attachment: await global.utils.getStreamFromURL(img)
      });
    }
  };
