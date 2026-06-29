"use client";

import { motion } from "framer-motion";
import { Upload, Brain, MessageSquare, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    number: "01",
    title: "Upload your documents",
    description:
      "Upload PDFs, images, Excel files, menus, brochures, notices, or class schedules. Any format — we handle it.",
    color: "from-indigo-500 to-blue-500",
    glow: "shadow-indigo-500/30",
    examples: ["Schedule.pdf", "Notice.jpg", "Menu.xlsx"],
    iconBg: "bg-indigo-500/15 border-indigo-500/25",
    iconColor: "text-indigo-400",
  },
  {
    icon: Brain,
    number: "02",
    title: "AI reads and organises it",
    description:
      "LocalSpark AI converts your documents into a controlled knowledge base. The chatbot answers only from your approved information.",
    color: "from-violet-500 to-purple-500",
    glow: "shadow-violet-500/30",
    examples: ["Understands context", "Extracts schedules", "Organises by topic"],
    iconBg: "bg-violet-500/15 border-violet-500/25",
    iconColor: "text-violet-400",
  },
  {
    icon: MessageSquare,
    number: "03",
    title: "Customers ask on WhatsApp",
    description:
      "Students, patients, customers send questions on WhatsApp. The AI replies instantly — day or night, no staff needed.",
    color: "from-emerald-500 to-green-500",
    glow: "shadow-emerald-500/30",
    examples: ["Instant replies", "24/7 available", "Human handoff option"],
    iconBg: "bg-emerald-500/15 border-emerald-500/25",
    iconColor: "text-emerald-400",
  },
];

export default function Solution() {
  return (
    <section className="relative section-padding overflow-hidden" id="solution">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-semibold mb-5 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            The Solution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Turn your documents into a{" "}
            <span className="gradient-text">WhatsApp AI assistant.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Three simple steps. No app downloads. No technical skills needed. Your customers
            get instant, accurate answers from your own documents.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[calc(33%-20px)] right-[calc(33%-20px)] h-px bg-gradient-to-r from-indigo-500/50 via-violet-500/50 to-emerald-500/50" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                whileHover={{ y: -4 }}
                className="group relative glass rounded-3xl p-7 border border-white/5 hover:border-white/10 transition-all duration-300"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
              >
                {/* Step number */}
                <div
                  className={`absolute -top-4 left-6 px-3 py-1 rounded-full text-xs font-extrabold text-white bg-gradient-to-r ${step.color} shadow-lg`}
                >
                  STEP {step.number}
                </div>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl ${step.iconBg} border flex items-center justify-center mb-5 mt-2 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 ${step.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{step.description}</p>

                {/* Mini tags */}
                <div className="flex flex-wrap gap-2">
                  {step.examples.map((ex) => (
                    <span
                      key={ex}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-slate-400"
                    >
                      {ex}
                    </span>
                  ))}
                </div>

                {/* Arrow to next (only first two) */}
                {i < 2 && (
                  <div className="hidden md:flex absolute -right-3.5 top-16 z-10 w-7 h-7 rounded-full bg-[#141D38] border border-white/10 items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Result highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 max-w-2xl mx-auto glass rounded-2xl p-5 border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
            <span className="text-xl">✅</span>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-0.5">
              Result: Staff get their time back.
            </p>
            <p className="text-sm text-slate-400">
              Your WhatsApp bot handles repetitive queries 24/7. Staff only step in for complex
              issues or conversions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
