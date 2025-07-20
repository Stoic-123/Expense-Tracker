import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "zealong292@gmail.com",
    pass: "dasjumvjcwhdrjkq", 
  },
});

const mailOptions = {
  from: '"Your Name" <zealong292@gmail.com>',
  to: "longbigboss123@gmail.com",
  subject: "Hello from Node.js using Gmail",
  text: "This is a test email sent using Nodemailer and Gmail SMTP.",
};

transporter
  .sendMail(mailOptions)
  .then((info) => {
    console.log("Email sent: ", info.messageId);
  })
  .catch((err) => {
    console.error("Error sending email: ", err);
  });
