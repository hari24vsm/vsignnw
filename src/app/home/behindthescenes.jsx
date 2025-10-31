"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const BehindTheScenes = () => {
  const brands = [
    { type: "image", src: "./assets/bhhm.jpg" },
    { type: "image", src: "./assets/bhhm.jpg" },
  ];

  // Reusable variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <section className="relative py-16 sm:py-20 overflow-hidden">
        {/* Background Texture */}
        {/* <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] bg-contain opacity-10 pointer-events-none" /> */}

        {/* Heading Section */}
        <div className="relative text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[#50B848] text-2xl sm:text-3xl md:text-4xl font-bold mb-4 will-change-transform"
          >
            Behind the Scenes
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10 text-sm sm:text-base will-change-transform"
          >
            Established in 2013, VSign is a custom signage design and manufacturing company
            that brings precision, quality, and perfection to every project. The organisation’s
            comprehensive signage solutions help brands create the powerful brand experiences
            they need to draw the audiences.
          </motion.p>
        </div>
      </section>

      {/* Images / Videos Section */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-auto mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 will-change-transform"
        >
          {brands.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="overflow-hidden shadow-md  will-change-transform"
            >
              {item.type === "image" ? (
                <motion.img
                  src={item.src}
                  alt={`Behind the scenes ${index + 1}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-full object-cover transition-transform duration-300"
                />
              ) : (
                <video
                  controls
                  className="w-full object-cover rounded-2xl"
                >
                  <source src="" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Button Section */}
      <div className="flex justify-center flex-wrap gap-3 sm:gap-4 m-6">
        <Link href="/behindthescenes">
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="cursor-pointer px-4 sm:px-6 py-2 rounded-full bg-[#50B848] text-white shadow-md hover:bg-white hover:text-[#00b050] text-xs sm:text-sm md:text-base font-medium transition-all duration-300 will-change-transform"
          >
            Behind The Scenes
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default BehindTheScenes;
