require('dotenv').config();
const nodemailer = require('nodemailer');

console.log('EMAIL:', process.env.EMAIL);
console.log('PASSWORD:', process.env.PASSWORD);

async function sendEmail(to, html) {

    if (!process.env.EMAIL || !process.env.PASSWORD) {
        console.error('Error: EMAIL and PASSWORD environment variables must be set.');
        return;
      }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  const mailOptions = {
    from: `Siddhant <sid210103@gmail.com>`,
    to: to,
    subject: "Test Email",
    html: html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Message sent: ${info.messageId}`);
  } catch (error) {
    console.error(`Error sending email: ${error}`);
  }
}

// Example usage
sendEmail("2004.sapp@gmail.com", "<h1>Siddhant here</h1> <p>Just testing the email system</p>");