import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Timeline", href: "#timeline" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
  { label: "Contest", href: "#contest" },
  { label: "Register", href: "#register", highlight: true },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-primary/20 shadow-[0_0_30px_hsl(var(--primary)/0.1)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="group flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          <Terminal size={20} className="text-primary" />
          <span className="text-primary">HACK</span>
          <span className="text-foreground">PIRATION</span>
          <span className="text-secondary">'26</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={`relative px-4 py-2 text-sm font-mono uppercase tracking-wider transition-all duration-300 rounded-lg overflow-hidden ${
                item.highlight
                  ? "bg-primary text-primary-foreground hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:scale-105"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {!item.highlight && (
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0 peer-hover:w-full" />
              )}
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-primary/20">
          <div className="container mx-auto py-6 px-4 flex flex-col gap-2">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-3 text-sm font-mono uppercase tracking-wider text-left rounded-lg transition-all animate-fade-in-up ${
                  item.highlight
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5 border border-border/30"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="text-primary mr-2">&gt;</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
