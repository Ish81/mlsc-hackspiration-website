import { useState, useEffect } from "react";
import { ArrowRight, Terminal, Code2, Cpu, Binary } from "lucide-react";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-01-31T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleRegister = () => {
    document.querySelector("#register")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute inset-0 hex-pattern" />
      
      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Code2 className="absolute top-20 left-[10%] text-primary/20 w-16 h-16 animate-float" style={{ animationDelay: '0s' }} />
        <Terminal className="absolute top-40 right-[15%] text-secondary/20 w-12 h-12 animate-float" style={{ animationDelay: '-1s' }} />
        <Cpu className="absolute bottom-40 left-[20%] text-accent/20 w-14 h-14 animate-float" style={{ animationDelay: '-2s' }} />
        <Binary className="absolute bottom-32 right-[10%] text-primary/15 w-10 h-10 animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 scanline" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in-up">
          {/* Terminal badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 bg-primary/5 backdrop-blur-sm">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
            <span className="text-sm font-mono text-primary tracking-wider">MLSC VIT PUNE</span>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
          </div>

          {/* Main title with glitch effect */}
          <div className="space-y-2">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
              <span 
                className="glitch inline-block text-foreground"
                data-text="HACK"
              >
                HACK
              </span>
              <span 
                className="glitch inline-block text-primary text-glow ml-2"
                data-text="PIRATION"
              >
                PIRATION
              </span>
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent via-primary to-transparent" />
              <span className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold text-secondary text-glow-pink">
                '26
              </span>
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </div>

          {/* Tagline */}
          <div className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl font-mono tracking-wide">
            <span className="text-muted-foreground">&lt;</span>
            <span className="text-primary">CODE</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-secondary">CREATE</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-accent text-glow-blue">CONQUER</span>
            <span className="text-muted-foreground">/&gt;</span>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleRegister}
            className="group relative inline-flex items-center gap-3 px-10 py-5 mt-6 text-lg font-bold bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_50px_hsl(var(--primary)/0.6)] hover:scale-105"
          >
            <span className="relative z-10 uppercase tracking-wider">Register Now</span>
            <ArrowRight
              size={22}
              className="relative z-10 transition-transform group-hover:translate-x-2"
            />
            {/* Animated border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-[2px] bg-gradient-to-r from-primary via-primary to-accent rounded-[10px] z-[1]" />
          </button>

          {/* Event info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mt-8 text-sm font-mono">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm">
              <span className="text-muted-foreground">📅</span>
              <span className="text-foreground font-semibold">31st January 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm">
              <span className="text-muted-foreground">📍</span>
              <span className="text-foreground font-semibold">VIT Pune</span>
            </div>
          </div>

          {/* Countdown */}
          <div className="flex flex-col items-center gap-6 mt-10">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-primary/50" />
              <span className="text-xs font-mono text-primary uppercase tracking-[0.3em]">
                Registration Closes In
              </span>
              <div className="h-px w-8 bg-primary/50" />
            </div>
            
            <div className="flex gap-4 sm:gap-6">
              {[
                { value: timeLeft.days, label: "DAYS" },
                { value: timeLeft.hours, label: "HRS" },
                { value: timeLeft.minutes, label: "MIN" },
                { value: timeLeft.seconds, label: "SEC" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-18 sm:w-24 h-20 sm:h-28 flex flex-col items-center justify-center bg-card/80 backdrop-blur-sm border border-primary/30 rounded-xl overflow-hidden">
                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary" />
                    
                    <span className="text-3xl sm:text-4xl font-mono font-bold text-primary text-glow">
                      {String(item.value).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground mt-1 tracking-widest">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
