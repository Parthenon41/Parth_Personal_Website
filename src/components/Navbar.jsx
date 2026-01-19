import { Button } from "../extracomponents/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLink = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#exp", label: "Exp" },
  // { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScroll, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScroll ? "glass-strong py-3" : "bg-transparent py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center">
        <a
          href="#"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          PS <span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1 ml-auto">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLink.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block ml-3">
          <Button size="sm">Contact Me</Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground cursor-pointer ml-auto"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLink.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}

            <Button onClick={() => setIsMobileMenuOpen(false)} >Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
};
