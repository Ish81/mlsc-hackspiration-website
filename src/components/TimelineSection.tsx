import { Circle, CheckCircle2, Rocket, FileText, Users, Code, Trophy, Calendar } from "lucide-react";

const timelineEvents = [
  {
    title: "Registrations Open",
    description: "till 15th Jan",
    icon: Rocket,
    active: true,
  },
  {
    title: "Round 1",
    description: "Idea Submission",
    icon: FileText,
    active: false,
  },
  {
    title: "Shortlisted Teams",
    description: "Announced",
    icon: Users,
    active: false,
  },
  {
    title: "Day 1",
    description: "Build Phase Begins",
    icon: Code,
    active: false,
  },
  {
    title: "Day 2",
    description: "Build Phase Ends",
    icon: Code,
    active: false,
  },
  {
    title: "31st Jan",
    description: "Judging & Winners",
    icon: Trophy,
    active: false,
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-radial opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-16">
          <h2 className="section-title">
            <Calendar size={16} className="text-secondary" />
            <span>Timeline</span>
            <Calendar size={16} className="text-secondary" />
          </h2>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Main line with gradient */}
            <div className="absolute top-10 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-full opacity-30" />
            <div className="absolute top-10 left-0 w-[16.66%] h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />

            <div className="grid grid-cols-6 gap-4">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                  <div key={index} className="relative flex flex-col items-center group">
                    {/* Glow effect */}
                    {event.active && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary/30 blur-2xl rounded-full" />
                    )}
                    
                    {/* Node */}
                    <div
                      className={`relative z-10 w-20 h-20 flex items-center justify-center rounded-2xl border-2 transition-all duration-500 ${
                        event.active
                          ? "bg-primary/20 border-primary text-primary shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
                          : "bg-card/80 backdrop-blur-sm border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-primary"
                      }`}
                    >
                      <Icon size={28} />
                    </div>

                    {/* Content */}
                    <div className="mt-6 text-center">
                      <h4
                        className={`font-bold text-sm ${
                          event.active ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {event.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1 font-mono">
                        {event.description}
                      </p>
                    </div>
                    
                    {/* Active indicator */}
                    {event.active && (
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden max-w-md mx-auto">
          <div className="relative">
            {/* Vertical line with gradient */}
            <div className="absolute top-0 bottom-0 left-10 w-1 bg-gradient-to-b from-primary via-secondary to-accent rounded-full opacity-30" />
            <div className="absolute top-0 left-10 w-1 h-[16.66%] bg-gradient-to-b from-primary to-secondary rounded-full" />

            <div className="space-y-8">
              {timelineEvents.map((event, index) => {
                const Icon = event.icon;
                return (
                  <div key={index} className="relative flex items-start gap-6">
                    {/* Node */}
                    <div
                      className={`relative z-10 flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-2xl border-2 transition-all ${
                        event.active
                          ? "bg-primary/20 border-primary text-primary shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
                          : "bg-card border-border text-muted-foreground"
                      }`}
                    >
                      <Icon size={28} />
                    </div>

                    {/* Content */}
                    <div className="pt-4">
                      <h4
                        className={`font-bold ${
                          event.active ? "text-primary" : "text-foreground"
                        }`}
                      >
                        {event.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1 font-mono">
                        {event.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
