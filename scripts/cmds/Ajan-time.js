const moment = require('moment-timezone');
 
module.exports.config = {
  name: "ajan",
  version: "2.0.0",
  role: 0,
  author: "SIDDIK",
  description: "autotime",
  category: "AutoTime",
  countDown: 3
};
 
module.exports.onLoad = async ({ api }) => {
  const arrayData = {
     "05:04:00 AM": {
        message: "╭•┄┅══❁🌺❁══┅┄•╮\n•—»✨ফজরে আজান✨«—•\n   ╰•┄┅══❁🌺❁══┅┄•╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন ফজরের আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি ফজর এর নামাজ শুরু হবার-!!✨🧡\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍"
      },
      "12:59:00 PM": {
        message: "╭•┄┅══❁🌺❁══┅┄•╮\n•—»✨জোহরের আজান✨«—•\n  ╰•┄┅══❁🌺❁══┅┄•╯\n\n•⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন জোহরের আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি জোহরের  এর নামাজ শুরু হবার-!!✨🧡\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍"
      },
      "03:44:00 PM": {
        message: "╭•┄┅══❁🌺❁══┅┄•╮\n•—»✨আসর আজান✨«—•\n  ╰•┄┅══❁🌺❁══┅┄•╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন আসর আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি আসর এর নামাজ শুরু হবার-!!✨🧡\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍" 
      },
      "05:44:00 PM": {
        message: "╭•┄┅══❁🌺❁══┅┄•╮\n•—»✨মাগরিব আজান✨«—•\n  ╰•┄┅══❁🌺❁══┅┄•╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন মাগরিবের আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি মাগরিবের  নামাজ শুরু হবার-!!✨🧡\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍"
      },
      "07:29:00 PM": {
        message: "╭•┄┅══❁🌺❁══┅┄•╮\n•—»✨ইশা আজান✨«—•\n╰•┄┅══❁🌺❁══┅┄•╯\n\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n আসসালামু আলাইকুম-!!🖤💫\n প্রিয় মুসলিম ভাই ও বন এখন ইশা আজান দেওয়া হয়েছে সবাই নামাজ এর জন্য প্রস্তুতি নিয়ে নিন আর কিছু সময় বাকি ইশারের নামাজ শুরু হবার-!!✨🧡\n⋆✦⋆⎯⎯⎯⎯⎯⎯⎯⎯⎯⋆✦⋆\n𝐓𝐇𝐄 𝐂𝐀𝐋𝐋 𝐓𝐎 𝐏𝐑𝐀𝐘𝐄𝐑 𝐖𝐀𝐒 𝐆𝐈𝐕𝐄𝐍" 
      }
 
    // Add more messages for other times as needed
  };
 
  const checkTimeAndSendMessage = () => {
    const now = moment().tz('Asia/Dhaka');
    const currentTime = now.format('hh:mm:ss A');
 
    const messageData = arrayData[currentTime];
 
    if (messageData) {
      const tid = global.db.allThreadData.map(i => i.threadID);
      tid.forEach(async (threadID, index) => {
        api.sendMessage({ body: messageData.message }, threadID);
      });
    }
 
    const nextMinute = moment().add(1, 'minute').startOf('minute');
    const delay = nextMinute.diff(moment());
    setTimeout(checkTimeAndSendMessage, delay);
  };
 
  checkTimeAndSendMessage();
};
 
module.exports.onStart = () => {};
 
