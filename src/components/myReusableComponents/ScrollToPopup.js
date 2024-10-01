import React, { useEffect, useRef } from "react";

const ScrollToPopup = ({ isOpen, onClose, children }) => {
  const popupRef = useRef(null); // Popup alanını referans almak için

  useEffect(() => {
    if (isOpen && popupRef.current) {
      // Popup açıldığında ekranı popup alanına kaydırma
      setTimeout(() => {
        popupRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100); // Gecikme ile popup'ı ortalamak için
    }
  }, [isOpen]);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose(); // Popup dışına tıklanıldığında kapanır
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    } else {
      window.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        ref={popupRef}
        className="bg-white p-8 rounded-lg shadow-lg w-96 relative"
      >
        <button
          onClick={onClose}
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
        {children}
      </div>
    </div>
  ) : null;
};

export default ScrollToPopup;
