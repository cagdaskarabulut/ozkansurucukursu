"use client";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FloatingButtons = () => {
  const handleWhatsAppClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.open(
        `https://wa.me/${process.env.PROJECT_PHONE_NUMBER_WHATSAPP}`,
        "_blank"
      );
    } else {
      window.open(
        `https://web.whatsapp.com/send?phone=${process.env.PROJECT_PHONE_NUMBER_WHATSAPP}`,
        "_blank"
      );
    }
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-2 z-50">
      <a
        href={"tel:" + process.env.PROJECT_PHONE_NUMBER_CALL}
        className="bg-green-500 p-3 rounded-full shadow-md hover:bg-green-600 transition"
        aria-label="Call"
      >
        <PhoneIcon className="text-white" style={{ fontSize: 30 }} />
      </a>
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 p-3 rounded-full shadow-md hover:bg-green-600 transition"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="text-white" style={{ fontSize: 30 }} />
      </button>
    </div>
  );
};

export default FloatingButtons;
