import Image from 'next/image';
export default function HeroSection() {
  return (
    <section className="relative my-[100px] flex flex-col items-center gap-[30px]">
      <p className="text-xl font-bold text-woody-brown">
        And they live happily ever after
      </p>
      <Image
        src="/images/hero.webp"
        width={335}
        height={200}
        alt="메인 이미지"
        className="object-cover"
        loading="lazy"
      ></Image>
      <p className="text-2xl font-bold text-text">석 기 범 | 박 혜 림</p>
      <div className="flex flex-col items-center gap-[5px] text-text">
        <p>2025년 6월 21일 오후 1시</p>
        <p>영등포 신길교회</p>
      </div>
    </section>
  );
}
