import React, { useState, useEffect, useRef } from "react";
import ButtonToggleIcon from "../myReusableComponents/ButtonToggleIcon";
import Image from "next/image";
import CallMeBackForm from "./CallMeBackForm"; // CallMeBackForm'u ekleyin

const MyServices = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const popupRef = useRef(null); // Popup alanını referans alacağız
  const [activeService, setActiveService] = useState(null);

  const handleOpenPopup = (selectedService) => {
    setIsPopupOpen(true);
    setActiveService(selectedService);
    setTimeout(() => {
      // Popup açıldıktan sonra ekranı popup alanına kaydırma
      if (popupRef.current) {
        popupRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 100); // Biraz gecikme ekleyerek popup'ın görünmesini sağlıyoruz
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // CallMeBackForm popup kapandığında MyServices popup'ı da kapanır
  };

  // Popup dışına tıklanıldığında kapatmak için useEffect
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleClosePopup(); // Popup dışına tıklanıldığında kapanır
      }
    };

    // Event listener ekliyoruz
    if (isPopupOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    } else {
      window.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopupOpen]);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-12">Hizmetlerimiz</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "A Sınıfı Ehliyet Kursu",
            description: "",
            image: "/images/a-sinifi-ehliyet.jpg",
          },
          {
            title: "B Sınıfı Ehliyet Kursu",
            description: "",
            image: "/images/b-sinifi-ehliyet.jpg",
          },
          {
            title: "D Sınıfı Ehliyet Kursu",
            description: "",
            image: "/images/e-sinifi-ehliyet.jpg",
          },
          {
            title: "Özel Direksiyon Dersi",
            description: "",
            image: "/images/ozel-direksiyon-dersi.jpg",
          },
        ].map((service, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ButtonToggleIcon
                closedIcon="→"
                openText="Sizi Arayalım"
                onClick={() => handleOpenPopup(service.title)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div
            ref={popupRef} // Popup'ı referanslıyoruz
            className="bg-white p-8 rounded-lg shadow-lg w-96 relative"
          >
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-900 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <CallMeBackForm
              handleClosePopup={handleClosePopup}
              about={activeService}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyServices;
