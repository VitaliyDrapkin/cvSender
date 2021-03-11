const nodemailer = require("nodemailer");

async function sendMessage() {
  const transporter = nodemailer.createTransport({
    service: "gmail.com",
    auth: {
      user: "drapkinvitaliy@gmail.com",
      pass: "tucd7s45bjuxzr6c",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  var mailOptions = {
    from: "drapkinvitaliy@gmail.com",
    to: "drapkinvitaliy@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = {
  sendMessage,
};
