"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const motionConfig = {
  transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Behind the Scenes", href: "/behindthescenes" },
    { label: "About Us", href: "/aboutus" },
    { label: "Our Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact Us", href: "/contactus" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md text-white shadow-sm z-[100] transition-colors duration-300">


      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 pt-1">
        {/* Logo + Rating */}
        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="/"
            className="relative w-[120px] sm:w-[150px] h-[55px] sm:h-[70px] block"
          >
            <Image
              src="/vsignlogo.svg"
              alt="V Sign Enterprises Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 120px, 150px"
            />
          </Link>
          <div className="relative w-[80px] sm:w-[100px] h-[50px] sm:h-[70px]">
            <Image
              src="/rating.svg"
              alt="AVG Rating"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 80px, 100px"
            />
          </div>
        </div>

        {/* Tagline + Links (Desktop) */}
        <div className="hidden lg:flex flex-col items-end gap-2">
          <motion.span
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            {...motionConfig}
            className="bg-[#B7E3A0] text-[#2B3F3C] px-4 py-1 rounded-md text-sm font-semibold whitespace-nowrap shadow-sm"
          >
            Top Quality Sign Construction, Delivered On Time
          </motion.span>
          <nav className="flex items-center gap-6">
            {navLinks.map(({ label, href }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                {...motionConfig}
              >
                <Link
                  href={href}
                  className="text-[16px] font-medium text-gray-900 hover:text-green-600 transition-colors duration-300"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="lg:hidden flex flex-col gap-1 focus:outline-none z-[60] relative"
        >
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            className="w-6 h-0.5 bg-black"
            {...motionConfig}
          />
          <motion.span
            animate={{ opacity: isOpen ? 0 : 1 }}
            className="w-6 h-0.5 bg-black"
            {...motionConfig}
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            className="w-6 h-0.5 bg-black"
            {...motionConfig}
          />
        </button>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            {...motionConfig}
            className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-[100vh] bg-[#0d1b16]/90 backdrop-blur-xl border-l border-white/20 shadow-2xl flex flex-col items-start px-6 py-20 gap-6 lg:hidden z-50"
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-white hover:text-[#B7E3A0] transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dim background overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black lg:hidden z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
