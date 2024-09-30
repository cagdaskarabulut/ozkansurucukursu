"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/image-slider";

export default function MyImageSlider() {
  const images = ["images/slider-2.png", "images/slider-3.jpg"];
  const getNextMonth = () => {
    const currentDate = new Date();
    const nextMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    const nextMonthName = new Intl.DateTimeFormat("tr-TR", {
      month: "long",
    }).format(nextMonthDate);

    return nextMonthName;
  };

  return (
    <>
      <ImagesSlider className="fill" images={images}>
        <motion.div
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="z-50 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4"
        >
          {/* İlk Satır Soldan Gelsin */}
          <motion.p
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-bold text-xl md:text-4xl text-center py-4"
            style={{ color: "hsl(var(--primary-foreground))" }}
          >
            {getNextMonth()} Dönemi Kayıtları İçin
          </motion.p>
          {/* Buton */}
          <motion.a
            href="tel:05073121120"
            aria-label="Call"
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex h-12 items-center justify-center rounded-md font-bold text-xl md:text-4xl px-4 transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2
          hover:animate-shake relative overflow-hidden bg-[length:200%_100%] w-full md:w-auto"
            style={{
              backgroundColor: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))",
              hoverBackgroundColor: "hsl(var(--secondary-foreground))",
              hoverColor: "hsl(var(--secondary))",
            }}
          >
            Bizi Arayın
            {/* Shimmer efekti */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 transform translate-x-[-150%] animate-shimmer" />
          </motion.a>
        </motion.div>
      </ImagesSlider>
    </>
  );
}
