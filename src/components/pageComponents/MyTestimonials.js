"use client";
import React from "react";
import MyInfiniteMovingCards from "../myComponents/MyInfiniteMovingCards";
import Image from "next/image";
import { useState, useEffect } from "react";

export const dynamicParams = true;
export const revalidate = 86400;

const MyTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    //_Test sırasında fazla kullanım yapmaması için kapattım
    const fetchTestimonials = async () => {
      const response = await fetch(`/api/googleReviews`);
      const data = await response.json();
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  // useEffect(() => {
  //   // Test için sahte (mock) veriyi kullanıyoruz
  //   const mockTestimonials = [
  //     {
  //       author_name: "Çağdaş Karabulut",
  //       profile_photo_url: "/images/ekibimiz/cagdas.jpg",
  //       relative_time_description: "1 hafta önce",
  //       text: "Harika bir hizmet! Çok memnun kaldım.",
  //     },
  //     {
  //       author_name: "Öznur Yılmaz",
  //       profile_photo_url: "/images/ekibimiz/cagdas.jpg",
  //       relative_time_description: "2 hafta önce",
  //       text: "Mükemmel bir ekip, çok profesyoneller.",
  //     },
  //     {
  //       author_name: "Can Karabulut",
  //       profile_photo_url: "/images/ekibimiz/cagdas.jpg",
  //       relative_time_description: "3 hafta önce",
  //       text: "Hizmet kalitesi harika, kesinlikle tavsiye ederim!",
  //     },
  //     {
  //       author_name: "Ali Veli",
  //       profile_photo_url: "/images/ekibimiz/cagdas.jpg",
  //       relative_time_description: "1 ay önce",
  //       text: "Her şey mükemmeldi, tekrar çalışmayı dört gözle bekliyorum.",
  //     },
  //     {
  //       author_name: "Ayşe Fatma",
  //       profile_photo_url: "/images/ekibimiz/cagdas.jpg",
  //       relative_time_description: "2 ay önce",
  //       text: "Çok ilgili bir ekip, sonuçlardan çok memnun kaldım.",
  //     },
  //   ];

  //   setTestimonials(mockTestimonials);
  // }, []);

  if (testimonials.length > 0) {
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Yorumlar</h1>
        <MyInfiniteMovingCards
          direction="left"
          components={testimonials.map((client, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex-shrink-0 w-[300px] h-[300px] ml-16"
            >
              <h4 className="text-xl font-semibold text-center mb-2">
                {client.author_name}
              </h4>
              <p className="text-gray-600 text-center mb-4">
                {client.relative_time_description}
              </p>
              <p className="text-gray-700 text-center">{client.text}</p>
            </div>
          ))}
        />
      </div>
    );
  } else {
    return <></>;
  }
};

export default MyTestimonials;
