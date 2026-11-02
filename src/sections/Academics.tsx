
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const levels = [
  {
    number: "01",
    name: "Nursery",
    description:
      "A joyful beginning where curiosity, creativity, play, and early discovery shape the foundation for lifelong learning.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&q=85",
  },
  {
    number: "02",
    name: "Primary",
    description:
      "Building strong foundations in literacy, numeracy, critical thinking, and the confidence to explore new ideas.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=85",
  },
  {
    number: "03",
    name: "Secondary",
    description:
      "Preparing young people for the future through academic development, independent thinking, and personal growth.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=1200&q=85",
  },
];

const Academics = () => {
  return (
    <section
      id="academics"
      className="bg-white px-6 py-28 md:px-12 lg:px-20 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B7959]">
              Learning at every stage
            </p>

            <h2 className="max-w-2xl font-serif text-5xl leading-[1.08] text-[#142B22] md:text-7xl">
              Every stage has a <i>purpose.</i>
            </h2>
          </div>

          <p className="max-w-sm text-base leading-7 text-[#777B75]">
            From the first steps in learning to the journey towards adulthood,
            we support children as they discover what they are capable of.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {levels.map((level, index) => (
            <motion.article
              key={level.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="group"
            >
              <div className="relative mb-7 aspect-[4/5] overflow-hidden bg-[#F1F0EA]">
                <img
                  src={level.image}
                  alt={`${level.name} education`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <span className="absolute left-5 top-5 bg-[#F8F7F2] px-4 py-2 text-xs tracking-widest text-[#142B22]">
                  {level.number}
                </span>
              </div>

              <div className="flex items-start justify-between border-b border-[#DADBD4] pb-5">
                <div>
                  <h3 className="font-serif text-3xl text-[#142B22]">
                    {level.name}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-7 text-[#777B75]">
                    {level.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  aria-label={`Enquire about ${level.name}`}
                  className="ml-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#DADBD4] text-[#142B22] transition-all duration-300 group-hover:border-[#142B22] group-hover:bg-[#142B22] group-hover:text-white"
                >
                  <ArrowUpRight size={19} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;
