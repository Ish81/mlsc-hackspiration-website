import { ArrowRight, Rocket, Users, Calendar } from "lucide-react";

const RegisterSection = () => {
  return (
    <section id="register" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-secondary/10 blur-[100px] rounded-full" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Terminal-style header */}
          <div className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 md:p-12 text-center overflow-hidden relative">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
            
            {/* Terminal header */}
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="ml-4 text-xs font-mono text-muted-foreground">hackpiration@register:~$</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Ready to </span>
              <span className="text-primary text-glow">Hack</span>
              <span className="text-foreground">?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto font-mono">
              Join 500+ developers, designers, and innovators at Hackpiration'26.
              <br />
              <span className="text-primary">Limited spots available.</span>
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 text-sm font-mono">
                <Users size={18} className="text-primary" />
                <span className="text-muted-foreground">500+ Hackers</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-mono">
                <Calendar size={18} className="text-secondary" />
                <span className="text-muted-foreground">24 Hours</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-mono">
                <Rocket size={18} className="text-accent" />
                <span className="text-muted-foreground">₹1.75L+ Prizes</span>
              </div>
            </div>

            <a
              href="https://unstop.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 text-lg font-bold bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl transition-all duration-500 hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)] hover:scale-105"
            >
              <Rocket size={22} className="transition-transform group-hover:-translate-y-1" />
              <span className="uppercase tracking-wider">Register on unstop</span>
              <ArrowRight
                size={22}
                className="transition-transform group-hover:translate-x-2"
              />
            </a>

            <p className="text-sm text-muted-foreground mt-8 font-mono flex items-center justify-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              Registration closes on 15th January 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
