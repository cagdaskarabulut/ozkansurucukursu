"use client";
import React from "react";
import Image from "next/image";
import MyInfiniteMovingCards from "../myComponents/MyInfiniteMovingCards";
import { useState, useEffect } from "react";

const MyGallery = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Test için sahte (mock) veriyi kullanıyoruz
    const mockPosts = [
      {
        id: "123",
        caption:
          "Harika bir gün!Harika bir gün!Harika bir gün!Harika bir gün!Harika bir gün!Harika bir gün!Harika bir gün!",
        media_url: "https://via.placeholder.com/300",
        permalink: "https://www.instagram.com/p/123/",
        media_type: "IMAGE",
        timestamp: "2024-09-29T12:34:56+0000",
      },
      {
        id: "124",
        caption: "Videolu paylaşım!",
        media_url: "https://www.w3schools.com/html/mov_bbb.mp4",
        permalink: "https://www.instagram.com/p/124/",
        media_type: "VIDEO",
        timestamp: "2024-09-28T09:12:34+0000",
      },
      {
        id: "125",
        caption: "Bir başka harika an",
        media_url: "https://via.placeholder.com/300",
        permalink: "https://www.instagram.com/p/125/",
        media_type: "IMAGE",
        timestamp: "2024-09-27T08:45:23+0000",
      },
      {
        id: "126",
        caption: "Kısa video paylaşımı!",
        media_url: "https://www.w3schools.com/html/mov_bbb.mp4",
        permalink: "https://www.instagram.com/p/126/",
        media_type: "VIDEO",
        timestamp: "2024-09-26T07:34:12+0000",
      },
      {
        id: "127",
        caption: "Günün fotoğrafı",
        media_url: "https://via.placeholder.com/300",
        permalink: "https://www.instagram.com/p/127/",
        media_type: "IMAGE",
        timestamp: "2024-09-25T06:23:45+0000",
      },
      {
        id: "128",
        caption: "Bir başka video",
        media_url: "https://www.w3schools.com/html/mov_bbb.mp4",
        permalink: "https://www.instagram.com/p/128/",
        media_type: "VIDEO",
        timestamp: "2024-09-24T05:12:34+0000",
      },
    ];

    setPosts(mockPosts);
  }, []);

  if (posts.length > 0) {
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Galeri</h1>
        <MyInfiniteMovingCards
          direction="left"
          components={posts.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105  w-[300px] ml-16"
            >
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {post.media_type === "IMAGE" ? (
                  <Image
                    src={post.media_url}
                    alt={post.caption}
                    width={400}
                    height={300}
                    className="w-full h-[300px] object-cover"
                  />
                ) : post.media_type === "VIDEO" ? (
                  <video controls className="w-full h-[300px] object-cover">
                    <source src={post.media_url} type="video/mp4" />
                  </video>
                ) : (
                  <span>Diğer türde içerik</span>
                )}
              </a>
              <p className="mt-2 text-center text-gray-600">{post.caption}</p>
            </div>
          ))}
        />
      </div>
    );
  } else {
    return <></>;
  }
};

export default MyGallery;
