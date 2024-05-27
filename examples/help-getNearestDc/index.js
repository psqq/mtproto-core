const path = require("path");
const MTProto = require("../../envs/node/index.js");

const api_id = process.env.TELEGRAM_API_ID;
const api_hash = process.env.TELEGRAM_API_HASH;

// 1. Create instance
const mtproto = new MTProto({
  api_id,
  api_hash,

  storageOptions: {
    path: path.resolve(__dirname, "./data/1.json"),
  },
});

// 2. Print the user country code
mtproto.call("help.getNearestDc").then((result) => {
  console.log("country:", result.country);
}).catch(err => {
  console.error(err);
});
