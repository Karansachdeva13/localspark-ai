"use client";

import { motion } from "framer-motion";
import { Calendar, BookOpen, Bell, FileText, Clock, Users, IndianRupee, ShieldCheck } from "lucide-react";

const features = [
  { icon: Calendar, label: "Weekly timetable upload", color: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20" },
  { icon: Users, label: "Batch-wise class schedules", color: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
  { icon: Clock, label: "Faculty and room updates", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
  { icon: BookOpen, label: "Study material sharing", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
  { icon: FileText, label: "Test schedule FAQs", color: "text-amber-400", bg: "bg-amber-500/10 border-amber-500/20" },
  { icon: Bell, label: "Holiday & cancellation notices", color: "text-rose-400", bg: "bg-rose-500/10 border-rose-500/20" },
  { icon: IndianRupee, label: "Fee & admission FAQs", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/20" },
  { icon: ShieldCheck, label: "Student-only access control", color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
];

const batches = [
  {
    name: "UPSC Morning Batch",
    time: "6:00 AM – 9:00 AM",
    features: ["Schedule", "Notes", "Test Dates"],
    color: "from-indigo-600 to-indigo-800",
    badge: "bg-indigo-500",
    count: "84 students",
  },
  {
    name: "SSC Evening Batch",
    time: "5:00 PM – 8:00 PM",
    features: ["Schedule", "Tests", "Notices"],
    color: "from-violet-600 to-violet-800",
    badge: "bg-violet-500",
    count: "62 students",
  },
  {
    name: "NEET Batch 3",
    time: "10:00 AM – 1:00 PM",
    features: ["Resources", "Announcements", "Doubts"],
    color: "from-blue-600 to-blue-800",
    badge: "bg-blue-500",
    count: "51 students",
  },
];

export default function CoachingUseCase() {
  return (
    <section className="relative section-padding overflow-hidden" id="coaching" >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[120px]" />
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-5 tracking-wide">
            <span className="text-base">🎓</span>
            Primary Use Case
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Built for{" "}
            <span className="gradient-text">coaching institutes.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            GTB Nagar. Mukherjee Nagar. Rajinder Nagar. Any institute with multiple batches,
            teachers, and daily student queries — this is built for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Features grid */}
          <div>
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-5">
              What the chatbot handles
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    whileHover={{ x: 3 }}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border ${feature.bg} transition-all duration-200`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${feature.bg}`}>
                      <Icon className={`w-4 h-4 ${feature.color}`} />
                    </div>
                    <span className="text-sm text-slate-300 font-medium">{feature.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Batch access visual */}
          <div>
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-5">
              Batch-wise access — each batch sees only their content
            </p>
            <div className="space-y-4">
              {batches.map((batch, i) => (
                <motion.div
                  key={batch.name}
                  initial={{ opacity: 0, y: 20, x: 20 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ scale: 1.01 }}
                  className="glass rounded-2xl border border-white/6 overflow-hidden shadow-card"
                >
                  {/* Batch header */}
                  <div className={`bg-gradient-to-r ${batch.color} px-5 py-3 flex items-center justify-between`}>
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/70 animate-pulse" />
                      <span className="text-white font-semibold text-sm">{batch.name}</span>
                    </div>
                    <span className="text-white/70 text-xs">{batch.count}</span>
                  </div>

                  {/* Batch body */}
                  <div className="px-5 py-3.5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-slate-500 mb-1.5">Timing: {batch.time}</p>
                      <div className="flex gap-2 flex-wrap">
                        {batch.features.map((f) => (
                          <span
                            key={f}
                            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${batch.badge} bg-opacity-20 text-white`}
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-emerald-500/15 border border-emerald-500/25 px-3 py-1.5 rounded-full">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-semibold text-emerald-300">Active</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Arrow connector */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-5 p-4 rounded-2xl bg-white/3 border border-white/6 flex items-center gap-3"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
              </div>
              <p className="text-sm text-slate-300">
                Each student messages on WhatsApp → Bot checks batch → Shares{" "}
                <span className="text-white font-medium">only their batch content</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
