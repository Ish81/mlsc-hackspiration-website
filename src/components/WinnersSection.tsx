import { Trophy, Medal, Award, Star, ExternalLink } from "lucide-react";

const winners = [
  {
    place: "WINNER",
    team: "Team Alpha",
    project: "AI Innovation Project",
    icon: Trophy,
    gradient: "from-yellow-400 to-amber-500",
    bgGlow: "bg-yellow-500/20",
  },
  {
    place: "RUNNER-UP",
    team: "Team Beta",
    project: "Smart Solutions Hub",
    icon: Medal,
    gradient: "from-slate-300 to-slate-500",
    bgGlow: "bg-slate-400/20",
  },
  {
    place: "2ND RUNNER-UP",
    team: "Team Gamma",
    project: "Next Gen Platform",
    icon: Award,
    gradient: "from-orange-400 to-orange-600",
    bgGlow: "bg-orange-500/20",
  },
];

const WinnersSection = () => {
  return (
    <section id="winners" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-16">
          <h2 className="section-title">
            <Star size={16} className="text-secondary" />
            <span>Hall of Fame</span>
            <Star size={16} className="text-secondary" />
          </h2>
        </div>

        <p className="text-center text-muted-foreground font-mono text-sm mb-12">
          Previous edition champions — Coming soon for '26
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {winners.map((winner, index) => {
            const Icon = winner.icon;
            return (
              <div
                key={winner.place}
                className="group relative flex flex-col items-center p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-500 hover:scale-105 hover:border-primary/40 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow on hover */}
                <div className={`absolute inset-0 ${winner.bgGlow} blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`relative z-10 mb-6 p-4 rounded-2xl bg-gradient-to-br ${winner.gradient}`}>
                  <Icon size={40} className="text-background" />
                </div>
                
                {/* Place */}
                <span className={`relative z-10 text-xs font-mono uppercase tracking-[0.2em] bg-gradient-to-r ${winner.gradient} bg-clip-text text-transparent font-bold mb-3`}>
                  {winner.place}
                </span>
                
                {/* Team name */}
                <span className="relative z-10 text-xl font-bold text-foreground mb-2">
                  {winner.team}
                </span>
                
                {/* Project */}
                <span className="relative z-10 text-sm text-muted-foreground text-center">
                  {winner.project}
                </span>
                
                {/* View project link */}
                <button className="relative z-10 mt-4 flex items-center gap-1 text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  View Project <ExternalLink size={12} />
                </button>
                
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-2xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;
