import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;
    const receiver = process.env.RECEIVER_EMAIL;
    // Nodemailer yapılandırması
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_SERVER_EMAIL_USER,
        pass: process.env.SENDER_SERVER_EMAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        from: email, // Gönderenin e-posta adresi
        to: receiver, // E-posta alıcısı
        subject: `${name} - ${subject}`, // Konu
        text: message, // Mesaj
        html: `<p>${message}</p>`, // HTML formatında mesaj
      });

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email: ", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Only POST requests are allowed" });
  }
}
