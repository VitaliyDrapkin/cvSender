const nodemailer = require("nodemailer");

async function sendMessage(from, pass, to, subject, message) {
  console.log("from : " + from);
  console.log("pass : " + pass);
  console.log("to : " + to);
  console.log("subject : " + subject);
  console.log("message : " + message);
  const transporter = nodemailer.createTransport({
    service: "gmail.com",
    auth: {
      user: from,
      pass: pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  var mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: message,
    html: "<div dir='rtl'>" + message + "</div>",
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
