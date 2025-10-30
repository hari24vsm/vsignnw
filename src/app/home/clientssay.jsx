"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const clients = [
  {
    id: 1,
    name: "Varsham Builders",
    logo: "/assets/image2.webp",
    review:
      "Established in 2013, VSign is a custom signage design and manufacturing company that brings precision, quality and perfection to every project. The organisation’s comprehensive signage solutions help brands create the powerful brand experiences they need to draw the audiences they want.",
    author: "Kishore Pandey",
    role: "Managing Director",
  },
  {
    id: 2,
    name: "Sumadhura",
    logo: "/assets/image3.webp",
    review:
      "Working with VSign has been a smooth experience. Their attention to detail and professionalism helped us build impactful signage that perfectly aligns with our brand identity.",
    author: "Arjun Rao",
    role: "Project Head",
  },
  {
    id: 3,
    name: "Mahindra Lifespaces",
    logo: "/assets/image6.webp",
    review:
      "VSign exceeded our expectations by delivering premium quality signage on time. Their team’s creativity and dedication made the whole process seamless.",
    author: "Sneha Kapoor",
    role: "Design Manager",
  },
  {
    id: 4,
    name: "Lansum Developers",
    logo: "/assets/image7.webp",
    review:
      "We appreciate VSign’s commitment to excellence. The results speak for themselves — top-notch design, timely delivery, and unmatched craftsmanship.",
    author: "Rahul Mehta",
    role: "Marketing Lead",
  },
  {
    id: 5,
    name: "Lansum Developers",
    logo: "/assets/image5.webp",
    review:
      "We appreciate VSign’s commitment to excellence. The results speak for themselves — top-notch design, timely delivery, and unmatched craftsmanship.",
    author: "Rahul Mehta",
    role: "Marketing Lead",
  },
  {
    id: 6,
    name: "Lansum Developers",
    logo: "/assets/image4.webp",
    review:
      "We appreciate VSign’s commitment to excellence. The results speak for themselves — top-notch design, timely delivery, and unmatched craftsmanship.",
    author: "Rahul Mehta",
    role: "Marketing Lead",
  },
];

export default function ClientsSay() {
  const [activeClient, setActiveClient] = useState(clients[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-10 ">
      <div className="mx-auto px-4 text-center bg-[#F8F8F8] py-10">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800 will-change-transform"
        >
          Our Client&apos;s Say
        </motion.h2>

        {/* Client Logos */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 will-change-transform"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              whileHover={!isMobile ? { scale: 1.05, y: -2 } : {}}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                activeClient.id === client.id
                  ? "bg-white shadow-lg ring-2 ring-green-400"
                  : "bg-transparent"
              }`}
              onClick={() => setActiveClient(client)}
              onMouseEnter={() => !isMobile && setActiveClient(client)}
            >
              <div className="w-[100px] sm:w-[120px] flex justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={60}
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "120px",
                    }}
                    className={`mx-auto transition-all duration-500 ${
                      activeClient.id === client.id
                        ? "opacity-100"
                        : "opacity-50"
                    }`}
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Review Section */}
        <div className="relative min-h-[180px] md:min-h-[140px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeClient.id}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="max-w-3xl mx-auto will-change-transform"
            >
              <p className="text-gray-600 mb-4 leading-relaxed">
                {activeClient.review}
              </p>
              <h4 className="font-semibold text-gray-800">
                {activeClient.author}
              </h4>
              <p className="text-sm text-gray-500">{activeClient.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
