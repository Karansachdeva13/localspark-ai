"use client";

import { motion } from "framer-motion";
import { Lock, Phone, Users, Calendar, Key, UserX, ArrowRight, ShieldCheck } from "lucide-react";

const accessOptions = [
  {
    icon: Phone,
    label: "Phone number whitelist",
    desc: "Only registered numbers can interact",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/25",
  },
  {
    icon: Users,
    label: "Batch-wise permissions",
    desc: "UPSC, SSC, NEET — each sees only their content",
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/25",
  },
  {
    icon: Calendar,
    label: "Expiry date for access",
    desc: "Access auto-revokes when subscription ends",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/25",
  },
  {
    icon: Key,
    label: "OTP verification",
    desc: "One-time password to confirm identity",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/25",
  },
  {
    icon: ShieldCheck,
    label: "Invite code for batch onboarding",
    desc: "Share a code to grant batch-level access",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/25",
  },
  {
    icon: UserX,
    label: "Unknown users blocked",
    desc: "Unregistered users sent to admin automatically",
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/25",
  },
];

const flowSteps = [
  { text: "Student messages on WhatsApp", icon: "💬", active: true },
  { text: "Bot checks phone number", icon: "🔍", active: true },
  { text: "Finds batch → UPSC Morning", icon: "🎯", active: true },
  { text: "Answers from allowed documents only", icon: "✅", active: true },
];

export default function AccessControl() {
  return (
    <section className="relative section-padding overflow-hidden" id="access-control">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/3 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[120px]" />
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-semibold mb-5 tracking-wide">
            <Lock className="w-3 h-3" />
            Access Control
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Only registered students see{" "}
            <span className="gradient-text">the right information.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            The bot verifies every student before answering. Wrong batch, expired access, or
            unknown number — they&rsquo;re blocked or redirected to admin.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Access options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {accessOptions.map((opt, i) => {
              const Icon = opt.icon;
              return (
                <motion.div
                  key={opt.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className={`p-4 rounded-2xl border ${opt.bg} transition-all duration-200`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${opt.bg}`}>
                    <Icon className={`w-4 h-4 ${opt.color}`} />
                  </div>
                  <p className={`text-sm font-semibold mb-1 ${opt.color}`}>{opt.label}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{opt.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Access flow visual */}
          <div className="flex flex-col gap-5">
            <div className="glass rounded-2xl border border-white/8 p-6 shadow-card">
              <div className="flex items-center gap-2 mb-5">
                <Lock className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-semibold text-white">How access works</span>
              </div>

              <div className="space-y-3">
                {flowSteps.map((step, i) => (
                  <motion.div
                    key={step.text}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.12 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-sm flex-shrink-0">
                      {step.icon}
                    </div>
                    {i < flowSteps.length - 1 && (
                      <div className="absolute left-[calc(theme(spacing.6)+theme(spacing.4)+4px)] w-px h-6 bg-emerald-500/20 translate-y-7" />
                    )}
                    <span className="text-sm text-slate-300 font-medium">{step.text}</span>
                    {i < flowSteps.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-600 ml-auto flex-shrink-0" />
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 p-3.5 rounded-xl bg-emerald-500/8 border border-emerald-500/20">
                <p className="text-xs text-emerald-300 font-medium">
                  ✅ Student sees their schedule, notes, and test dates — nothing from other batches.
                </p>
              </div>
            </div>

            {/* Unknown user blocked visual */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass rounded-2xl border border-rose-500/15 p-5 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/20 flex items-center justify-center flex-shrink-0">
                <UserX className="w-5 h-5 text-rose-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-rose-300 mb-0.5">Unknown user blocked</p>
                <p className="text-xs text-slate-400">
                  Unregistered numbers are blocked and admin is notified — keeping your content
                  private and secure.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
