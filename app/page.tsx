"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import CoachingUseCase from "@/components/CoachingUseCase";
import AccessControl from "@/components/AccessControl";
import BusinessUseCases from "@/components/BusinessUseCases";
import FreeTools from "@/components/FreeTools";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0E1A] overflow-x-hidden">
      {/* Ambient background glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-indigo-500/6 rounded-full blur-[100px]" />
      </div>

      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <CoachingUseCase />
      <AccessControl />
      <BusinessUseCases />
      <FreeTools />
      <HowItWorks />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
