"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  ClipboardCheck,
  FileCheck2,
  PenTool,
  DollarSign,
  FileSignature,
  LayoutGrid,
  Settings,
  Wrench,
} from "lucide-react";

export default function TheVSignWay() {
  const prefersReducedMotion = useReducedMotion();

  const steps = [
    { icon: ClipboardCheck, title: "Requirement Analysis" },
    { icon: FileCheck2, title: "Site Survey" },
    { icon: PenTool, title: "Concept Design" },
    { icon: DollarSign, title: "Cost Estimation" },
    { icon: FileSignature, title: "Approvals" },
    { icon: LayoutGrid, title: "Concept Development" },
    { icon: Settings, title: "Production" },
    { icon: Wrench, title: "Installation" },
  ];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background pattern */}
      {/* <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] bg-contain opacity-10 pointer-events-none" /> */}

      {/* Our Services Button */}
      <div className="relative flex justify-center py-10">
        <motion.button
          whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
          whileTap={!prefersReducedMotion ? { scale: 0.97 } : {}}
          transition={{ duration: 0.2 }}
          className="bg-[#00b050] text-white px-6 py-2 rounded-full text-sm font-medium shadow-md hover:bg-[#009640] transition"
        >
          Our Services
        </motion.button>
      </div>

      {/* Green Section */}
      <div className="relative bg-[#00b050] text-white py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">The VSign Way</h2>
          <p className="text-white/90 text-sm md:text-base mb-12">
            Our systematic & professional approach to lighting up your brand is what sets us apart.
          </p>

          {/* Steps Timeline */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Circle Icon */}
                <motion.div
                  whileHover={!prefersReducedMotion ? { scale: 1.08, rotate: 3 } : {}}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-16 h-16 md:w-20 md:h-20 bg-white text-[#00b050] rounded-full flex items-center justify-center shadow-md relative z-10"
                >
                  <step.icon className="w-8 h-8 md:w-10 md:h-10" />
                </motion.div>

                {/* Dashed line (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-16 border-t-2 border-dashed border-white/60" />
                )}
                <p className="text-xs md:text-sm mt-3">{step.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
