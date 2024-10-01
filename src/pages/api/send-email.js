// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const { name, email, subject, message } = req.body;
//     const receiver = process.env.RECEIVER_EMAIL;
//     // Nodemailer yapılandırması
//     let transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.SENDER_SERVER_EMAIL_USER,
//         pass: process.env.SENDER_SERVER_EMAIL_PASS,
//       },
//     });

//     try {
//       await transporter.sendMail({
//         from: email, // Gönderenin e-posta adresi
//         to: receiver, // E-posta alıcısı
//         subject: `${name} - ${subject}`, // Konu
//         text: message, // Mesaj
//         html: `<p>${message}</p>`, // HTML formatında mesaj
//       });

//       res.status(200).json({ message: "Email sent successfully!" });
//     } catch (error) {
//       console.error("Error sending email: ", error);
//       res.status(500).json({ error: "Failed to send email" });
//     }
//   } else {
//     res.status(405).json({ message: "Only POST requests are allowed" });
//   }
// }

import nodemailer from "nodemailer";

// Rate limiting için basit bir in-memory çözüm
let requestCounter = {};
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 dakika
const MAX_REQUESTS_PER_WINDOW = 3;

const rateLimiter = (req, res, next) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  // IP adresine dayalı limitleme
  if (!requestCounter[ip]) {
    requestCounter[ip] = {
      count: 1,
      startTime: Date.now(),
    };
  } else {
    const timePassed = Date.now() - requestCounter[ip].startTime;
    if (timePassed < RATE_LIMIT_WINDOW_MS) {
      requestCounter[ip].count++;
      if (requestCounter[ip].count > MAX_REQUESTS_PER_WINDOW) {
        return res
          .status(429)
          .json({ message: "You can send only 3 requests per minute." });
      }
    } else {
      // Zaman penceresi dolmuşsa, sayaçları sıfırlayın
      requestCounter[ip] = {
        count: 1,
        startTime: Date.now(),
      };
    }
  }
  next();
};

// API route handler
export default async function handler(req, res) {
  rateLimiter(req, res, async () => {
    if (req.method !== "POST") {
      return res
        .status(405)
        .json({ message: "Only POST requests are allowed" }); // Method Not Allowed
    }

    const { name, email, subject, message } = req.body;

    const finalMessageForText =
      (name ? "Name: " + name + "\n" : "") +
      (email ? "Email: " + email : "") +
      (message ? "Message: " + message : "");

    const finalMessageForHtml =
      (name ? "Name: " + name + "<br>" : "") +
      (email ? "Email: " + email + "<br>" : "") +
      (message ? "Message: " + message + "<br>" : "");

    const receiver = process.env.RECEIVER_EMAIL; // Alıcı email, .env'den geliyor

    // Nodemailer yapılandırması
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SENDER_SERVER_EMAIL_USER, // Gönderen mail
        pass: process.env.SENDER_SERVER_EMAIL_PASS, // Gönderen mail şifresi
      },
    });

    try {
      await transporter.sendMail({
        from: email, // Gönderenin e-posta adresi
        to: receiver, // Alıcı
        subject: `${name} - ${subject}`, // Konu
        text: finalMessageForText, // Düz mesaj
        html: `<p>${finalMessageForHtml}</p>`, // HTML formatında mesaj
      });

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email: ", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });
}
