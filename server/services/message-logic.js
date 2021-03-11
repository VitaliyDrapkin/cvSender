const encryption = require("../helper/encryption");
const ServerError = require("../errors/server-error");
const ErrorType = require("../errors/error-type");
const filesUrls = require("../helper/filesUrls");

async function sendMessage() {
  console.log("message sent");
}
module.exports = {
  sendMessage,
};
