"use client";

import { motion } from "framer-motion";

const links = {
  "Use Cases": [
    { label: "Coaching Institutes", href: "#coaching" },
    { label: "Clinics", href: "#use-cases" },
    { label: "Gyms", href: "#use-cases" },
    { label: "Salons", href: "#use-cases" },
    { label: "Restaurants", href: "#use-cases" },
  ],
  Product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Access Control", href: "#access-control" },
    { label: "Free AI Tools", href: "#free-tools" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "Book Demo", href: "#demo" },
    { label: "Send a Document", href: "#demo" },
    { label: "Contact Us", href: "mailto:hello@localsparkai.com" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#060910] border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-indigo-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-4 group"
            >
              <svg
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9"
              >
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="60%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#F59E0B" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="26" height="20" rx="5" fill="url(#footerLogoGrad)" opacity="0.95" />
                <path d="M10 22 L6 29 L16 22Z" fill="url(#footerLogoGrad)" opacity="0.95" />
                <path
                  d="M15 8 L16.2 11.4 L19.8 11.4 L17 13.5 L18.1 17 L15 15 L11.9 17 L13 13.5 L10.2 11.4 L13.8 11.4Z"
                  fill="white"
                  opacity="0.95"
                />
                <circle cx="29" cy="8" r="5.5" fill="#F59E0B" />
                <circle cx="29" cy="8" r="1.5" fill="white" />
              </svg>
              <div>
                <span className="text-white font-bold text-lg tracking-tight">
                  LocalSpark<span className="text-indigo-400"> AI</span>
                </span>
              </div>
            </motion.a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-5">
              WhatsApp AI chatbots and free AI tools for local businesses — coaching institutes,
              clinics, gyms, salons, restaurants, and shops.
            </p>

            <p className="text-xs text-slate-500 italic mb-5">
              &ldquo;Upload your schedule. Let WhatsApp answer the questions.&rdquo;
            </p>

            {/* Social / WhatsApp CTA */}
            <a
              href="https://wa.me/919999999999?text=Hi! I want to know more about LocalSpark AI."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366]/15 border border-[#25D366]/25 text-[#25D366] text-sm font-semibold hover:bg-[#25D366]/25 transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.533 5.85L0 24l6.335-1.502A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.98 0-3.82-.535-5.398-1.465l-.387-.23-3.962.94.976-3.848-.253-.398A9.783 9.783 0 012.182 12C2.182 6.589 6.589 2.182 12 2.182S21.818 6.589 21.818 12 17.411 21.818 12 21.818z" />
              </svg>
              Chat with us on WhatsApp
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} LocalSpark AI. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
              Terms of Service
            </a>
            <a
              href="mailto:hello@localsparkai.com"
              className="text-xs text-slate-600 hover:text-slate-400 transition-colors"
            >
              hello@localsparkai.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
