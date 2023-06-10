import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.PASS;

const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 587,
  auth: {
    user: user,
    pass: pass,
  },
});

const sendEmail = async (to, subject, text) => {
  try {
    const info = await transporter.sendMail({
      from: user,
      to,
      subject,
      text,
    });

    console.log("Mail sent successfully:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
