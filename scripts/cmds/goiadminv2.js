module.exports = {
  config: {
    name: "goiadminv2",
    version: "1.0",
    author: "Cliff",
    countDown: 5,
    role: 0,
    shortDescription: "sarcasm",
    longDescription: "sarcasm",
    category: "reply",
  },
  onStart: async function () {},
  onChat: async function ({ event, message, getLang, api }) {
    const msg = [
      "why are you mentioned my master?, do you have any problem?🙄","do you like my master, thats why you mention him?😏","one more mention to my master, I will remove you from the group😡","sorry my master is currently busy, please try to mention him later","bakit mo siya binabanggit? ako ang girlfriend niya!","My master said that when he is mentioned, I should ask why, so why did you mention my master?","don't take my master away from me😭"
    ];

    const CliffRegex = /^(@Vincent Galvez)$/i;
    if (event.body && CliffRegex.test(event.body)) {
      api.setMessageReaction("😡", event.messageID, (err) => {}, true);
      return api.sendMessage({ body: msg[Math.floor(Math.random() * msg.length)] }, event.threadID, event.messageID);
    }
  },
};