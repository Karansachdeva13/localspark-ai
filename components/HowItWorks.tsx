"use client";

import { motion } from "framer-motion";
import { MessageSquare, Upload, Settings, Wifi, Zap } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MessageSquare,
    title: "Share your business details",
    desc: "Tell us about your business, your customers, and what questions you get every day.",
    duration: "Day 1",
    color: "text-indigo-400",
    iconBg: "bg-indigo-500/15 border-indigo-500/25",
    lineBg: "bg-indigo-500/30",
  },
  {
    number: "2",
    icon: Upload,
    title: "Upload your documents",
    desc: "Share PDFs, images, schedules, menus, brochures — anything you want the bot to know.",
    duration: "Day 1–2",
    color: "text-violet-400",
    iconBg: "bg-violet-500/15 border-violet-500/25",
    lineBg: "bg-violet-500/30",
  },
  {
    number: "3",
    icon: Settings,
    title: "We configure your AI",
    desc: "LocalSpark AI builds your knowledge base, sets up access rules, and tunes the chatbot.",
    duration: "Day 2–3",
    color: "text-blue-400",
    iconBg: "bg-blue-500/15 border-blue-500/25",
    lineBg: "bg-blue-500/30",
  },
  {
    number: "4",
    icon: Wifi,
    title: "Connect WhatsApp",
    desc: "We connect the chatbot to your WhatsApp Business number. No new app. No tech needed.",
    duration: "Day 3",
    color: "text-emerald-400",
    iconBg: "bg-emerald-500/15 border-emerald-500/25",
    lineBg: "bg-emerald-500/30",
  },
  {
    number: "5",
    icon: Zap,
    title: "Start answering automatically",
    desc: "Your chatbot goes live. Students and customers get instant answers, 24/7.",
    duration: "Day 3–5",
    color: "text-amber-400",
    iconBg: "bg-amber-500/15 border-amber-500/25",
    lineBg: "bg-amber-500/30",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative section-padding overflow-hidden" id="how-it-works">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[600px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-5 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Launch your chatbot in{" "}
            <span className="gradient-text">days, not months.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            No complicated setup. No IT team needed. We handle everything — you just share
            your documents and we do the rest.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-10 top-10 bottom-10 w-px bg-gradient-to-b from-indigo-500/40 via-violet-500/40 via-blue-500/40 via-emerald-500/40 to-amber-500/40 hidden md:block" />

          <div className="space-y-5">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex gap-6 items-start"
                >
                  {/* Step icon (timeline dot on desktop) */}
                  <div className={`relative z-10 flex-shrink-0 w-20 h-20 rounded-2xl ${step.iconBg} border flex flex-col items-center justify-center gap-1`}>
                    <Icon className={`w-6 h-6 ${step.color}`} />
                    <span className={`text-[10px] font-bold ${step.color}`}>{step.duration}</span>
                  </div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex-1 glass rounded-2xl border border-white/6 p-5 shadow-card"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-extrabold px-2.5 py-1 rounded-full bg-white/5 ${step.color}`}>
                        STEP {step.number}
                      </span>
                      <h3 className="text-base font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Final result */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 p-6 rounded-3xl bg-gradient-to-br from-indigo-600/20 to-violet-600/10 border border-indigo-500/25 text-center"
        >
          <div className="text-4xl mb-3">🚀</div>
          <h3 className="text-xl font-bold text-white mb-2">
            Your WhatsApp AI bot is live.
          </h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            From the day you share your documents to a live, answering chatbot — typically 3 to 5
            business days.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
