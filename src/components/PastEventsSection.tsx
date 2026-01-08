import { ImageIcon, Calendar, MapPin } from "lucide-react";

const pastEvents = [
  { name: "Hackpiration'25", date: "Jan 2025", location: "VIT Pune" },
  { name: "Code Sprint", date: "Oct 2024", location: "VIT Pune" },
  { name: "AI Workshop", date: "Sep 2024", location: "Online" },
  { name: "Web3 Bootcamp", date: "Aug 2024", location: "VIT Pune" },
  { name: "DevFest '24", date: "Jul 2024", location: "VIT Pune" },
  { name: "ML Challenge", date: "Jun 2024", location: "Online" },
];

const PastEventsSection = () => {
  return (
    <section id="past-events" className="py-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <h2 className="section-title">
            <Calendar size={16} className="text-secondary" />
            <span>Past Events</span>
            <Calendar size={16} className="text-secondary" />
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {pastEvents.map((event, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/40 hover:scale-[1.02]"
            >
              {/* Image placeholder */}
              <div className="relative h-40 bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center">
                <ImageIcon size={40} className="text-muted-foreground/30" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {event.name}
                </h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} className="text-primary" />
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-secondary" />
                    {event.location}
                  </span>
                </div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastEventsSection;
