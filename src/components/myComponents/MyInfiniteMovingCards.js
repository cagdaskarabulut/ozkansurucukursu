"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const MyInfiniteMovingCards = ({ direction, components }) => {
  return (
    <>
      <InfiniteMovingCards
        direction={direction}
        speed="slow"
        components={components}
      />
    </>
  );
};

export default MyInfiniteMovingCards;
