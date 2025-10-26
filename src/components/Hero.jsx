import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Star, Calendar, PartyPopper } from "lucide-react";

function Starfield({ count = 80 }) {
  const containerRef = useRef(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const update = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      setDims({ w: width, h: height });
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  const stars = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 2 + 0.5,
      twinkle: Math.random() * 2 + 1,
    }));
  }, [count]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {stars.map((s) => (
        <motion.span
          key={s.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: s.twinkle * 2, repeat: Infinity, repeatType: "reverse", delay: s.id * 0.02 }}
          style={{
            left: s.x * dims.w,
            top: s.y * dims.h,
            width: s.size,
            height: s.size,
          }}
          className="absolute rounded-full bg-white/80 shadow-[0_0_8px_rgba(56,189,248,0.35)]"
        />
      ))}
    </div>
  );
}

function BlueMoon() {
  const cx = useMotionValue(0);
  const cy = useMotionValue(0);
  const rx = useSpring(useTransform(cx, [-1, 1], [-8, 8]), { stiffness: 120, damping: 12 });
  const ry = useSpring(useTransform(cy, [-1, 1], [8, -8]), { stiffness: 120, damping: 12 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    cx.set((x - 0.5) * 2);
    cy.set((y - 0.5) * 2);
  };

  const handleLeave = () => {
    cx.set(0);
    cy.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: ry, rotateY: rx }}
      className="relative mx-auto h-56 w-56 sm:h-72 sm:w-72 md:h-80 md:w-80"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-sky-300 via-sky-400 to-indigo-500 blur-[30px] opacity-30" />
      <div className="absolute -inset-4 rounded-full bg-sky-500/20 blur-2xl" />
      <svg viewBox="0 0 200 200" className="relative h-full w-full">
        <defs>
          <radialGradient id="moonGlow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="60%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#60a5fa" />
          </radialGradient>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
          </filter>
        </defs>
        <circle cx="100" cy="100" r="80" fill="url(#moonGlow)" />
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const r = 70;
          const x = 100 + Math.cos(angle) * r;
          const y = 100 + Math.sin(angle) * r;
          return <circle key={i} cx={x} cy={y} r={Math.random() * 2 + 1.5} fill="#e0f2fe" opacity="0.7" filter="url(#soft)" />;
        })}
        {[8, 14, 22, 32, 45, 58].map((r, i) => (
          <circle key={i} cx={100 + (i % 2 ? 6 : -5)} cy={100 + (i % 3 ? -4 : 5)} r={r / 16} fill="#bfdbfe" opacity="0.6" />
        ))}
      </svg>
      <motion.div
        className="absolute inset-0 rounded-full ring-2 ring-sky-300/40"
        animate={{ boxShadow: [
          "0 0 40px rgba(56,189,248,0.25)",
          "0 0 80px rgba(56,189,248,0.45)",
          "0 0 40px rgba(56,189,248,0.25)",
        ]}}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-center justify-center">
      <Starfield />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Crafting Unforgettable Moments under the Blue Moon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-5 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            Blue Moon Tales is an event management studio that blends celestial aesthetics with seamless execution. From intimate gatherings to grand galas, we curate experiences that feel rare, luminous, and timeless.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-900/40 hover:from-sky-400 hover:to-indigo-500 transition">
              <Calendar className="h-4 w-4" /> Plan Your Event
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-sky-100 hover:bg-white/15 border border-white/10 transition">
              <PartyPopper className="h-4 w-4" /> Explore Services
            </a>
          </motion.div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <BlueMoon />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0f24] to-transparent" />
    </section>
  );
}
