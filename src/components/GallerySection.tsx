'use client';
import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
  '/images/gallery/1.webp',
  '/images/gallery/2.webp',
  '/images/gallery/3.webp',
  '/images/gallery/4.webp',
  '/images/gallery/5.webp',
  '/images/gallery/6.webp',
  '/images/gallery/7.webp',
  '/images/gallery/8.webp',
  '/images/gallery/9.webp',
];
export default function GallerySection() {
  const [index, setIndex] = useState(-1); // -1이면 닫힘
  return (
    <section className="relative my-[50px] flex flex-col items-center gap-[25px]">
      <p className="text-xl font-bold text-woody-brown">Gallery</p>
      <div className="grid w-[335px] grid-cols-3 gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            className="relative aspect-[3/4] cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <Image
              src={src}
              alt={`gallery-${i}`}
              fill
              className="object-cover"
              priority />
          </button>
        ))}
      </div>
      <div className="leading-loose text-center">
        사진을 누르면 더 크게 볼 수 있어요.
      </div>
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((src) => ({ src }))}
        styles={{
          container: {
            backgroundColor: 'rgba(249, 239, 217,0.999)', // 밝게 조정
          },
        }}
      />
    </section>
  );
}
