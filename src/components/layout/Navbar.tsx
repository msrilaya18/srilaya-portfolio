"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-5 py-5 md:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#100d12]/75 px-5 py-3 backdrop-blur-xl">

        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-sm tracking-[-0.03em] text-white"
        >
          SM<span className="text-[#a98bc4]">.</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition-colors duration-300 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Resume */}
        <motion.a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 rounded-full bg-[#f1e9dc] px-5 py-2.5 text-xs font-medium text-[#100d12]!"
        >
          <span className="text-[#100d12]!">
            Resume
          </span>

          <ArrowUpRight
            size={13}
            className="text-[#100d12]!"
          />
        </motion.a>

      </nav>
    </header>
  );
}