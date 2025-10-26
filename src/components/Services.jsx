import React from "react";
import { Calendar, PartyPopper, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: Calendar,
    title: "Full-Service Planning",
    desc: "End-to-end planning, timelines, vendor coordination, and rehearsals—curated to perfection.",
  },
  {
    icon: PartyPopper,
    title: "Experiential Design",
    desc: "Immersive storytelling, moodboards, decor, and lighting that glow like a blue moon night.",
  },
  {
    icon: MapPin,
    title: "Venue & Logistics",
    desc: "Venue scouting, travel, hospitality, and on-site flow so everything feels effortlessly celestial.",
  },
  {
    icon: Sparkles,
    title: "Production & Talent",
    desc: "Stage, A/V, live acts, and tech direction—flawless execution with a touch of stardust.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-400 via-indigo-700 to-[#0a0f24]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">Services under the Blue Moon</h2>
          <p className="mt-3 text-slate-300">We blend art direction with precise logistics to bring your story to life.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:border-sky-400/40 hover:bg-white/10 transition relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-sky-400/10 blur-2xl group-hover:bg-sky-400/20 transition" />
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 rounded-lg bg-sky-400/30 blur-md opacity-0 group-hover:opacity-100 transition" />
                  <Icon className="relative h-6 w-6 text-sky-300" />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">{desc}</p>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />
              <button className="mt-4 text-xs font-medium text-sky-300 hover:text-sky-200">Learn more →</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
