"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "Mark",
    role: "Marketing",
    image: "/assets/about4.webp",
    description:
      "Established in 2013, VSign is a custom signage design and manufacturing company that brings precision, quality and perfection to every project.",
  },
  {
    id: 2,
    name: "Diana",
    role: "HR",
    image: "/assets/about3.webp",
    description:
      "Established in 2013, VSign is a custom signage design and manufacturing company that brings precision, quality and perfection to every project.",
  },
  {
    id: 3,
    name: "Lisa",
    role: "Design Lead",
    image: "/assets/about5.webp",
    description:
      "Kiran brings a creative edge to every project with his design expertise, ensuring innovation meets precision in every signage solution.",
  },
  {
    id: 4,
    name: "Paris",
    role: "Operations",
    image: "/assets/about6.webp",
    description:
      "Meena ensures smooth operations and client satisfaction through her meticulous coordination and management skills.",
  },
];

export default function CreativeTeam() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen width on mount and resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () =>
    setIndex((prev) => (prev + (isMobile ? 1 : 2)) % teamMembers.length);

  const prevSlide = () =>
    setIndex(
      (prev) =>
        (prev - (isMobile ? 1 : 2) + teamMembers.length) % teamMembers.length
    );

  // Determine how many to show
  const visibleMembers = isMobile
    ? [teamMembers[index]]
    : [
        teamMembers[index],
        teamMembers[(index + 1) % teamMembers.length],
      ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto text-center px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-green-600 mb-10">
          Our Creative Team
        </h2>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-16"
            >
              {visibleMembers.map((member) => (
                <div
                  key={member.id}
                  className="shadow-md overflow-hidden w-full md:w-1/2 flex flex-col md:flex-row items-stretch md:h-[400px]"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={500}
                    className="w-full md:w-1/2 h-64 md:h-auto object-cover"
                  />
                  <div className="p-6 text-left flex flex-col justify-center">
                    <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
                      {member.description}
                    </p>
                    <h4 className="font-semibold text-green-600">
                      {member.name}
                    </h4>
                    <p className="text-gray-500 text-sm">{member.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows */}
        <div className="flex justify-center mt-10 gap-4">
          <button
            onClick={prevSlide}
            className="cursor-pointer bg-black text-white rounded-full p-3 hover:scale-110 transition"
            aria-label="Previous team member"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="cursor-pointer bg-green-500 text-white rounded-full p-3 hover:scale-110 transition"
            aria-label="Next team member"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
