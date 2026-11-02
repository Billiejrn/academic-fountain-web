
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#F8F7F2] px-6 py-28 md:px-12 lg:px-20 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 grid gap-10 lg:grid-cols-[1fr_1.2fr]"
        >
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B7959]">
              A little about us
            </p>

            <h2 className="max-w-xl font-serif text-5xl leading-[1.08] text-[#142B22] md:text-6xl lg:text-7xl">
              More than a school. A place to <i>become.</i>
            </h2>
          </div>

          <div className="flex flex-col justify-end lg:pl-16">
            <p className="max-w-2xl text-lg leading-8 text-[#5E625D] md:text-xl">
              At Academic Fountain Montessori School, we believe every child
              has something remarkable within them. Our purpose is to create
              an environment where curiosity is encouraged, confidence is
              nurtured, and every learner is given the opportunity to grow.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#777B75]">
              From the earliest years of discovery through primary and
              secondary education, we are committed to helping young minds
              develop the knowledge, character, and independence they need
              for the future.
            </p>

            <a
              href="#academics"
              className="mt-9 inline-flex w-fit items-center gap-3 border-b border-[#142B22] pb-2 text-sm font-semibold text-[#142B22] transition-all hover:gap-5"
            >
              Explore our approach
              <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>

        {/* Image and statement */}
        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[420px] overflow-hidden md:min-h-[600px]"
          >
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=85"
              alt="Children learning together"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#142B22]/10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex min-h-[420px] flex-col justify-between bg-[#142B22] p-9 text-[#F8F7F2] md:min-h-[600px] md:p-12"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-[#D7C7A4]">
              Our philosophy
            </span>

            <div>
              <span className="mb-6 block font-serif text-6xl text-[#D7C7A4]">
                “
              </span>

              <h3 className="font-serif text-4xl leading-[1.2] md:text-5xl">
                Education should inspire a lifetime of discovery.
              </h3>

              <div className="mt-10 h-px w-16 bg-[#D7C7A4]" />

              <p className="mt-6 text-sm leading-7 text-white/65">
                Academic Fountain Montessori School
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
