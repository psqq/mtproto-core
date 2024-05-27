This is a fork from [alik0211/mtproto-core](https://github.com/alik0211/mtproto-core) created to try and update the schema API version for my work project. Use at your own risk `:)`.

# @mtproto/core

[![NPM](https://img.shields.io/npm/v/@mtproto/core.svg?style=flat-square)](https://www.npmjs.com/package/@mtproto/core)
[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/alik0211/mtproto-core/test.yml?branch=master&style=flat-square)](https://github.com/alik0211/mtproto-core/actions?query=branch%3Amaster)
[![Downloads](https://img.shields.io/npm/dm/@mtproto/core?style=flat-square)](https://www.npmjs.com/package/@mtproto/core)
[![Telegram channel](https://img.shields.io/badge/Telegram-channel-blue?style=flat-square&logo=telegram)](https://t.me/mtproto_core)

Telegram API JS (MTProto) client library for Node.js and browser

* **Actual.** 170 layer in the API scheme
* **Fast.** For the Node.js, it uses the TCP and crypto module. For the browser, it uses WebSocket and window.crypto
* **Easy.** Cryptography is hidden. Work with the API at a high level
* **Smart.** Automatically sync authorization on all DCs
* **2FA.** Use the library's built-in function to calculate 2FA parameters
* **Secure.** Complies with Telegram security guidelines

## Documentation

You can find the documentation on [mtproto-core.js.org/docs](https://mtproto-core.js.org/docs) website

## License

GPLv3

# examples

Edit `.env`:

```env
TELEGRAM_API_ID=...
TELEGRAM_API_HASH=...
```

## help-getNearestDc

```bash
node --env-file=.env ./examples/help-getNearestDc/index.js
```
