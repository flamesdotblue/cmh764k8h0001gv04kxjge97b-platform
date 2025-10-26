import React from "react";
import { Moon, Sparkles } from "lucide-react";

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#070b1f]/60 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <button
          className="group inline-flex items-center gap-2"
          onClick={() => scrollTo("top")}
          aria-label="Blue Moon Tales"
        >
          <span className="relative">
            <span className="absolute inset-0 rounded-full bg-sky-400/30 blur-md group-hover:bg-sky-400/50 transition" />
            <Moon className="relative h-6 w-6 text-sky-300" />
          </span>
          <span className="text-lg tracking-wide font-semibold text-sky-200">
            Blue Moon Tales
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <button onClick={() => scrollTo("services")} className="text-slate-300 hover:text-white transition">Services</button>
          <button onClick={() => scrollTo("contact")} className="text-slate-300 hover:text-white transition">Contact</button>
          <a
            href="#contact"
            onClick={(e)=>{e.preventDefault();scrollTo("contact");}}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 text-sm font-medium shadow-lg shadow-sky-900/30 hover:from-sky-400 hover:to-indigo-500 transition"
          >
            <Sparkles className="h-4 w-4" /> Plan Your Event
          </a>
        </nav>
      </div>
    </header>
  );
}
