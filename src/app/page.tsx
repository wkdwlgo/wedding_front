import AccountSection from '@/components/AccountSection';
import GallerySection from '@/components/GallerySection';
import GuestBookSection from '@/components/GuestBookSection';
import HeroSection from '@/components/HeroSection';
import InvitationSection from '@/components/InvitationSection';
import MapSection from '@/components/MapSection';
import './globals.css';

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex w-[430px] flex-col items-center justify-center bg-sub-bg shadow-2xl">
        <HeroSection />
        <InvitationSection />
        <MapSection />
        <GallerySection />
        <AccountSection />
        <GuestBookSection />
      </div>
    </main>
  );
}
