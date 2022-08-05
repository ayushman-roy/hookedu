import nodemailer from "nodemailer";

export async function send_otp(email, otp) {
  try {
    const rec_mail = String(email);
    const rec_otp = String(otp);
    const sender = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.OTP_USER, pass: process.env.OTP_PASS },
    });
    let mail_details = {
      from: process.env.OTP_USER,
      to: rec_mail,
      subject: "hookedu OTP",
      text: `Your OTP: ${rec_otp}`,
    };
    await sender.sendMail(mail_details);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}
