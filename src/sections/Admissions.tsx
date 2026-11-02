
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const steps = [
  "Make an admission enquiry",
  "Speak with our admissions team",
  "Learn about the next steps",
];

const Admissions = () => {
  return (
    <section
      id="admissions"
      className="bg-[#F8F7F2] px-6 py-28 md:px-12 lg:px-20 lg:py-40"
    >
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-2 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#8B7959]">
            Begin the journey
          </p>

          <h2 className="font-serif text-5xl leading-[1.1] text-[#142B22] md:text-7xl">
            Their future begins with a <i>first step.</i>
          </h2>

          <p className="mt-8 max-w-lg text-base leading-8 text-[#777B75]">
            Choosing the right school is an important decision. We would love
            to help you discover what Academic Fountain Montessori School has
            to offer your child.
          </p>

          <a
            href="#contact"
            className="mt-10 inline-flex items-center gap-4 bg-[#142B22] px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-[#254B39]"
          >
            Start an enquiry
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex flex-col justify-center border-t border-[#DADBD4] pt-8 lg:border-l lg:border-t-0 lg:pl-14 lg:pt-0"
        >
          <p className="mb-9 text-xs font-semibold uppercase tracking-[0.2em] text-[#8B7959]">
            How to get started
          </p>

          <div className="space-y-9">
            {steps.map((step, index) => (
              <div key={step} className="flex items-start gap-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C9C9BD] text-xs text-[#142B22]">
                  0{index + 1}
                </span>

                <div className="pt-1">
                  <h3 className="font-serif text-2xl text-[#142B22]">
                    {step}
                  </h3>
                  {index === 0 && (
                    <p className="mt-2 text-sm leading-6 text-[#777B75]">
                      Tell us about your child's educational needs and the
                      class you are interested in.
                    </p>
                  )}
                </div>

                {index === 2 && (
                  <Check
                    size={18}
                    className="ml-auto mt-2 shrink-0 text-[#8B7959]"
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Admissions;
