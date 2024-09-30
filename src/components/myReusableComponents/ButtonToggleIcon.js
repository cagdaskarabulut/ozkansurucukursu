"use client";
import React from "react";

const ButtonToggleIcon = ({ closedIcon, openText, onClick }) => {
  return (
    <>
      {/* Buton Yapısı */}
      <button
        onClick={onClick} // onClick event'i burada ekleniyor
        className="flex items-center justify-center space-x-2 px-6 h-12 rounded-full text-white bg-red-600 transition-all duration-500 transform group-hover:scale-105 hover:bg-cyan-500"
      >
        {/* Icon */}
        <span className="transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-100">
          {closedIcon}
        </span>
        {/* Kelime: Başlangıçta gizli, hover ile açılıyor */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-[max-width] duration-700 ease-in-out">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 ml-2">
            {openText}
          </span>
        </span>
      </button>
    </>
  );
};

export default ButtonToggleIcon;
