"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const tools = [
  {
    emoji: "📢",
    name: "Notice Generator",
    desc: "Create professional class notices and announcements in seconds.",
    color: "text-indigo-300",
    bg: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    emoji: "📸",
    name: "Instagram Caption Generator",
    desc: "Generate engaging captions for your institute or business posts.",
    color: "text-pink-300",
    bg: "bg-pink-500/10 border-pink-500/20",
  },
  {
    emoji: "⭐",
    name: "Google Review Reply Generator",
    desc: "Craft professional, warm replies to customer reviews instantly.",
    color: "text-amber-300",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    emoji: "🍽️",
    name: "Menu-to-WhatsApp Preview",
    desc: "Convert your menu into a clean, shareable WhatsApp format.",
    color: "text-orange-300",
    bg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    emoji: "📅",
    name: "Class Schedule Extractor",
    desc: "Paste your timetable — get a clean, structured format in seconds.",
    color: "text-emerald-300",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    emoji: "💸",
    name: "Fee Reminder Message Generator",
    desc: "Create polite, professional fee reminders for students and parents.",
    color: "text-cyan-300",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    emoji: "❓",
    name: "Business FAQ Generator",
    desc: "Generate a ready-to-use FAQ document from your business details.",
    color: "text-violet-300",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
];

export default function FreeTools() {
  return (
    <section className="relative section-padding overflow-hidden" id="free-tools">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 bottom-0 w-[600px] h-[400px] bg-amber-600/6 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold mb-5 tracking-wide">
            <Sparkles className="w-3 h-3" />
            100% Free
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Free AI tools that{" "}
            <span className="gradient-text">bring customers to your business.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-3">
            Try our free tools — no signup, no payment. When you&apos;re ready, they connect
            directly into your full WhatsApp AI chatbot.
          </p>
        </motion.div>

        {/* Tools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`group glass rounded-2xl border ${tool.bg} p-5 transition-all duration-250 cursor-pointer`}
            >
              <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform duration-300">
                {tool.emoji}
              </span>
              <h3 className={`text-sm font-bold mb-1.5 ${tool.color}`}>{tool.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{tool.desc}</p>

              <div className="mt-3 flex items-center gap-1 text-xs text-slate-500 group-hover:text-slate-300 transition-colors">
                Try free
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}

          {/* "More coming soon" card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: tools.length * 0.07 }}
            className="glass rounded-2xl border border-white/5 p-5 flex flex-col items-center justify-center text-center"
          >
            <span className="text-3xl mb-3">✨</span>
            <p className="text-sm font-semibold text-slate-400 mb-1">More tools coming soon</p>
            <p className="text-xs text-slate-500">New AI tools added regularly for local businesses</p>
          </motion.div>
        </div>

        {/* Lead magnet note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-xl mx-auto text-center glass rounded-2xl px-6 py-5 border border-indigo-500/15 bg-indigo-500/5"
        >
          <p className="text-sm text-slate-300">
            <span className="font-semibold text-white">💡 How it works:</span> Use our free tools
            to create content. When you&apos;re ready, LocalSpark AI turns these into a full WhatsApp
            chatbot that handles these questions automatically.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
