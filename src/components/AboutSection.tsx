import { useEffect, useRef } from "react";
import { Code, Zap, Users, Trophy } from "lucide-react";

const AboutSection = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollAmount = 0;
    const step = 1;
    const maxScroll = slider.scrollWidth / 2;

    const scroll = () => {
      scrollAmount += step;
      if (scrollAmount >= maxScroll) {
        scrollAmount = 0;
      }
      slider.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Users, value: "500+", label: "Hackers" },
    { icon: Code, value: "24", label: "Hours" },
    { icon: Trophy, value: "₹1.75L+", label: "Prizes" },
    { icon: Zap, value: "5", label: "Tracks" },
  ];

  const placeholderImages = Array(8).fill(null);

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-16">
          <h2 className="section-title">
            <span>About Us</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Terminal-style about block */}
          <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 relative overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border/30">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-4 text-xs font-mono text-muted-foreground">about_mlsc.md</span>
            </div>
            
            <p className="text-lg leading-relaxed text-muted-foreground text-left">
              <span className="text-primary font-mono">$ cat about.txt</span>
              <br /><br />
              <span className="text-primary font-semibold">MLSC, VIT Pune</span> is a dynamic tech community operating under the aegis of{" "}
              <span className="text-foreground font-semibold">Microsoft</span>. Guided by the{" "}
              <span className="text-secondary">Microsoft Learn Student Ambassador</span> program, we are dedicated to empowering students by offering a platform to develop both technical and non-technical skills, with a strong focus on fostering a culture of{" "}
              <span className="text-primary">open-source collaboration</span> and{" "}
              <span className="text-accent text-glow-blue">skill development</span>.
              <br /><br />
              MLSC Pune drives innovation through events, projects, and hackathons.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl text-center hover:border-primary/30 transition-all duration-500 hover:scale-105 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Image slider */}
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {[...placeholderImages, ...placeholderImages].map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 h-44 bg-card/80 border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 hover:scale-105 transition-all duration-500 group"
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground/50 font-mono text-sm bg-gradient-to-br from-muted/10 to-muted/5 relative overflow-hidden">
                  <Code className="w-10 h-10 mb-2 text-primary/20" />
                  <span className="text-muted-foreground/60">Event {(index % 8) + 1}</span>
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
