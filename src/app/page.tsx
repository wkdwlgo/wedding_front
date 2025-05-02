import HeroSection from "@/components/HeroSection";
import "./globals.css";
import InvitationSection from "@/components/InvitationSection";
import GallerySection from "@/components/GallerySection";
import MapSection from "@/components/MapSection";
import AccountSection from "@/components/AccountSection";
import GuestBookSection from "@/components/GuestBookSection";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center my-[40px] bg-sub-bg">
      <HeroSection />
      <InvitationSection />
      <MapSection />
      <GallerySection />
      <AccountSection />
      <GuestBookSection />
    </main>
  );
}
