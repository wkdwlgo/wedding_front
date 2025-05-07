import './globals.css';
import AccountSection from '@/components/AccountSection';
import GallerySection from '@/components/GallerySection';
import GuestBookSection from '@/components/GuestBookSection';
import HeroSection from '@/components/HeroSection';
import InvitationSection from '@/components/InvitationSection';
import MapSection from '@/components/MapSection';

export default function Home() {
  return (
    <main className="my-[40px] flex flex-col items-center justify-center bg-sub-bg">
      <HeroSection />
      <InvitationSection />
      <MapSection />
      <GallerySection />
      <AccountSection />
      <GuestBookSection />
    </main>
  );
}
