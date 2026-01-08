import Navigation from "@/components/Navigation";
import AnnouncementBar from "@/components/AnnouncementBar";
import HeroSection from "@/components/HeroSection";
import PrizesSection from "@/components/PrizesSection";
import AboutSection from "@/components/AboutSection";
import SponsorsSection from "@/components/SponsorsSection";
import TracksSection from "@/components/TracksSection";
import ContestSection from "@/components/ContestSection";
import TimelineSection from "@/components/TimelineSection";
import PastEventsSection from "@/components/PastEventsSection";
import WinnersSection from "@/components/WinnersSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import RegisterSection from "@/components/RegisterSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Custom cursor */}
      <CustomCursor />
      {/* Global background effects */}
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="fixed inset-0 scanline pointer-events-none opacity-30" />
      
      {/* Navigation */}
      <Navigation />
      <AnnouncementBar />

      {/* Main content */}
      <main>
        <HeroSection />
        <PrizesSection />
        <AboutSection />
        <SponsorsSection />
        <TracksSection />
        <ContestSection />
        <TimelineSection />
        <PastEventsSection />
        <WinnersSection />
        <TeamSection />
        <FAQSection />
        <RegisterSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
