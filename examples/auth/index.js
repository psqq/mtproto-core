const path = require("path");
const MTProto = require("../../envs/node/index.js");
const readline = require("readline");

const api_id = process.env.TELEGRAM_API_ID;
const api_hash = process.env.TELEGRAM_API_HASH;

const mtproto = new MTProto({
  api_id,
  api_hash,
  storageOptions: {
    path: path.resolve(__dirname, "../../data/1.json"),
  },
});

async function authenticate() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const phoneNumber = await new Promise((resolve) => {
    rl.question("Enter your phone number: ", (phone) => {
      resolve(phone);
    });
  });

  try {
    const sentCode = await mtproto.call("auth.sendCode", {
      phone_number: phoneNumber,
      settings: {
        _: "codeSettings",
      },
    });
    console.log("Verification code sent to your phone.");

    const code = await new Promise((resolve) => {
      rl.question("Enter the verification code: ", (code) => {
        resolve(code);
      });
    });

    const authResult = await mtproto.call("auth.signIn", {
      phone_number: phoneNumber,
      phone_code_hash: sentCode.phone_code_hash,
      phone_code: code,
    });
    console.log("Authentication successful:", authResult);

    rl.close();
  } catch (err) {
    console.error("Authentication failed:", err);
    rl.close();
  }
}

async function getSelfUserInfo() {
  try {
    const self = await mtproto.call("users.getFullUser", {
      id: {
        _: "inputUserSelf",
      },
    });
    console.log("Self-user info:", self);
  } catch (err) {
    console.error("Failed to get self-user info:", err);
  }
}

async function main() {
  await authenticate();
  await getSelfUserInfo();
}

main();
