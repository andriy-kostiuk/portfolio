import nodemailer, { Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport/index.js';
import '../../envConfig';
import { Contact } from '../modules/ContactPage/zodSchema/contact.js';

const mailConfig: SMTPTransport.Options = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

const transporter: Transporter = nodemailer.createTransport(mailConfig);

export const emailService = {
  send({
    email,
    subject,
    html,
  }: {
    email: string;
    subject: string;
    html: string;
  }) {
    return transporter.sendMail({
      to: email,
      subject,
      html,
    });
  },

  sendMeContactMessage(contact: Contact) {
    const { name, email, subject: sub, message } = contact;
    const MY_EMAIL = 'andriykostiuk1@gmail.com';

    const subject = 'Message from portfolio';

    const html = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 24px; border-radius: 8px; border: 1px solid #ddd;">
    <h2 style="color: #333; font-size: 22px; margin-bottom: 12px;">📩 New Message from Portfolio</h2>
    
    <p style="margin: 4px 0;"><strong style="color: #555;">Name:</strong> ${name}</p>
    <p style="margin: 4px 0;"><strong style="color: #555;">Email:</strong> <a href="mailto:${email}" style="color: #1a73e8;">${email}</a></p>
    <p style="margin: 4px 0;"><strong style="color: #555;">Subject:</strong> ${sub}</p>

    <div style="margin-top: 16px; padding: 16px; background-color: #fff; border-left: 4px solid #1a73e8;">
      <p style="margin: 0; color: #333; white-space: pre-line;">${message}</p>
    </div>

  </div>
  `;

    return this.send({ email: MY_EMAIL, html, subject });
  },

  sendConfirmationToSender(contact: Contact) {
    const { name, email, subject: sub, message } = contact;

    const subject = 'Thank you for your message!';
    const html = `
  <div style="font-family: Arial, sans-serif; max-width: 100%; margin: 0 auto; background-color: #f9f9f9; padding: 24px; border-radius: 8px; border: 1px solid #ddd;">
    <h2 style="color: #333; font-size: 22px; margin-bottom: 16px;">👋 Hello ${name},</h2>

    <p style="color: #333; line-height: 1.6;">
      Thank you for reaching out to me through my portfolio website. I’ve received your message and will get back to you as soon as possible.
    </p>

    <p style="color: #333; line-height: 1.6; margin-top: 16px;">
      <strong>Here’s a copy of your message:</strong>
    </p>

    <div style="margin-top: 8px; padding: 16px; background-color: #fff; border-left: 4px solid #1a73e8;">
      <p style="margin: 0; color: #333;"><strong>Subject:</strong> ${sub}</p>
      <p style="margin: 12px 0 0; color: #333; white-space: pre-line;">${message}</p>
    </div>

    <p style="margin-top: 24px; font-size: 14px; color: #555;">
      I’ll try to get in touch with you shortly. Thank you once again for your interest!
    </p>

    <p style="margin-top: 32px; font-size: 14px; color: #888;">
      Best regards,<br/>
      Andrii Kostiuk
    </p>
  </div>
  `;

    return this.send({ email, html, subject });
  },
};
