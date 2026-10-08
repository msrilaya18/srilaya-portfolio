"use client";

import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-32 md:px-8">

      {/* Background accent */}
      <div className="pointer-events-none absolute right-[-10%] top-[15%] h-125 w-125 rounded-full bg-[#7c4d8f]/10 blur-[140px]" />

      <div className="mx-auto w-full max-w-7xl">

        {/* Small introduction */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#a98bc4]" />

          <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/45">
            Computer Science · AI · Full Stack
          </span>
        </div>

        {/* Main heading */}
        <motion.h1
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="max-w-6xl text-[clamp(4rem,10vw,9.5rem)] font-medium leading-[0.86] tracking-[-0.075em]"
        >
          I build things
          <br />
          <span className="font-instrument italic text-[#a98bc4]">
            with curiosity.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mt-12"
        >
          <p className="max-w-2xl text-base leading-7 text-white/55 md:text-lg">
            I'm Srilaya — a Computer Science student at VIT Vellore
            focused on software engineering, full-stack development,
            and AI. I build intelligent systems that connect practical
            software with research and real-world problems.
          </p>
        </motion.div>

        {/* Bottom information */}
        <div className="mt-24 flex items-center justify-between border-t border-white/10 pt-5">

          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
            Currently building & researching
          </span>

          <ArrowDownRight
            size={17}
            className="text-white/30"
          />

        </div>

      </div>
    </section>
  );
}