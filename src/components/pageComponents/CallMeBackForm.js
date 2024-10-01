import { useState } from "react";
import React from "react";
import { EmailService } from "../../services/EmailService";
import { ConfettiService } from "../../services/ConfettiService";
import ScrollToPopup from "../myReusableComponents/ScrollToPopup";

export default function CallMeBackForm({ handleClosePopup, about }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [rateLimitError, setRateLimitError] = useState(false); // Rate limit hatası için state

  const handleCallMeBack = async () => {
    setIsLoading(true);
    setRateLimitError(false); // Rate limit hatası sıfırlanıyor

    let email = ""; // email kısmı boş geçiliyor
    let subject = about
      ? about + " Hakkında Aranma Talebi - " + name + " - " + phone
      : "Aranma Talebi - " + name + " - " + phone;
    let message = about
      ? name +
        " isimli kişi " +
        phone +
        " numaralı telefondan " +
        about +
        " konusunda kendisine dönüş yapmanızı talep ediyor."
      : name +
        " isimli kişi " +
        phone +
        " numaralı telefondan kendisine dönüş yapmanızı talep ediyor.";

    // EmailService kullanılıyor
    const result = await EmailService.sendAnEmail({
      name,
      email,
      subject,
      message,
    });

    if (result.success) {
      setIsSent(true); // Mesaj başarıyla gönderildi
      setName("");
      setPhone("");
      ConfettiService.triggerConfetti(); // Konfeti tetikleniyor

      // 5 saniye sonra popup otomatik kapanıyor ve MyServices içindeki popup'ı da kapatıyor (eğer handleClosePopup varsa)
      setTimeout(() => {
        setIsSent(false);
        if (handleClosePopup) {
          handleClosePopup(); // handleClosePopup varsa çalıştırılıyor
        }
      }, 5000);
    } else if (result.error === "rate-limit") {
      setRateLimitError(true); // Rate limit hatası gösteriliyor
    }

    setIsLoading(false); // Yüklenme durumu sona eriyor
  };

  return (
    <div>
      <h5 className="text-xl font-bold mb-4">Sizi Arayalım</h5>
      <p className="mb-4">Size en kısa sürede dönüş sağlayacağız.</p>

      {/* Mesaj başarıyla gönderildi popup'ı */}
      {/* {isSent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-black">
              Mesaj başarıyla gönderildi!
            </h2>
            <button
              onClick={() => {
                setIsSent(false);
                if (handleClosePopup) {
                  handleClosePopup(); // handleClosePopup varsa çalıştırılıyor
                }
              }}
              className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary"
            >
              Tamam
            </button>
          </div>
        </div>
      )} */}

      <ScrollToPopup isOpen={isSent} onClose={() => handleClosePopup()}>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-black">
              Mesaj başarıyla gönderildi!
            </h2>
            <button
              onClick={() => {
                setIsSent(false);
                if (handleClosePopup) {
                  handleClosePopup(); // handleClosePopup varsa çalıştırılıyor
                }
              }}
              className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary"
            >
              Tamam
            </button>
          </div>
        </div>
      </ScrollToPopup>

      {/* Rate limit hatası popup'ı */}
      <ScrollToPopup
        isOpen={rateLimitError}
        onClose={() => () => setRateLimitError(false)}
      >
        {/* {rateLimitError && ( */}
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
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

      <div className="space-y-4">
        <p>
          <input
            placeholder="Ad/Soyad"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            type="text"
            className="w-full px-4 py-2 rounded-md border border-gray-300 hover:border-secondary focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary invalid:border-secondary text-black"
          />
        </p>

        <p>
          <input
            placeholder="Telefon Numarası"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
            type="text"
            className="w-full px-4 py-2 rounded-md border border-gray-300 hover:border-secondary focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary invalid:border-secondary text-black"
          />
        </p>

        <button
          onClick={handleCallMeBack}
          className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex justify-center items-center"
          disabled={isLoading}
          id="call-me-back"
        >
          {isLoading ? (
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
            "Aranma Talebi Gönder"
          )}
        </button>
      </div>
    </div>
  );
}
