import { User, Users, Github, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "President",
    role: "MLSC President",
    category: "Leadership",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Organizer",
    role: "Event Organizer",
    category: "Leadership",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Core Member 1",
    role: "Technical Lead",
    category: "Core Team",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Core Member 2",
    role: "Design Lead",
    category: "Core Team",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Coordinator 1",
    role: "Logistics",
    category: "Coordinators",
    color: "from-yellow-500 to-amber-500",
  },
  {
    name: "Coordinator 2",
    role: "Marketing",
    category: "Coordinators",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Coordinator 3",
    role: "Outreach",
    category: "Coordinators",
    color: "from-teal-500 to-cyan-500",
  },
  {
    name: "Coordinator 4",
    role: "Sponsorship",
    category: "Coordinators",
    color: "from-indigo-500 to-purple-500",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-16">
          <h2 className="section-title">
            <Users size={16} className="text-accent" />
            <span>Meet The Team</span>
            <Users size={16} className="text-accent" />
          </h2>
        </div>

        <p className="text-center text-muted-foreground mb-12 font-mono text-sm">
          The minds behind <span className="text-primary">Hackpiration'26</span>
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-500 hover:border-primary/40 hover:scale-105 overflow-hidden"
            >
              {/* Gradient top border on hover */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              {/* Avatar */}
              <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} p-[2px] mb-4 group-hover:shadow-lg transition-shadow`}>
                <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                  <User size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>

              <span className="font-bold text-foreground text-center text-sm">
                {member.name}
              </span>
              <span className={`text-xs mt-1 bg-gradient-to-r ${member.color} bg-clip-text text-transparent font-medium`}>
                {member.role}
              </span>
              <span className="text-[10px] text-muted-foreground mt-1 font-mono uppercase tracking-wider">
                {member.category}
              </span>
              
              {/* Social links on hover */}
              <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-6 h-6 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Github size={12} className="text-muted-foreground" />
                </button>
                <button className="w-6 h-6 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Linkedin size={12} className="text-muted-foreground" />
                </button>
                <button className="w-6 h-6 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Twitter size={12} className="text-muted-foreground" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
