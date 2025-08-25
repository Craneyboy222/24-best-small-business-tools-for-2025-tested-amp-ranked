import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false, 
  auth: {
    user: 'user@example.com',
    pass: 'userpass'
  }
});

export const sendEmail = async (to: string, subject: string, text: string) => {
  const info = await transporter.sendMail({
    from: 'no-reply@example.com',
    to,
    subject,
    text
  });
  return info;
};
