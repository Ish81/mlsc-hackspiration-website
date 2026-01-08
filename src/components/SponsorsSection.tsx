import { Plus, Sparkles, ExternalLink } from "lucide-react";

const sponsors = [
  { name: "CapEx.club", tier: "gold" },
  { name: "BlockOn", tier: "gold" },
  { name: "SolidityScan.xyz", tier: "silver" },
  { name: "WebWire", tier: "silver" },
  { name: "Actual One Protocol", tier: "silver" },
  { name: "Quill Audits", tier: "silver" },
  { name: "Devfolio", tier: "platinum" },
  { name: "Polygon", tier: "platinum" },
  { name: "AppWorld", tier: "bronze" },
  { name: "Stack", tier: "bronze" },
];

const tierColors: Record<string, string> = {
  platinum: "from-violet-500 to-purple-600",
  gold: "from-yellow-400 to-amber-500",
  silver: "from-slate-300 to-slate-500",
  bronze: "from-orange-400 to-orange-600",
};

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-radial opacity-15" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-16">
          <h2 className="section-title">
            <Sparkles size={16} className="text-secondary" />
            <span>Our Sponsors</span>
            <Sparkles size={16} className="text-secondary" />
          </h2>
        </div>

        <p className="text-center text-muted-foreground font-mono text-sm mb-12 max-w-xl mx-auto">
          Backed by industry leaders who believe in the power of innovation
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.name}
              className="group relative flex flex-col items-center justify-center h-24 px-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl hover:border-primary/40 transition-all duration-500 hover:scale-105 overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Gradient accent on hover */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${tierColors[sponsor.tier]} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                {sponsor.name}
              </span>
              <span className={`text-[10px] font-mono uppercase tracking-wider mt-1 bg-gradient-to-r ${tierColors[sponsor.tier]} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity`}>
                {sponsor.tier}
              </span>
              
              {/* Hover glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tierColors[sponsor.tier]} opacity-0 group-hover:opacity-5 transition-opacity`} />
            </div>
          ))}

          {/* Become a sponsor card */}
          <div className="group flex flex-col items-center justify-center h-24 px-4 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 border-dashed rounded-xl hover:border-primary/60 hover:from-primary/15 hover:to-secondary/15 transition-all duration-500 cursor-pointer hover:scale-105">
            <Plus size={22} className="text-primary mb-1 group-hover:rotate-90 transition-transform duration-300" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              Become a Sponsor
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
