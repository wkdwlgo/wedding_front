"use client";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
const images = [
  "/images/gallery/1.webp",
  "/images/gallery/2.webp",
  "/images/gallery/3.webp",
  "/images/gallery/4.webp",
  "/images/gallery/5.webp",
  "/images/gallery/6.webp",
  "/images/gallery/7.webp",
  "/images/gallery/8.webp",
  "/images/gallery/9.webp",
];
export default function GallerySection() {
  const [index, setIndex] = useState(-1); // -1이면 닫힘
  return (
    <section className="relative flex flex-col items-center my-[50px] gap-[25px]">
      <p className="text-xl font-bold text-woody-brown">Gallery</p>
      <div className="grid grid-cols-3 gap-4 w-[335px]">
        {images.map((src, i) => (
          <div
            key={i}
            className="cursor-pointer relative aspect-[3/4]" // 3:4 비율로 고정
            onClick={() => setIndex(i)}
          >
            <Image
              src={src}
              alt={`gallery-${i}`}
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className="text-center leading-loose">
        사진을 누르면 더 크게 볼 수 있어요.
      </div>
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((src) => ({ src }))}
        styles={{
          container: {
            backgroundColor: "rgba(249, 239, 217,0.999)", // 밝게 조정
          },
        }}
      />
    </section>
  );
}
