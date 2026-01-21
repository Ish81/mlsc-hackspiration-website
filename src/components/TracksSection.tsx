import { useState } from "react";
import { Brain, Shield, Gamepad2, Globe, Lightbulb, ChevronRight } from "lucide-react";

const tracks = [
  {
    id: "ai",
    name: "AI / ML",
    icon: Brain,
    description: "Build intelligent solutions with machine learning, deep learning, and AI-powered applications.",
    color: "from-purple-500 to-pink-500",
    bgGlow: "bg-purple-500/20",
  },
  {
    id: "security",
    name: "Cybersecurity",
    icon: Shield,
    description: "Secure the digital world with innovative security solutions and ethical hacking tools.",
    color: "from-red-500 to-orange-500",
    bgGlow: "bg-red-500/20",
  },
  {
    id: "gaming",
    name: "Game Dev",
    icon: Gamepad2,
    description: "Create immersive gaming experiences with cutting-edge graphics and gameplay.",
    color: "from-green-500 to-emerald-500",
    bgGlow: "bg-green-500/20",
  },
  {
    id: "web",
    name: "Web3 / Blockchain",
    icon: Globe,
    description: "Decentralize the future with blockchain, smart contracts, and Web3 applications.",
    color: "from-blue-500 to-cyan-500",
    bgGlow: "bg-blue-500/20",
  },
  {
    id: "open",
    name: "Open Innovation",
    icon: Lightbulb,
    description: "Think beyond boundaries. Any idea that can change the world is welcome here.",
    color: "from-yellow-500 to-amber-500",
    bgGlow: "bg-yellow-500/20",
  },
];

const TracksSection = () => {
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null);

  return (
    <section id="tracks" className="py-28 relative overflow-hidden">
      {/* Dynamic background glow based on hovered track */}
      <div className="absolute inset-0 transition-all duration-700">
        {tracks.map((track) => (
          <div
            key={track.id}
            className={`absolute inset-0 ${track.bgGlow} blur-[150px] transition-opacity duration-700 ${
              hoveredTrack === track.id ? 'opacity-30' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-16">
          <h2 className="section-title">
            <span>Tracks</span>
          </h2>
        </div>

        <p className="text-center text-muted-foreground font-mono text-sm mb-12 max-w-2xl mx-auto">
          Choose your battlefield. Build something extraordinary in one of these domains.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {tracks.map((track) => (
            <div
              key={track.id}
              onMouseEnter={() => setHoveredTrack(track.id)}
              onMouseLeave={() => setHoveredTrack(null)}
              className={`group relative flex flex-col p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-500 cursor-pointer overflow-hidden ${
                hoveredTrack === track.id
                  ? 'border-primary/50 scale-105 shadow-[0_0_40px_hsl(var(--primary)/0.2)]'
                  : 'hover:border-primary/30'
              }`}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl mb-4 transition-all duration-500 bg-gradient-to-br ${track.color}`}
              >
                <track.icon size={28} className="text-white" />
              </div>
              
              {/* Name */}
              <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                {track.name}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                {track.description}
              </p>
              
              {/* Arrow indicator */}
              <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                <span className="text-xs font-mono uppercase tracking-wider">Explore</span>
                <ChevronRight size={14} className="ml-1" />
              </div>
              
              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${track.color} opacity-10 rounded-bl-3xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksSection;
