import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Services", href: "#services", type: "hash" as const },
  { label: "Projects", href: "#projects", type: "hash" as const },
  { label: "Products", href: "/products", type: "route" as const },
  { label: "Blog", href: "/blog", type: "route" as const },
  { label: "Careers", href: "/careers", type: "route" as const },
  { label: "Testimonials", href: "/testimonials", type: "route" as const },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (location.pathname !== "/") return;
      const hashLinks = navLinks.filter((l) => l.type === "hash");
      for (const l of hashLinks) {
        const id = l.href.replace("#", "");
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(l.href);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [location.pathname]);

  useEffect(() => {
    // Set active for route pages
    const routeLink = navLinks.find((l) => l.type === "route" && l.href === location.pathname);
    if (routeLink) setActive(routeLink.href);
    else if (location.pathname === "/") setActive("");
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <>
      {/* Floating Oval Bar */}
      <motion.nav
        initial={{ y: -80, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
      >
        <div
          className={`w-full max-w-5xl relative flex items-center justify-between px-6 md:px-8 py-3 rounded-full border shadow-lg backdrop-blur-xl transition-all duration-300 bg-transparent border-white/20`}
        >
          {/* Logo Top Left */}
          <Link to="/" className="text-lg md:text-xl font-bold tracking-tight flex items-center">
            <img
              src="/Solid_Logo_light_purple.svg"
              alt="Mayhem Logo"
              className="h-8 w-auto mr-4"
            />
            <div>
              <div className="p-0 m-0 leading-none" style={{ fontSize: '1.4rem' }}>MAYHEM</div>
              <div className="p-0 m-0 leading-none" style={{ fontSize: '0.5rem' }}>SOFTWARES {' '} BANGLADESH</div>
            </div>
          </Link>

          {/* Center Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              const cls = `relative text-sm transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`;
              const underline = isActive && (
                <motion.span layoutId="nav-underline" className="absolute left-0 -bottom-2 h-0.5 w-full bg-primary rounded-full" />
              );
              return link.type === "route" ? (
                <Link key={link.href} to={link.href} className={cls}>
                  {link.label}
                  {underline}
                </Link>
              ) : (
                <a key={link.href} href={link.href} className={cls}>
                  {link.label}
                  {underline}
                </a>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Get Started Top Right */}
            <div className="hidden md:block">
              <Button size="sm" className="rounded-full px-5" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 rounded-full border hover:bg-accent transition-colors"
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Floating Mobile Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-24 inset-x-0 mx-auto z-40 w-[92%] max-w-md rounded-3xl border backdrop-blur-xl bg-background/90 shadow-2xl md:hidden"
          >
            <div className="p-4 space-y-1">
              {navLinks.map((link, i) => {
                const cls = `block py-3 px-4 rounded-2xl text-sm transition-colors ${active === link.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`;
                const motionProps = {
                  initial: { opacity: 0, x: -10 } as const,
                  animate: { opacity: 1, x: 0 } as const,
                  transition: { delay: i * 0.05 },
                  onClick: () => setIsOpen(false),
                };
                return link.type === "route" ? (
                  <motion.div key={link.href} {...motionProps}>
                    <Link to={link.href} className={cls}>{link.label}</Link>
                  </motion.div>
                ) : (
                  <motion.a key={link.href} href={link.href} className={cls} {...motionProps}>
                    {link.label}
                  </motion.a>
                );
              })}

              <Button className="w-full mt-3 rounded-full" asChild>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
