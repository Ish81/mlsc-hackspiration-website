import { Zap } from "lucide-react";

const AnnouncementBar = () => {
  const content = "⚡ REGISTRATION CLOSING SOON ⚡ HACKPIRATION'26 ⚡ REGISTER NOW ⚡ BUILD THE FUTURE";
  
  return (
    <div className="fixed top-[60px] left-0 right-0 z-40 bg-gradient-to-r from-primary/20 via-secondary/10 to-primary/20 border-y border-primary/30 overflow-hidden backdrop-blur-sm">
      <div className="py-2.5 flex">
        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-4 text-sm font-mono font-bold tracking-wider">
              <Zap size={14} className="text-primary animate-pulse-glow" />
              <span className="text-primary">{content}</span>
            </span>
          ))}
        </div>
        <div className="animate-marquee flex items-center gap-16 whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="flex items-center gap-4 text-sm font-mono font-bold tracking-wider">
              <Zap size={14} className="text-primary animate-pulse-glow" />
              <span className="text-primary">{content}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
