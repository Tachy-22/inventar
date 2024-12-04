
"use server"

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendWaitlistEmail(data: { name: string; email: string; company: string }) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Waitlist Registration',
    html: `
      <h2>New Waitlist Registration</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
}

export async function sendBookingEmail(data: {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
}) {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: 'New Consultation Booking Request',
    html: `
      <h2>New Consultation Booking Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Preferred Date:</strong> ${new Date(data.preferredDate).toLocaleString()}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
}
