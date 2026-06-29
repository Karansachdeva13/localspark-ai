"use client";

import { motion } from "framer-motion";
import { Check, Zap, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "/month",
    tagline: "For small businesses getting started",
    popular: false,
    color: "border-white/8 hover:border-indigo-500/30",
    buttonClass: "bg-white/8 hover:bg-white/12 text-white border border-white/10 hover:border-white/20",
    badge: null,
    features: [
      "WhatsApp FAQ bot",
      "Basic document upload (5 docs)",
      "1 business location",
      "Monthly document updates",
      "Basic analytics dashboard",
      "Email support",
    ],
    icon: "⚡",
    gradient: "from-slate-800/50 to-slate-900/50",
  },
  {
    name: "Institute",
    price: "₹9,999",
    period: "/month",
    tagline: "For coaching institutes with multiple batches",
    popular: true,
    color: "border-indigo-500/50 hover:border-indigo-400/70",
    buttonClass: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40",
    badge: "Most Popular",
    features: [
      "Batch-wise student access control",
      "Unlimited document uploads",
      "Phone number verification",
      "Student FAQ bot (24/7)",
      "Admin dashboard & analytics",
      "Escalation to human agent",
      "Batch-wise permission settings",
      "Priority email + WhatsApp support",
    ],
    icon: "🎓",
    gradient: "from-indigo-900/40 to-violet-900/20",
  },
  {
    name: "Pro",
    price: "₹19,999",
    period: "/month",
    tagline: "For growing businesses with multiple locations",
    popular: false,
    color: "border-white/8 hover:border-violet-500/30",
    buttonClass: "bg-white/8 hover:bg-white/12 text-white border border-white/10 hover:border-white/20",
    badge: null,
    features: [
      "Multi-branch / multi-location support",
      "Advanced analytics & reports",
      "Multiple knowledge bases",
      "Priority 24/7 support",
      "Custom integrations",
      "Automation workflows",
      "Dedicated account manager",
      "Custom onboarding",
    ],
    icon: "🚀",
    gradient: "from-violet-900/20 to-slate-900/50",
  },
];

export default function Pricing() {
  return (
    <section className="relative section-padding overflow-hidden" id="pricing">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[700px] h-[400px] bg-indigo-600/8 rounded-full blur-[120px]" />
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
            <Star className="w-3 h-3" />
            Simple Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Transparent pricing.{" "}
            <span className="gradient-text">No hidden costs.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Choose a plan that fits your business. Cancel or upgrade anytime.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`relative rounded-3xl border ${plan.color} bg-gradient-to-br ${plan.gradient} p-7 transition-all duration-300 ${plan.popular ? "shadow-2xl shadow-indigo-500/20 scale-[1.02] md:scale-105" : "hover:scale-[1.01]"}`}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-bold shadow-lg shadow-indigo-600/40">
                    <Zap className="w-3 h-3" />
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <div className="text-3xl mb-3">{plan.icon}</div>
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-slate-400 mb-4">{plan.tagline}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  <span className="text-slate-400 text-sm mb-1">{plan.period}</span>
                </div>
              </div>

              {/* CTA button */}
              <a
                href="#demo"
                className={`w-full block text-center py-3 px-5 rounded-xl font-semibold text-sm transition-all duration-200 mb-7 ${plan.buttonClass}`}
              >
                Get Started
              </a>

              {/* Feature list */}
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? "text-indigo-400" : "text-slate-400"}`}
                    />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Custom setup note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 max-w-2xl mx-auto text-center glass rounded-2xl px-6 py-4 border border-white/6"
        >
          <p className="text-sm text-slate-400">
            <span className="text-white font-medium">Note:</span> A one-time custom setup fee may
            apply depending on WhatsApp Business API configuration, data migration complexity, and
            integration requirements.{" "}
            <a
              href="#demo"
              className="text-indigo-400 hover:text-indigo-300 font-medium underline decoration-indigo-400/30"
            >
              Talk to us for a custom quote.
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
