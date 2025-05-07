'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
const mapLinks = [
  {
    href: 'https://tmap.life/518eeaba',
    src: '/images/map_nav/tmap.svg',
    alt: '티맵',
    label: '티맵',
  },
  {
    href: 'https://map.kakao.com/link/map/신길교회,37.5098,126.9175',
    src: '/images/map_nav/kakaomap.png',
    alt: '카카오맵',
    label: '카카오맵',
  },
  {
    href: 'https://map.naver.com/p/entry/place/12003838?c=15.00,0,0,0,dh',
    src: '/images/map_nav/navermap.jpeg',
    alt: '네이버지도',
    label: '네이버지도',
  },
];
export default function MapSection() {
  return (
    <section className="my-[50px] flex flex-col items-center gap-[25px]">
      <p className="mb-2 text-xl font-bold text-woody-brown">Location</p>
      <div className="mb-4 text-center leading-loose text-text">
        <p>신길교회</p>
        <p>서울특별시 영등포구 영등포로67가길 9</p>
      </div>

      <div
        className="z-10 flex justify-center rounded-lg"
        style={{ width: '100%', maxWidth: '600px' }}
      >
        <Map
          center={{ lat: 37.51347, lng: 126.91135 }}
          style={{ width: '335px', height: '435px' }}
          level={3}
          isPanto={true}
        >
          <MapMarker position={{ lat: 37.51347, lng: 126.91135 }}>
            {/* <div style={{ color: "#000" }}>Hello World!</div> */}
          </MapMarker>
        </Map>
      </div>

      <nav className="flex items-center justify-evenly gap-3">
        {mapLinks.map(({ href, src, alt, label }) => (
          <Link key={href} href={href}>
            <div className="flex h-[45px] w-[105px] items-center justify-center gap-1 rounded-md bg-white2 text-center">
              <Image src={src} alt={alt} width={25} height={25} />
              <p>{label}</p>
            </div>
          </Link>
        ))}
      </nav>

      <div className="text-center leading-loose text-text">
        <p>교회 전용 주차장이 있습니다.</p>
      </div>
    </section>
  );
}
