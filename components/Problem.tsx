"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Clock } from "lucide-react";

const questions = [
  { text: "What is today's class schedule?", delay: 0 },
  { text: "Is the class cancelled?", delay: 0.1 },
  { text: "Send today's notes please 📚", delay: 0.2 },
  { text: "What are your timings?", delay: 0.3 },
  { text: "What is the fee?", delay: 0.05 },
  { text: "Where is the location?", delay: 0.15 },
  { text: "Can I book an appointment?", delay: 0.25 },
  { text: "What are this week's updates?", delay: 0.35 },
  { text: "Which faculty is teaching today?", delay: 0.08 },
  { text: "Has the test been rescheduled?", delay: 0.18 },
  { text: "When does the new batch start?", delay: 0.28 },
  { text: "Are there any holidays this week?", delay: 0.38 },
];

function QuestionBubble({ text, delay, index }: { text: string; delay: number; index: number }) {
  const colors = [
    "border-indigo-500/30 bg-indigo-500/8 text-indigo-200",
    "border-violet-500/30 bg-violet-500/8 text-violet-200",
    "border-blue-500/30 bg-blue-500/8 text-blue-200",
    "border-pink-500/30 bg-pink-500/8 text-pink-200",
    "border-amber-500/30 bg-amber-500/8 text-amber-200",
    "border-cyan-500/30 bg-cyan-500/8 text-cyan-200",
  ];
  const color = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03, y: -2 }}
      className={`inline-flex items-center gap-2 px-3.5 py-2.5 rounded-2xl border ${color} text-sm font-medium cursor-default select-none shadow-sm`}
    >
      <MessageCircle className="w-3.5 h-3.5 flex-shrink-0 opacity-70" />
      {text}
    </motion.div>
  );
}

export default function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative section-padding overflow-hidden" id="problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/25 bg-red-500/8 text-red-300 text-xs font-semibold mb-5 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Your team should not answer the{" "}
            <span className="gradient-text">same questions 100 times a day.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Every day, your staff repeats the same answers on WhatsApp — schedule queries,
            fee questions, cancellation updates. It wastes hours and distracts from real work.
          </p>
        </motion.div>

        {/* Question bubbles grid */}
        <div className="flex flex-wrap gap-3 justify-center mb-16 max-w-4xl mx-auto">
          {questions.map((q, i) => (
            <QuestionBubble key={q.text} text={q.text} delay={q.delay} index={i} />
          ))}
        </div>

        {/* Pain stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            {
              icon: "⏰",
              stat: "4+ hours",
              label: "lost daily on repetitive WhatsApp replies",
              color: "border-red-500/20 bg-red-500/5",
            },
            {
              icon: "😓",
              stat: "100+ msgs",
              label: "asking the same questions every week",
              color: "border-amber-500/20 bg-amber-500/5",
            },
            {
              icon: "📵",
              stat: "0 system",
              label: "to handle queries when staff is unavailable",
              color: "border-slate-500/20 bg-slate-500/5",
            },
          ].map((item) => (
            <div
              key={item.stat}
              className={`glass rounded-2xl p-5 border ${item.color} text-center`}
            >
              <span className="text-3xl block mb-2">{item.icon}</span>
              <p className="text-2xl font-extrabold text-white mb-1">{item.stat}</p>
              <p className="text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Bridge arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-3 text-slate-500 text-sm font-medium">
            <Clock className="w-4 h-4" />
            There&rsquo;s a smarter way — keep reading
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
