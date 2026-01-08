import { Mail, Twitter, Linkedin, Instagram, Github, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="py-16 border-t border-border/50 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="font-mono text-lg font-bold text-foreground">
                <span className="text-primary">HACK</span>PIRATION<span className="text-secondary">'26</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                A hackathon by MLSC VIT Pune under the Microsoft Learn Student Ambassador program.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                Contact
              </h4>
              <div className="space-y-3">
                <a
                  href="mailto:hackaspire@vitpune.ac.in"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={16} />
                  hackaspire@vitpune.ac.in
                </a>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                  VIT Pune, Maharashtra, India
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground text-sm uppercase tracking-wider">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 hover-glow"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                Tag us with <span className="text-primary font-bold">#Hackpiration26</span>
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground font-mono">
              © 2026 MLSC VIT Pune. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with 💙 by the MLSC Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
