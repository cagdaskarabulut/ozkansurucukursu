"use client";
import React, { useState, useEffect } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const ScrollToTopButton = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

  return (
    <div>
      {show && (
        <button
          onClick={handleClick}
          className="fixed bottom-8 left-8 z-50 p-3 text-white rounded-full bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--secondary-dark))] transition-all"
          aria-label="Scroll to top"
        >
          <KeyboardDoubleArrowUpIcon fontSize="large" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
