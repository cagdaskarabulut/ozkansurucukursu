import React from "react";
import Link from "next/link";
import Image from "next/image";
import MyInfiniteMovingCards from "../myComponents/MyInfiniteMovingCards";

const MyTeam = () => {
  const team = [
    {
      name: "John Doe",
      designation: "Chief Engineer",
      image: "/images/ekibimiz/cagdas.jpg",
      socialLinks: [
        { href: "https://linkedin.com", icon: "/icons/linkedin.svg" },
        { href: "https://instagram.com", icon: "/icons/instagram.svg" },
        { href: "https://twitter.com", icon: "/icons/twitter.svg" },
        { href: "https://facebook.com", icon: "/icons/facebook.svg" },
      ],
    },
    {
      name: "Jane Smith",
      designation: "Project Manager",
      image: "/images/ekibimiz/cagdas.jpg",
      socialLinks: [
        { href: "https://linkedin.com", icon: "/icons/linkedin.svg" },
        { href: "https://instagram.com", icon: "/icons/instagram.svg" },
        { href: "https://twitter.com", icon: "/icons/twitter.svg" },
        { href: "https://facebook.com", icon: "/icons/facebook.svg" },
      ],
    },
    {
      name: "Alex Johnson",
      designation: "Architect",
      image: "/images/ekibimiz/cagdas.jpg",
      socialLinks: [
        { href: "https://linkedin.com", icon: "/icons/linkedin.svg" },
        { href: "https://instagram.com", icon: "/icons/instagram.svg" },
        { href: "https://twitter.com", icon: "/icons/twitter.svg" },
        { href: "https://facebook.com", icon: "/icons/facebook.svg" },
      ],
    },
    {
      name: "Emily Davis",
      designation: "Safety Officer",
      image: "/images/ekibimiz/cagdas.jpg",
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
      <h1 className="text-3xl font-bold text-center mb-12">Ekibimiz</h1>
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
                  <p className="text-gray-600 mb-4">{member.designation}</p>
                  <div className="flex space-x-4">
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
                  </div>
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
