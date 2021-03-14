const nodemailer = require("nodemailer");

async function sendMessage(from, pass, to, subject, message) {
  message = convertMessageToHtml(message);
  emails = convertEmailsToArrays(to);

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

  emails.forEach((element) => {
    var mailOptions = {
      from: from,
      to: element,
      subject: subject,
      html: "<div dir='rtl'>" + message + "</div>",
      attachments: [
        {
          path: "to/../upload/Vitaliy Drapkin - Full Stack Developer.pdf",
        },
      ],
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  });
}

function convertMessageToHtml(message) {
  return message.replace(/\r?\n/g, "<br>");
}

function convertEmailsToArrays(emails) {
  return emails.split(",");
}

module.exports = {
  sendMessage,
};
