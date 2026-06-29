"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight, Upload, CheckCircle, MessageSquare } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const floatVariant = {
  initial: { y: 0 },
  animate: {
    y: [-8, 8, -8],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
  },
};

const floatVariantSlow = {
  initial: { y: 0 },
  animate: {
    y: [6, -6, 6],
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-6 tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              WhatsApp AI Automation for Local Businesses
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
            >
              Upload your schedule.{" "}
              <span className="gradient-text">
                Let WhatsApp answer the questions.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl"
            >
              LocalSpark AI builds WhatsApp chatbots and AI tools for coaching
              institutes, shops, clinics, gyms, restaurants, and local
              businesses — powered by your own PDFs, images, schedules, menus,
              and documents.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={3}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#demo"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] group"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.85L0 24l6.335-1.502A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.98 0-3.82-.535-5.398-1.465l-.387-.23-3.962.94.976-3.848-.253-.398A9.783 9.783 0 012.182 12C2.182 6.589 6.589 2.182 12 2.182S21.818 6.589 21.818 12 17.411 21.818 12 21.818z" />
                </svg>
                Get a WhatsApp Demo
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 hover:border-white/20 text-slate-300 hover:text-white font-semibold text-base transition-all duration-200 hover:bg-white/5 group"
              >
                See How It Works
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={4}
              className="flex flex-wrap items-center gap-5 mt-10"
            >
              {[
                "Saves 4+ hours/day",
                "No app needed",
                "Set up in days",
                "₹4,999/mo to start",
              ].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-1.5 text-xs text-slate-400 font-medium"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Hero Mockup */}
          <div className="relative flex items-center justify-center min-h-[520px]">
            {/* Admin dashboard background card */}
            <motion.div
              variants={floatVariantSlow}
              initial="initial"
              animate="animate"
              className="absolute top-4 right-0 w-64 glass rounded-2xl p-4 shadow-glass z-10"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-semibold text-slate-300">Admin Dashboard</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Questions answered today</span>
                  <span className="text-indigo-400 font-bold">247</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "78%" }}
                    transition={{ delay: 1.5, duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
                  />
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Staff time saved</span>
                  <span className="text-emerald-400 font-bold">4.2 hrs</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Active batches</span>
                  <span className="text-violet-400 font-bold">3</span>
                </div>
              </div>
            </motion.div>

            {/* Upload card */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute top-16 left-0 glass rounded-2xl px-4 py-3 shadow-glass z-20 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/20 flex-shrink-0">
                <Upload className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Schedule_Week1.pdf</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-indigo-500 rounded-full"
                    />
                  </div>
                  <span className="text-[10px] text-indigo-400">AI processing...</span>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp chat mockup — main card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              className="relative w-72 bg-[#0B1A16] rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-30"
              style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)" }}
            >
              {/* WhatsApp header */}
              <div className="bg-[#128C7E] px-4 py-3 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">LA</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-none">LocalSpark AI Bot</p>
                  <p className="text-green-200 text-[10px] mt-0.5">online</p>
                </div>
                <div className="ml-auto flex gap-2">
                  <div className="w-1 h-1 rounded-full bg-white/50" />
                  <div className="w-1 h-1 rounded-full bg-white/50" />
                  <div className="w-1 h-1 rounded-full bg-white/50" />
                </div>
              </div>

              {/* Chat background */}
              <div className="bg-[#0D1B13] px-3 py-4 space-y-3 min-h-[260px]">
                {/* Student message */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.4 }}
                  className="flex justify-end"
                >
                  <div className="bg-[#025C4C] text-white text-sm px-3 py-2 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                    Kal polity ki class hai? 🤔
                    <p className="text-[10px] text-green-300/60 text-right mt-1">9:41 AM ✓✓</p>
                  </div>
                </motion.div>

                {/* AI typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ delay: 1.5, duration: 1.2, times: [0, 0.3, 1] }}
                  className="flex items-center gap-2"
                >
                  <div className="bg-[#1E2D24] rounded-2xl rounded-tl-sm px-3 py-2 flex gap-1 items-center">
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 0.6, repeat: 2, delay: 1.5 }}
                      className="w-1.5 h-1.5 rounded-full bg-white/40"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 0.6, repeat: 2, delay: 1.7 }}
                      className="w-1.5 h-1.5 rounded-full bg-white/40"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 0.6, repeat: 2, delay: 1.9 }}
                      className="w-1.5 h-1.5 rounded-full bg-white/40"
                    />
                  </div>
                </motion.div>

                {/* AI response */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.6, duration: 0.5 }}
                >
                  <div className="bg-[#1E2D24] text-white text-sm px-3 py-2.5 rounded-2xl rounded-tl-sm max-w-[92%] shadow-sm">
                    <p className="font-medium text-green-300 text-xs mb-1">🤖 LocalSpark AI</p>
                    Yes! Polity class is{" "}
                    <span className="font-semibold text-green-300">tomorrow at 10:00 AM</span> in
                    Room 203 for the{" "}
                    <span className="font-semibold text-yellow-300">UPSC Morning Batch</span>. 📚
                    <p className="text-[10px] text-white/40 text-right mt-1">9:41 AM</p>
                  </div>
                </motion.div>

                {/* Another student msg */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3.2, duration: 0.4 }}
                  className="flex justify-end"
                >
                  <div className="bg-[#025C4C] text-white text-xs px-3 py-2 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm">
                    Thanks! 🙏
                    <p className="text-[9px] text-green-300/60 text-right mt-1">9:42 AM ✓✓</p>
                  </div>
                </motion.div>
              </div>

              {/* WhatsApp input bar */}
              <div className="bg-[#1A2A20] px-3 py-2.5 flex items-center gap-2">
                <div className="flex-1 bg-[#2A3D2E] rounded-full px-4 py-2 text-[11px] text-white/30">
                  Type a message
                </div>
                <div className="w-8 h-8 rounded-full bg-[#128C7E] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Documents uploaded chip */}
            <motion.div
              variants={floatVariant}
              initial="initial"
              animate="animate"
              className="absolute bottom-8 right-2 glass rounded-2xl px-4 py-3 shadow-glass z-20"
            >
              <p className="text-[10px] text-slate-400 font-medium mb-2">Documents uploaded</p>
              <div className="flex flex-col gap-1">
                {["Week 1 Timetable.pdf", "Holiday Notice.jpg", "Test Schedule.xlsx"].map(
                  (doc, i) => (
                    <div key={doc} className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-indigo-400" : i === 1 ? "bg-violet-400" : "bg-amber-400"}`} />
                      <span className="text-xs text-slate-300">{doc}</span>
                    </div>
                  )
                )}
              </div>
            </motion.div>

            {/* Floating badge: AI Powered */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="absolute bottom-14 left-0 flex items-center gap-2 glass rounded-full px-3 py-1.5 z-20"
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                <Zap className="w-2.5 h-2.5 text-white" />
              </div>
              <span className="text-xs font-semibold text-white">AI-Powered</span>
              <span className="text-[10px] text-slate-400">by LocalSpark</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0E1A] to-transparent pointer-events-none" />
    </section>
  );
}
