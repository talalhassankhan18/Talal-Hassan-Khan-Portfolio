import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4 sm:py-5"}`}>
      <div className="container-px mx-auto max-w-[1600px]">
        <nav className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2 sm:py-3 transition-all ${scrolled || open ? "glass shadow-card" : ""}`}>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-brand flex items-center justify-center font-bold text-primary-foreground text-sm sm:text-base">T</div>
            <span className="font-display font-bold text-base sm:text-lg">Talal<span className="text-gradient">.</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-1.5 group/nav">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-1.5 text-sm rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-300 group-hover/nav:opacity-50 hover:!opacity-100"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden sm:inline-flex bg-gradient-brand text-primary-foreground px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold glow-purple hover:scale-105 transition">
              Hire Me
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden w-10 h-10 rounded-full glass flex items-center justify-center"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 glass rounded-3xl p-4 shadow-card flex flex-col gap-1 border border-white/5"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm rounded-2xl text-muted-foreground hover:text-foreground hover:bg-white/5 transition font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 bg-gradient-brand text-white px-4 py-3.5 rounded-2xl text-sm font-bold text-center shadow-lg active:scale-95 transition-transform"
              >
                Hire Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
