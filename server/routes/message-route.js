const express = require("express");
const router = express.Router();
const messageLogic = require("../services/message-logic");

router.post("/", async (request, response, next) => {
  try {
    messageLogic.sendMessage(
      request.body.from,
      request.body.password,
      request.body.to,
      request.body.subject,
      request.body.message
    );
    response.send({ status: "Ok" });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
