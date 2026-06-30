"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Upload, CheckCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase
      .from("leads")
      .insert({ name, phone, business });

    setLoading(false);

    if (error) {
      setError("Something went wrong. Please try again.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <section className="relative section-padding overflow-hidden" id="demo">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.05, 1, 1.05], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute left-1/3 top-1/3 w-[500px] h-[400px] bg-violet-600/15 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-6 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Get a Free Demo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Want to see your business on{" "}
            <span className="gradient-text">WhatsApp AI?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Send us your weekly schedule, menu, brochure, or FAQ. We&apos;ll show you exactly how
            your own WhatsApp chatbot can answer customer questions automatically — at no cost.
          </p>
        </motion.div>

        {/* CTA Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Demo form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl border border-indigo-500/20 p-7 shadow-glow"
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-indigo-400" />
              </div>
              <h3 className="text-base font-bold text-white">Book a WhatsApp Demo</h3>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <p className="text-white font-semibold text-lg mb-1">We got your request! 🎉</p>
                <p className="text-slate-400 text-sm">
                  Our team will reach you on WhatsApp within 24 hours with a personalised demo.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide block mb-1.5">
                    Your name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Rajesh Kumar"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide block mb-1.5">
                    WhatsApp number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide block mb-1.5">
                    Business type
                  </label>
                  <select
                    required
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/8 transition-all appearance-none"
                  >
                    <option value="" className="bg-[#0F1629]">Select your business type</option>
                    <option value="coaching" className="bg-[#0F1629]">Coaching Institute</option>
                    <option value="clinic" className="bg-[#0F1629]">Clinic / Healthcare</option>
                    <option value="gym" className="bg-[#0F1629]">Gym / Fitness</option>
                    <option value="salon" className="bg-[#0F1629]">Salon / Spa</option>
                    <option value="restaurant" className="bg-[#0F1629]">Restaurant / Food</option>
                    <option value="realestate" className="bg-[#0F1629]">Real Estate</option>
                    <option value="other" className="bg-[#0F1629]">Other local business</option>
                  </select>
                </div>
                {error && (
                  <p className="text-sm text-red-400 text-center">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.85L0 24l6.335-1.502A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.98 0-3.82-.535-5.398-1.465l-.387-.23-3.962.94.976-3.848-.253-.398A9.783 9.783 0 012.182 12C2.182 6.589 6.589 2.182 12 2.182S21.818 6.589 21.818 12 17.411 21.818 12 21.818z" />
                    </svg>
                  )}
                  {loading ? "Submitting..." : "Book WhatsApp Demo"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Upload sample doc */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            {/* Upload card */}
            <div className="glass rounded-3xl border border-violet-500/20 p-7">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-violet-500/20 flex items-center justify-center">
                  <Upload className="w-4 h-4 text-violet-400" />
                </div>
                <h3 className="text-base font-bold text-white">Send a sample document</h3>
              </div>
              <p className="text-sm text-slate-400 mb-5">
                Share your weekly schedule, menu, or FAQ document. We&apos;ll show you a live demo
                of what your WhatsApp bot would look like.
              </p>
              <div className="border-2 border-dashed border-white/10 rounded-xl p-6 text-center hover:border-violet-500/30 transition-colors cursor-pointer group">
                <Upload className="w-8 h-8 text-slate-500 group-hover:text-violet-400 mx-auto mb-2 transition-colors" />
                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                  Drop PDF, image, or Excel here
                </p>
                <p className="text-xs text-slate-600 mt-1">or</p>
                <a
                  href="https://wa.me/919999999999?text=Hi! I want to see a demo of LocalSpark AI for my business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-violet-400 hover:text-violet-300 underline mt-1 inline-block transition-colors"
                >
                  Send via WhatsApp instead →
                </a>
              </div>
            </div>

            {/* Trust signals */}
            <div className="glass rounded-2xl border border-white/6 p-5 space-y-3">
              {[
                { icon: "🔒", text: "Your documents are private and never shared" },
                { icon: "⚡", text: "Demo ready within 24 hours" },
                { icon: "💬", text: "No commitments — try before you pay" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <p className="text-sm text-slate-300">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
