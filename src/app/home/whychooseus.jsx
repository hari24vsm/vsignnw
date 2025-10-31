"use client";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const items = [
    {
      title: "LED Signage",
      content:
        "We are one of the reputed LED sign makers in Telangana and we always come up with the most creative LED signs.",
    },
    {
      title: "Architectural Signages",
      content:
        "Our architectural signage designs blend elegance with functionality to enhance brand visibility.",
    },
    {
      title: "Facia Signages",
      content:
        "We deliver premium facia signage solutions that capture attention and elevate your business identity.",
    },
    {
      title: "Pylon Signages",
      content:
        "Our durable and eye-catching pylon signs make your brand stand tall and visible from afar.",
    },
    {
      title: "Sky Signages",
      content:
        "We create illuminated sky signage solutions that ensure your brand shines even at a distance.",
    },
    {
      title: "Glow Signages",
      content:
        "Our glow signages illuminate your brand beautifully and ensure maximum visibility day and night.",
    },
    {
      title: "Acrylic Letters",
      content:
        "We craft stunning acrylic letter signages that make your brand name pop with precision and clarity.",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Texture */}
      {/* <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] bg-contain opacity-10 pointer-events-none" /> */}

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Heading */}
        <p className="text-[#50B848] font-medium mb-2 text-lg">Why you choose us?</p>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Bringing Designs To <span className="text-[#50B848]">Life</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          At VSign, you will always find the right signage to bring your brand to life.
          The company’s experienced team is ever-ready to help you make the perfect
          choice from our wide range of signage options.
        </p>

        {/* Accordion */}
        <div className="space-y-4 text-left pr-3 pl-6 max-h-[400px] overflow-y-auto custom-scrollbar">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                layout
                transition={{
                  layout: { duration: 0.4, ease: "easeOut" },
                }}
                className="border-b border-gray-200 pb-2"
              >
                <motion.button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  whileTap={!prefersReducedMotion ? { scale: 0.98 } : {}}
                  transition={{ duration: 0.15 }}
                  className="cursor-pointer w-full flex justify-between items-center py-3 text-left"
                >
                  <span
                    className={`font-semibold text-lg transition-colors duration-300 ${
                      isOpen ? "text-[#50B848]" : "text-gray-800"
                    }`}
                  >
                    {item.title}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {isOpen ? (
                      <ChevronUp className="text-[#00b050] w-5 h-5" />
                    ) : (
                      <ChevronDown className="text-gray-500 w-5 h-5" />
                    )}
                  </motion.div>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-700 text-sm md:text-base pb-3 leading-relaxed">
                        {item.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
