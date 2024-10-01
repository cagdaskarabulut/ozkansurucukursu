// export class EmailService {
//   static async sendAnEmail({ name, email, subject, message }) {
//     try {
//       const res = await fetch("/api/send-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, email, subject, message }),
//       });

//       if (res.ok) {
//         return true; // E-posta başarıyla gönderildi
//       } else {
//         throw new Error("E-posta gönderimi başarısız.");
//       }
//     } catch (error) {
//       console.error("E-posta gönderim hatası:", error);
//       return false;
//     }
//   }
// }

export class EmailService {
  static async sendAnEmail({ name, email, subject, message }) {
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        return { success: true }; // E-posta başarıyla gönderildi
      } else if (res.status === 429) {
        // Eğer rate limit aşılırsa
        return { success: false, error: "rate-limit" };
      } else {
        throw new Error("E-posta gönderimi başarısız.");
      }
    } catch (error) {
      console.error("E-posta gönderim hatası:", error);
      return { success: false, error: "server" };
    }
  }
}
