import React, { useState } from "react";
import ButtonToggleIcon from "../myReusableComponents/ButtonToggleIcon";
import Image from "next/image";
import CallMeBackForm from "./CallMeBackForm"; // CallMeBackForm'u ekleyin
import ScrollToPopup from "../myReusableComponents/ScrollToPopup"; // ScrollToPopup component'i ekleyin

const MyServices = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);

  const handleOpenPopup = (selectedService) => {
    setIsPopupOpen(true);
    setActiveService(selectedService);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // CallMeBackForm popup kapandığında MyServices popup'ı da kapanır
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Hizmetlerimiz</h2>
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

      {/* ScrollToPopup ile Popup */}
      <ScrollToPopup isOpen={isPopupOpen} onClose={handleClosePopup}>
        <CallMeBackForm
          handleClosePopup={handleClosePopup}
          about={activeService}
        />
      </ScrollToPopup>
    </div>
  );
};

export default MyServices;
