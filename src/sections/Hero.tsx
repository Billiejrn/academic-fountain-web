
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[760px] h-screen max-h-[1100px] w-full overflow-hidden bg-[#142B22]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-[1.02]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=2400&q=90')",
        }}
      />

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#101C17]/80 via-[#101C17]/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#101C17]/75 via-transparent to-black/25" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1600px] mx-auto px-6 lg:px-14 flex flex-col justify-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-8 mt-20"
        >
          <span className="w-10 h-px bg-[#C9B78D]" />

          <span className="text-[#E5D9BD] uppercase text-[10px] sm:text-xs tracking-[0.35em]">
            An environment for becoming
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-white text-[clamp(3.8rem,9vw,9rem)] leading-[0.91] tracking-[-0.055em] max-w-[1050px]"
        >
          Every great
          <br />
          future begins
          <br />
          <span className="italic font-normal text-[#D7C7A4]">
            somewhere.
          </span>
        </motion.h1>

        {/* Description and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row sm:items-end gap-9 sm:gap-16"
        >
          <p className="max-w-[370px] text-white/75 text-sm leading-7">
            A place where curiosity is encouraged, potential is nurtured,
            and young minds are inspired to shape a better tomorrow.
          </p>

          <a
            href="#about"
            className="group inline-flex items-center gap-5 text-white uppercase text-[10px] tracking-[0.2em] pb-3 border-b border-white/50 hover:border-[#D7C7A4] w-fit transition-all"
          >
            Discover our school

            <span className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center group-hover:bg-[#D7C7A4] group-hover:text-[#142B22] transition-all">
              <ArrowUpRight size={15} />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Right-side vertical label */}
      <div className="hidden lg:block absolute right-14 top-1/2 -translate-y-1/2 z-10">
        <p className="text-white/75 text-[9px] tracking-[0.3em] uppercase [writing-mode:vertical-rl]">
          Nursery · Primary · Secondary
        </p>
      </div>

      {/* Bottom information */}
      <div className="absolute bottom-9 left-6 right-6 lg:left-14 lg:right-14 z-10 flex items-end justify-between">
        <div>
          <p className="text-white/50 text-[9px] tracking-[0.25em] uppercase">
            Academic Fountain Montessori School
          </p>
          <p className="text-white/80 text-[10px] tracking-[0.15em] mt-2">
            LAGOS, NIGERIA
          </p>
        </div>

        <a
          href="#about"
          className="hidden sm:flex items-center gap-3 text-white/70 hover:text-white transition-colors"
        >
          <span className="text-[9px] tracking-[0.2em] uppercase">
            Scroll to explore
          </span>
          <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}
