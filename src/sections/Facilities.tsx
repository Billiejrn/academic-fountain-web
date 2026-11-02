
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const facilities = [
  {
    title: "Spaces to discover",
    description:
      "An environment that encourages exploration, creativity, and active learning.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=85",
  },
  {
    title: "Room to grow",
    description:
      "Spaces designed to support learning, interaction, and personal development.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=85",
  },
];

const Facilities = () => {
  return (
    <section
      id="facilities"
      className="bg-[#F8F7F2] px-6 py-28 md:px-12 lg:px-20 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B7959]">
              The environment
            </p>

            <h2 className="font-serif text-5xl leading-[1.1] text-[#142B22] md:text-7xl">
              A place to learn, explore and <i>grow.</i>
            </h2>
          </div>

          <div className="md:pl-12">
            <p className="max-w-lg text-base leading-8 text-[#777B75]">
              A child's environment plays an important role in their
              development. We believe learning should happen in an atmosphere
              that inspires confidence, encourages discovery, and makes
              children feel welcome.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {facilities.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <div className="group relative aspect-[5/4] overflow-hidden bg-[#EAE9E2]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <span className="absolute bottom-6 left-6 font-serif text-3xl text-white md:text-4xl">
                  {item.title}
                </span>
              </div>

              <div className="flex items-start justify-between gap-5 border-b border-[#DADBD4] py-6">
                <p className="max-w-md text-sm leading-7 text-[#777B75]">
                  {item.description}
                </p>

                <ArrowUpRight
                  size={20}
                  className="mt-1 shrink-0 text-[#142B22]"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
