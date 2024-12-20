import React from "react";
import Link from "next/link";
import Image from "next/image";
import MyInfiniteMovingCards from "../myComponents/MyInfiniteMovingCards";

const MyTeam = () => {
  const team = [
    {
      name: "Emine Gül Büyükkeskin",
      title: "Direksiyon Eğitmeni",
      speciality: "B | B Otomatik",
      image: "/images/ekibimiz/Emine Gül Büyükkeskin.jpeg",
      socialLinks: [
        { href: "https://linkedin.com", icon: "/icons/linkedin.svg" },
        { href: "https://instagram.com", icon: "/icons/instagram.svg" },
        { href: "https://twitter.com", icon: "/icons/twitter.svg" },
        { href: "https://facebook.com", icon: "/icons/facebook.svg" },
      ],
    },
    {
      name: "Selim Meral",
      title: "Direksiyon Eğitmeni",
      speciality: "A1 | A2 | B | B Otomatik | D",
      image: "/images/ekibimiz/Selim Meral.jpg",
      socialLinks: [
        { href: "https://linkedin.com", icon: "/icons/linkedin.svg" },
        { href: "https://instagram.com", icon: "/icons/instagram.svg" },
        { href: "https://twitter.com", icon: "/icons/twitter.svg" },
        { href: "https://facebook.com", icon: "/icons/facebook.svg" },
      ],
    },
    {
      name: "Tolga Demir",
      title: "Direksiyon Eğitmeni",
      speciality: "A1 | A2 | A | B | B Otomatik",
      image: "/images/ekibimiz/Tolga Demir.jpg",
      socialLinks: [
        { href: "https://linkedin.com", icon: "/icons/linkedin.svg" },
        { href: "https://instagram.com", icon: "/icons/instagram.svg" },
        { href: "https://twitter.com", icon: "/icons/twitter.svg" },
        { href: "https://facebook.com", icon: "/icons/facebook.svg" },
      ],
    },
    {
      name: "Elif Yılmaz Sabancıoğlu",
      title: "Direksiyon Eğitmeni",
      speciality: "B | B Otomatik",
      image: "/images/ekibimiz/Elif Yılmaz Sabancıoğlu.jpg",
      socialLinks: [
        { href: "https://linkedin.com", icon: "/icons/linkedin.svg" },
        { href: "https://instagram.com", icon: "/icons/instagram.svg" },
        { href: "https://twitter.com", icon: "/icons/twitter.svg" },
        { href: "https://facebook.com", icon: "/icons/facebook.svg" },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Ekibimiz</h2>
      <MyInfiniteMovingCards
        direction="right"
        components={
          <>
            {team.map((member, index) => (
              <div
                key={index}
                className={`group bg-white rounded-lg shadow-md overflow-hidden w-[250px] ml-16 mb-2`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-sm italic font-semibold mb-2 text-gray-400">
                    {member.title}
                  </p>
                  <p className="text-gray-600 mb-4">{member.speciality}</p>
                  {/* <div className="flex space-x-4">
                    {member.socialLinks.map((link, linkIndex) => (
                      <Link href={link.href} key={linkIndex}>
                        <Image
                          src={link.icon}
                          alt="social-icon"
                          width={24}
                          height={24}
                          className="hover:scale-110 transition-transform duration-300"
                        />
                      </Link>
                    ))}
                  </div> */}
                </div>
              </div>
            ))}
          </>
        }
      />
    </div>
  );
};

export default MyTeam;
