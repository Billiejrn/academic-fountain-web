
import { motion } from "framer-motion";
import {
  BookOpen,
  HeartHandshake,
  Lightbulb,
  Sprout,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Curiosity",
    description:
      "Encouraging children to ask questions, explore ideas, and develop a genuine love for learning.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Strong foundations",
    description:
      "Developing the knowledge and essential skills that support progress at every stage of education.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Character",
    description:
      "Promoting respect, responsibility, confidence, and positive relationships with others.",
    icon: HeartHandshake,
  },
  {
    number: "04",
    title: "Growth",
    description:
      "Recognising each child's potential and creating opportunities for them to develop and thrive.",
    icon: Sprout,
  },
];

const OurApproach = () => {
  return (
    <section className="bg-[#142B22] px-6 py-28 text-[#F8F7F2] md:px-12 lg:px-20 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#D7C7A4]">
              What guides us
            </p>

            <h2 className="max-w-xl font-serif text-5xl leading-[1.1] md:text-7xl">
              Growing minds. <i>Shaping futures.</i>
            </h2>

            <p className="mt-8 max-w-md text-base leading-8 text-white/60">
              Education is about more than what a child learns in a classroom.
              It is about who they become, how they think, and how they relate
              to the world around them.
            </p>

            <div className="mt-14 hidden h-px w-full bg-white/15 lg:block" />

            <p className="mt-6 hidden text-xs uppercase tracking-[0.2em] text-[#D7C7A4] lg:block">
              The foundation of every great beginning
            </p>
          </motion.div>

          <div className="border-t border-white/20">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.number}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="grid grid-cols-[45px_1fr] gap-5 border-b border-white/20 py-8 md:grid-cols-[55px_1fr_45px] md:gap-7 md:py-10"
                >
                  <span className="pt-2 text-xs tracking-widest text-[#D7C7A4]">
                    {value.number}
                  </span>

                  <div>
                    <h3 className="font-serif text-3xl md:text-4xl">
                      {value.title}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-7 text-white/55">
                      {value.description}
                    </p>
                  </div>

                  <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/20 text-[#D7C7A4] md:flex">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
