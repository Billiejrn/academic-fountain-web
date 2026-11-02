
import { ArrowUpRight, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D2019] px-6 text-[#F8F7F2] md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1400px]">
        {/* Main footer */}
        <div className="grid gap-16 border-b border-white/15 py-20 md:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_0.8fr] lg:py-28">
          <div>
            <a href="#" className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D7C7A4]/50 font-serif text-lg text-[#D7C7A4]">
                AF
              </span>

              <span className="max-w-[190px] text-xs font-semibold uppercase leading-5 tracking-[0.15em]">
                Academic Fountain Montessori School
              </span>
            </a>

            <h2 className="mt-10 max-w-md font-serif text-4xl leading-tight md:text-5xl">
              Every great future begins somewhere.
            </h2>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#D7C7A4] pb-2 text-sm text-[#D7C7A4] transition-all hover:gap-5"
            >
              Get in touch
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div>
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#D7C7A4]">
              Explore
            </p>

            <ul className="space-y-5 text-sm text-white/60">
              <li><a href="#about" className="hover:text-white">About us</a></li>
              <li><a href="#academics" className="hover:text-white">Academics</a></li>
              <li><a href="#facilities" className="hover:text-white">Our environment</a></li>
              <li><a href="#admissions" className="hover:text-white">Admissions</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-[#D7C7A4]">
              Find us
            </p>

            <p className="max-w-xs text-sm leading-7 text-white/60">
              Lagos, Nigeria
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-[#D7C7A4] hover:text-[#D7C7A4]"
              >
                {/* <Facebook size={18} /> */}
              </a>

              <a
                href="#contact"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-colors hover:border-[#D7C7A4] hover:text-[#D7C7A4]"
              >
                {/* <Instagram size={18} /> */}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col justify-between gap-6 py-7 text-xs text-white/40 md:flex-row md:items-center">
          <p>
            © {currentYear} Academic Fountain Montessori School. All rights
            reserved.
          </p>

          <div className="flex items-center justify-between gap-6">
            <p>Made with care for the next generation.</p>

            <a
              href="#"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#D7C7A4] hover:text-[#D7C7A4]"
            >
              <ArrowUp size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
