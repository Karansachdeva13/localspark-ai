"use client";

import { motion } from "framer-motion";

const useCases = [
  {
    emoji: "🎓",
    title: "Coaching Institutes",
    desc: "Schedules, notes, tests, batch updates, fee FAQs, holiday notices",
    tags: ["Schedules", "Notes", "Tests", "Batch Access"],
    gradient: "from-indigo-600/20 to-indigo-600/5",
    border: "border-indigo-500/20",
    glow: "hover:shadow-indigo-500/15",
    badge: "text-indigo-300 bg-indigo-500/15 border-indigo-500/25",
  },
  {
    emoji: "🏥",
    title: "Clinics & Healthcare",
    desc: "Doctor timings, appointments, reports FAQ, health tips, emergency contacts",
    tags: ["Doctor Timings", "Appointments", "Reports FAQ"],
    gradient: "from-emerald-600/20 to-emerald-600/5",
    border: "border-emerald-500/20",
    glow: "hover:shadow-emerald-500/15",
    badge: "text-emerald-300 bg-emerald-500/15 border-emerald-500/25",
  },
  {
    emoji: "🏋️",
    title: "Gyms & Fitness",
    desc: "Membership plans, trainer timings, class schedules, offers, nutrition tips",
    tags: ["Memberships", "Trainer Timings", "Class Schedules"],
    gradient: "from-orange-600/20 to-orange-600/5",
    border: "border-orange-500/20",
    glow: "hover:shadow-orange-500/15",
    badge: "text-orange-300 bg-orange-500/15 border-orange-500/25",
  },
  {
    emoji: "💇",
    title: "Salons & Spas",
    desc: "Services, prices, bookings, offers, stylist availability, walk-in slots",
    tags: ["Services & Prices", "Bookings", "Offers"],
    gradient: "from-pink-600/20 to-pink-600/5",
    border: "border-pink-500/20",
    glow: "hover:shadow-pink-500/15",
    badge: "text-pink-300 bg-pink-500/15 border-pink-500/25",
  },
  {
    emoji: "🍽️",
    title: "Restaurants",
    desc: "Menu, location, party bookings, delivery timings, daily specials, dietary info",
    tags: ["Menu", "Bookings", "Location", "Specials"],
    gradient: "from-amber-600/20 to-amber-600/5",
    border: "border-amber-500/20",
    glow: "hover:shadow-amber-500/15",
    badge: "text-amber-300 bg-amber-500/15 border-amber-500/25",
  },
  {
    emoji: "🏠",
    title: "Real Estate",
    desc: "Listings, rent details, visit scheduling, property FAQs, floor plans",
    tags: ["Listings", "Rent Details", "Site Visits"],
    gradient: "from-cyan-600/20 to-cyan-600/5",
    border: "border-cyan-500/20",
    glow: "hover:shadow-cyan-500/15",
    badge: "text-cyan-300 bg-cyan-500/15 border-cyan-500/25",
  },
];

export default function BusinessUseCases() {
  return (
    <section className="relative section-padding overflow-hidden" id="use-cases">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent" />
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold mb-5 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Who It&apos;s For
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            One AI system.{" "}
            <span className="gradient-text">Many local business use cases.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Whether you run a coaching centre, clinic, restaurant, or salon — LocalSpark AI
            builds a WhatsApp chatbot from your own documents.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -5, scale: 1.01 }}
              className={`group glass rounded-3xl border ${uc.border} p-6 bg-gradient-to-br ${uc.gradient} transition-all duration-300 hover:shadow-xl ${uc.glow} cursor-default`}
            >
              {/* Emoji icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {uc.emoji}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{uc.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">{uc.desc}</p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2">
                {uc.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${uc.badge}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-slate-500 text-sm mt-10"
        >
          Any local business with documents, FAQs, or schedules can get a WhatsApp AI chatbot.{" "}
          <a href="#demo" className="text-indigo-400 hover:text-indigo-300 font-medium underline decoration-indigo-400/30 hover:decoration-indigo-300/50 transition-colors">
            Ask us about your use case →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
