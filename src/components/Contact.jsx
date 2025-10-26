import React from "react";
import { Mail, Phone, Send, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 relative overflow-hidden"
        >
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="relative">
            <h3 className="text-2xl font-semibold">Let's create your tale</h3>
            <p className="mt-2 text-slate-300">Share a few details and we'll reach out to craft a moonlit experience.</p>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-300">Name</label>
                <input className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none focus:border-sky-400/60 placeholder:text-slate-400" placeholder="Luna Rivera" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none focus:border-sky-400/60 placeholder:text-slate-400" placeholder="you@domain.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-300">Event Type</label>
                <input className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none focus:border-sky-400/60 placeholder:text-slate-400" placeholder="Wedding, Gala, Product Launch..." />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-300">Message</label>
                <textarea rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 outline-none focus:border-sky-400/60 placeholder:text-slate-400" placeholder="Tell us about your vision" />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between gap-3">
                <div className="text-slate-400 text-xs">We typically respond within 24 hours.</div>
                <button type="button" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-900/40 hover:from-sky-400 hover:to-indigo-500 transition">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-6"
        >
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0e1633] to-[#0b1533] p-8">
            <h4 className="text-xl font-semibold">Contact</h4>
            <div className="mt-4 space-y-3 text-slate-300">
              <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-sky-300" /> hello@bluemoon.tales</p>
              <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-sky-300" /> +1 (555) 012-3456</p>
              <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-sky-300" /> Operating worldwide from New York & London</p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
            <h4 className="text-xl font-semibold">Why Blue Moon Tales?</h4>
            <ul className="mt-4 space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" /> Boutique attention with world-class execution</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" /> Design-first approach grounded in logistics</li>
              <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" /> Vendor ecosystem curated for excellence</li>
            </ul>
          </div>
          <p className="text-center text-xs text-slate-400">© {new Date().getFullYear()} Blue Moon Tales — Crafted under rare skies.</p>
        </motion.div>
      </div>
    </section>
  );
}
