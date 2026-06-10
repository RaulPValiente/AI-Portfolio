import { useState, useEffect } from "react";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "techstack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "career", label: "Career" },
];

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => ({
        id: link.id,
        el: document.getElementById(link.id),
      }));

      for (let i = sections.length - 1; i >= 0; i--) {
        const { id, el } = sections[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActive(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-bg-primary/80 backdrop-blur-lg" : "bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 h-14 flex items-center justify-center">
        <ul className="flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollTo(link.id)}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors duration-200 ${
                  active === link.id
                    ? "text-text-primary bg-bg-card"
                    : "text-text-muted hover:text-text-secondary"
                }`}
                aria-current={active === link.id ? "page" : undefined}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
