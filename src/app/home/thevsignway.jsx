"use client";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

// Import SVGs as images
import ClipboardCheck from "../../../public/require.svg";
import FileCheck2 from "../../../public/survey.svg";
import PenTool from "../../../public/concept.svg";
import DollarSign from "../../../public/cost.svg";
import FileSignature from "../../../public/approve.svg";
import LayoutGrid from "../../../public/conceptd.svg";
import Settings from "../../../public/product.svg";
import Wrench from "../../../public/inst.svg";

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
      {/* Our Services Button */}
      <div className="relative flex justify-center py-10">
        <motion.button
          whileHover={!prefersReducedMotion ? { scale: 1.05 } : {}}
          whileTap={!prefersReducedMotion ? { scale: 0.97 } : {}}
          transition={{ duration: 0.2 }}
          className="cursor-pointer bg-[#50B848] text-white px-6 py-2 rounded-full text-sm font-medium shadow-md hover:bg-[#009640] transition"
        >
          Our Services
        </motion.button>
      </div>

      {/* Green Section */}
      <div className="relative bg-[#50B848] text-white py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">The VSign Way</h2>
          <p className="text-white/90 text-sm md:text-base mb-12">
            Our systematic & professional approach to lighting up your brand is what sets us apart.
          </p>

          {/* Steps Timeline */}
          <div className="relative w-full px-4">
  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-10 justify-items-center relative z-10">
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
        className="relative flex flex-col items-center text-center w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px]"
      >
        {/* Connector Line (visible between icons) */}
        {index < steps.length - 1 && (
          <div
            className="hidden lg:block absolute top-1/2 left-full w-full lg:w-[115%] 
            border-t-2 border-dashed border-white/60 z-0 "
          />
        )}

        {/* Circle Icon */}
        <motion.div
          whileHover={!prefersReducedMotion ? { scale: 1.08, rotate: 3 } : {}}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-md z-10"
        >
          <Image
            src={step.icon}
            alt={step.title}
            width={40}
            height={40}
            className="object-contain p-2 md:p-0"
          />
        </motion.div>

        {/* Title */}
        <p className="text-xs md:text-sm mt-3 leading-tight break-words max-w-[140px] sm:max-w-[160px] md:max-w-[180px]">
          {step.title}
        </p>
      </motion.div>
    ))}
  </div>
</div>


        </div>
      </div>
    </section>
  );
}
