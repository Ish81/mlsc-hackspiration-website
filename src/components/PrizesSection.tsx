import { Trophy, Medal, Award, Sparkles } from "lucide-react";

const prizes = [
  {
    place: "1ST PLACE",
    amount: "₹1,00,000",
    icon: Trophy,
    gradient: "from-yellow-400 via-amber-500 to-orange-500",
    glow: "shadow-[0_0_60px_hsl(45_100%_50%/0.4)]",
    borderGlow: "border-yellow-500/50",
    size: "lg",
  },
  {
    place: "2ND PLACE",
    amount: "₹50,000",
    icon: Medal,
    gradient: "from-slate-300 via-slate-400 to-slate-500",
    glow: "shadow-[0_0_40px_hsl(220_10%_60%/0.3)]",
    borderGlow: "border-slate-400/50",
    size: "md",
  },
  {
    place: "3RD PLACE",
    amount: "₹25,000",
    icon: Award,
    gradient: "from-orange-400 via-orange-500 to-orange-600",
    glow: "shadow-[0_0_40px_hsl(25_100%_50%/0.3)]",
    borderGlow: "border-orange-500/50",
    size: "md",
  },
];

const PrizesSection = () => {
  return (
    <section id="prizes" className="py-28 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-radial opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-20">
          <h2 className="section-title">
            <Sparkles className="text-secondary" size={16} />
            <span>Prize Pool</span>
            <Sparkles className="text-secondary" size={16} />
          </h2>
        </div>

        {/* Total prize pool */}
        <div className="text-center mb-16">
          <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-2">Total Worth</p>
          <p className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            ₹1,75,000+
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-end justify-center gap-6 max-w-5xl mx-auto">
          {/* Second place */}
          <div className="order-2 md:order-1 w-full md:w-1/3">
            <PrizeCard prize={prizes[1]} index={1} />
          </div>
          
          {/* First place - larger */}
          <div className="order-1 md:order-2 w-full md:w-1/3 md:-mb-8">
            <PrizeCard prize={prizes[0]} index={0} />
          </div>
          
          {/* Third place */}
          <div className="order-3 w-full md:w-1/3">
            <PrizeCard prize={prizes[2]} index={2} />
          </div>
        </div>
      </div>
    </section>
  );
};

const PrizeCard = ({ prize, index }: { prize: typeof prizes[0]; index: number }) => {
  const Icon = prize.icon;
  const isFirst = index === 0;
  
  return (
    <div
      className={`group relative flex flex-col items-center p-8 ${isFirst ? 'py-12' : 'py-8'} bg-card/80 backdrop-blur-sm border ${prize.borderGlow} rounded-2xl transition-all duration-500 hover:scale-105 ${prize.glow} overflow-hidden`}
    >
      {/* Animated gradient border */}
      <div className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-current opacity-50" style={{ borderColor: `hsl(var(--primary))` }} />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-current opacity-50" style={{ borderColor: `hsl(var(--primary))` }} />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-current opacity-50" style={{ borderColor: `hsl(var(--primary))` }} />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-current opacity-50" style={{ borderColor: `hsl(var(--primary))` }} />
      
      {/* Icon with gradient */}
      <div className={`relative mb-6 p-4 rounded-2xl bg-gradient-to-br ${prize.gradient}`}>
        <Icon size={isFirst ? 56 : 40} className="text-background" />
      </div>
      
      {/* Place label */}
      <span className={`text-xs font-mono uppercase tracking-[0.3em] mb-3 bg-gradient-to-r ${prize.gradient} bg-clip-text text-transparent font-bold`}>
        {prize.place}
      </span>
      
      {/* Amount */}
      <span className={`${isFirst ? 'text-4xl sm:text-5xl' : 'text-3xl sm:text-4xl'} font-bold text-foreground`}>
        {prize.amount}
      </span>
      
      {/* Additional perks for first place */}
      {isFirst && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary font-mono">+ Swags</span>
          <span className="text-xs px-3 py-1 rounded-full bg-secondary/20 text-secondary font-mono">+ Mentorship</span>
        </div>
      )}
    </div>
  );
};

export default PrizesSection;
