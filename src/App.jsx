import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1028] via-[#0b1538] to-[#0a0f24] text-white font-sans relative overflow-x-hidden">
      {/* Ambient glow layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-indigo-700/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
    </div>
  );
}
