
import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=85",
    alt: "Children learning together",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=85",
    alt: "Classroom learning",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?w=900&q=85",
    alt: "Children enjoying an activity",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=900&q=85",
    alt: "Students learning in a classroom",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=85",
    alt: "Young child learning",
    className: "",
  },
];

const Gallery = () => {
  return (
    <section className="bg-white px-6 py-28 md:px-12 lg:px-20 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B7959]">
              Moments at Academic Fountain
            </p>

            <h2 className="font-serif text-5xl leading-[1.1] text-[#142B22] md:text-7xl">
              Life in <i>every frame.</i>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#777B75]">
            Every day brings a new opportunity to learn, connect, discover,
            and create memories.
          </p>
        </div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-4 md:gap-5">
          {images.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group overflow-hidden bg-[#F1F0EA] ${image.className}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        <p className="mt-7 text-xs leading-6 text-[#999B94]">
          A glimpse into our school community.
        </p>
      </div>
    </section>
  );
};

export default Gallery;
