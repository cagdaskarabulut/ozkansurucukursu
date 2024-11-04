import { useState } from "react";
import { EmailService } from "../../services/EmailService"; // EmailService import ediliyor
import { ConfettiService } from "../../services/ConfettiService"; // ConfettiService import ediliyor
import ScrollToPopup from "../myReusableComponents/ScrollToPopup";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rateLimitError, setRateLimitError] = useState(false); // Rate limit hatası

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setRateLimitError(false); // Hata mesajını sıfırlıyoruz

    // EmailService kullanılıyor
    const result = await EmailService.sendAnEmail({
      name,
      email,
      subject,
      message,
    });

    if (result.success) {
      setIsSent(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      // Konfeti tetikleniyor
      ConfettiService.triggerConfetti();

      // 5 saniye sonra popup otomatik kapanıyor
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
    } else if (result.error === "rate-limit") {
      setRateLimitError(true); // Rate limit hatası olduğunda popup göster
    }

    setIsLoading(false);
  };

  return (
    <div className="container mx-auto px-4 relative">
      <h2 className="text-3xl font-bold text-center mb-12">İletişim</h2>

      {/* Başarı popup'ı */}
      {/* {isSent && ( */}
      <ScrollToPopup isOpen={isSent} onClose={() => handleClosePopup()}>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-black">
              Mesaj başarıyla gönderildi!
            </h2>
            <button
              onClick={() => setIsSent(false)}
              className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary"
            >
              Tamam
            </button>
          </div>
        </div>
      </ScrollToPopup>
      {/* )} */}

      {/* Rate limit hatası popup'ı */}
      <ScrollToPopup
        isOpen={rateLimitError}
        onClose={() => setRateLimitError(false)}
      >
        {/* {rateLimitError && ( */}
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-red-600">
              Çok fazla istek!
            </h2>
            <p className="text-black mb-4">
              1 dakika içinde en fazla 3 mesaj gönderebilirsiniz.
            </p>
            <button
              onClick={() => setRateLimitError(false)}
              className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary"
            >
              Tamam
            </button>
          </div>
        </div>
        {/* )} */}
      </ScrollToPopup>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Ad/Soyad"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded hover:border-secondary focus:outline-none focus:border-secondary"
              />
              <input
                type="email"
                placeholder="E-Posta"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded hover:border-secondary focus:outline-none focus:border-secondary"
              />
            </div>
            <input
              type="text"
              placeholder="Konu"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded hover:border-secondary focus:outline-none focus:border-secondary"
            />
            <textarea
              placeholder="Mesaj"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded h-32 hover:border-secondary focus:outline-none focus:border-secondary"
            ></textarea>

            {/* Buton - Loading animasyonu ekleniyor */}
            <button
              type="submit"
              className="w-full p-2 bg-primary text-white rounded hover:bg-secondary flex justify-center items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                // Yükleniyor animasyonu
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              ) : (
                "Mesajı Gönder"
              )}
            </button>
          </form>
        </div>

        {/* Google Maps iframe'i */}
        <div className="h-[500px] md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.1114956986617!2d35.89209927592796!3d41.566831471277666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4087d89d7c8bb4d5%3A0x9bbb493596929a8!2zw5Z6ZWwgQmFmcmEgw5Z6a2FuIFPDvHLDvGPDvCBLdXJzdQ!5e0!3m2!1str!2str!4v1725441766864!5m2!1str!2str"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
