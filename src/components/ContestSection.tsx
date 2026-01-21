import { useState } from "react";
import { Send, Linkedin, Twitter, Trophy, Share2, Sparkles } from "lucide-react";

const ContestSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [postUrl, setPostUrl] = useState("");
  const [platform, setPlatform] = useState("linkedin");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", { postUrl, platform });
    setShowForm(false);
    setPostUrl("");
  };

  const placeholderWinners = [
    { name: "Participant 1", handle: "@user1", engagement: "2.5K" },
    { name: "Participant 2", handle: "@user2", engagement: "1.8K" },
    { name: "Participant 3", handle: "@user3", engagement: "1.2K" },
  ];

  return (
    <section id="contest" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-8">
          <h2 className="section-title">
            <Share2 size={16} className="text-secondary" />
            <span>Social Media Contest</span>
            <Share2 size={16} className="text-secondary" />
          </h2>
        </div>

        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground mb-2">
            Participate in our social media challenges and win exclusive swags.
          </p>
          <p className="text-primary font-mono text-sm mb-8">
            <Sparkles size={14} className="inline mr-1" />
            Most viral posts on LinkedIn and X win.
            <Sparkles size={14} className="inline ml-1" />
          </p>

          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-secondary/20 to-accent/20 text-foreground border border-secondary/40 rounded-xl font-bold uppercase tracking-wider hover:from-secondary/30 hover:to-accent/30 hover:border-secondary/60 hover:shadow-[0_0_30px_hsl(var(--secondary)/0.3)] transition-all duration-500"
          >
            <Send size={18} className="text-secondary" />
            Submit Entry
          </button>
        </div>

        {/* Entry Form */}
        {showForm && (
          <div className="max-w-md mx-auto mb-16 p-8 bg-card/80 backdrop-blur-sm border border-primary/30 rounded-2xl shadow-[0_0_40px_hsl(var(--primary)/0.15)] animate-fade-in-up">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border/30">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-4 text-xs font-mono text-muted-foreground">submit_entry.sh</span>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-mono text-primary mb-2">
                  $ post_url
                </label>
                <input
                  type="url"
                  value={postUrl}
                  onChange={(e) => setPostUrl(e.target.value)}
                  placeholder="https://linkedin.com/post/..."
                  className="w-full px-4 py-3 bg-muted/30 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-muted/50 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-mono text-primary mb-2">
                  $ platform
                </label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full px-4 py-3 bg-muted/30 border border-border/50 rounded-xl text-foreground focus:outline-none focus:border-primary/50 focus:bg-muted/50 transition-all"
                >
                  <option value="linkedin">LinkedIn</option>
                  <option value="x">X (Twitter)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold uppercase tracking-wider rounded-xl hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300"
              >
                Execute Submit
              </button>
            </form>
          </div>
        )}

        {/* Winners Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* LinkedIn Winners */}
          <div className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Linkedin size={20} className="text-blue-400" />
              </div>
              <h3 className="font-bold text-foreground">Top Winners from LinkedIn</h3>
            </div>
            <div className="space-y-3">
              {placeholderWinners.map((winner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-muted/20 rounded-xl border border-border/30 hover:border-primary/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      index === 0 ? 'bg-yellow-500/20' : index === 1 ? 'bg-slate-400/20' : 'bg-orange-500/20'
                    }`}>
                      <Trophy size={16} className={
                        index === 0 ? "text-yellow-400" : index === 1 ? "text-slate-400" : "text-orange-400"
                      } />
                    </div>
                    <div>
                      <span className="text-sm text-foreground font-medium">{winner.name}</span>
                      <span className="text-xs text-muted-foreground ml-2 font-mono">{winner.handle}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-primary">{winner.engagement}</span>
                </div>
              ))}
            </div>
          </div>

          {/* X Winners */}
          <div className="p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-foreground/10 flex items-center justify-center">
                <Twitter size={20} className="text-foreground" />
              </div>
              <h3 className="font-bold text-foreground">Top Winners from X</h3>
            </div>
            <div className="space-y-3">
              {placeholderWinners.map((winner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-muted/20 rounded-xl border border-border/30 hover:border-primary/20 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      index === 0 ? 'bg-yellow-500/20' : index === 1 ? 'bg-slate-400/20' : 'bg-orange-500/20'
                    }`}>
                      <Trophy size={16} className={
                        index === 0 ? "text-yellow-400" : index === 1 ? "text-slate-400" : "text-orange-400"
                      } />
                    </div>
                    <div>
                      <span className="text-sm text-foreground font-medium">{winner.name}</span>
                      <span className="text-xs text-muted-foreground ml-2 font-mono">{winner.handle}</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-primary">{winner.engagement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContestSection;
