
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    parentName: "",
    phone: "",
    classLevel: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const schoolWhatsApp = "2348000000000"; // Replace with school's WhatsApp number

    const message = `
Hello Academic Fountain Montessori School,

I would like to make an admission enquiry.

Parent/Guardian: ${form.parentName}
Phone Number: ${form.phone}
Class of Interest: ${form.classLevel}

Message: ${form.message || "I would like to know more about admission."}
    `;

    const url = `https://wa.me/${schoolWhatsApp}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="bg-[#142B22] px-6 py-28 text-[#F8F7F2] md:px-12 lg:px-20 lg:py-40"
    >
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#D7C7A4]">
            Let's talk
          </p>

          <h2 className="font-serif text-5xl leading-[1.1] md:text-7xl">
            We'd love to hear <i>from you.</i>
          </h2>

          <p className="mt-8 max-w-md text-base leading-8 text-white/60">
            Have questions about admissions, our programmes, or school life?
            Send us a message and let's start a conversation.
          </p>

          <div className="mt-14 space-y-7">
            <div className="flex items-start gap-5">
              <MapPin className="mt-1 text-[#D7C7A4]" size={21} />
              <div>
                <p className="text-sm font-semibold">Visit our school</p>
                <p className="mt-2 text-sm text-white/55">
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <MessageCircle className="mt-1 text-[#D7C7A4]" size={21} />
              <div>
                <p className="text-sm font-semibold">Admissions enquiries</p>
                <p className="mt-2 text-sm text-white/55">
                  Contact us through the enquiry form.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="border border-white/15 bg-white/[0.03] p-7 md:p-10"
        >
          <h3 className="mb-9 font-serif text-3xl">Make an enquiry</h3>

          <div className="space-y-7">
            <div>
              <label className="mb-3 block text-xs text-white/65">
                Parent / Guardian Name *
              </label>
              <input
                required
                type="text"
                value={form.parentName}
                onChange={(e) =>
                  setForm({ ...form, parentName: e.target.value })
                }
                placeholder="Your full name"
                className="w-full border-b border-white/25 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#D7C7A4]"
              />
            </div>

            <div>
              <label className="mb-3 block text-xs text-white/65">
                Phone Number *
              </label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="Your phone number"
                className="w-full border-b border-white/25 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#D7C7A4]"
              />
            </div>

            <div>
              <label className="mb-3 block text-xs text-white/65">
                Class of Interest *
              </label>
              <select
                required
                value={form.classLevel}
                onChange={(e) =>
                  setForm({ ...form, classLevel: e.target.value })
                }
                className="w-full border-b border-white/25 bg-[#142B22] py-3 text-sm text-white outline-none focus:border-[#D7C7A4]"
              >
                <option value="">Select a level</option>
                <option value="Nursery">Nursery</option>
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block text-xs text-white/65">
                Your Message
              </label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                placeholder="How can we help you?"
                className="w-full resize-none border-b border-white/25 bg-transparent py-3 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#D7C7A4]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-10 flex w-full items-center justify-between bg-[#D7C7A4] px-6 py-4 text-sm font-semibold text-[#142B22] transition-colors hover:bg-white"
          >
            Send enquiry on WhatsApp
            <ArrowUpRight size={19} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
