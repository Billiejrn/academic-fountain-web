
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Our Story", href: "#about" },
  { label: "Education", href: "#academics" },
  { label: "Our Environment", href: "#facilities" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="max-w-[1600px] mx-auto px-6 lg:px-14 h-24 flex items-center justify-between">

        {/* Wordmark */}
        <a href="#home" className="relative z-50 flex items-center gap-3">
          <div className="w-11 h-11 border border-white/60 rounded-full flex items-center justify-center">
            <span className="font-serif text-white text-lg tracking-tighter">
              AF
            </span>
          </div>

          <div className="text-white">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase">
              Academic Fountain
            </p>
            <p className="text-[9px] tracking-[0.35em] uppercase text-white/65 mt-1">
              Montessori School
            </p>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.16em] text-white/85 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Admission link */}
        <a
          href="#admissions"
          className="hidden lg:flex items-center gap-4 text-white border-b border-white/60 pb-2 text-[11px] uppercase tracking-[0.15em] hover:border-white transition-all"
        >
          Admissions
          <ArrowUpRight size={15} />
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden relative z-50 text-white"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#142B22] flex flex-col justify-center px-8 transition-all duration-500 lg:hidden ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <p className="text-[#B7A77B] text-[10px] tracking-[0.3em] uppercase mb-10">
          Explore Academic Fountain
        </p>

        <div className="flex flex-col gap-7">
          {links.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-4xl text-white"
            >
              <span className="text-xs text-[#B7A77B] mr-4">
                0{index + 1}
              </span>
              {link.label}
            </a>
          ))}

          <a
            href="#admissions"
            onClick={() => setMenuOpen(false)}
            className="mt-5 inline-flex items-center gap-3 text-white uppercase tracking-widest text-xs"
          >
            Enquire about admission
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
