"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ⚡ Shared animation variants — reuse for smooth performance
const fadeUpVariant = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: {
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1], // smoother than easeInOut
  },
};

export default function DroneShoots() {
  const brands = [
    {
      name: "IKEA",
      media: [{ type: "image", src: "https://picsum.photos/800/400?random=1" }],
    },
    {
      name: "Sumadhura",
      media: [{ type: "image", src: "https://picsum.photos/800/400?random=3" }],
    },
    {
      name: "Vamsiram Builders",
      media: [{ type: "image", src: "https://picsum.photos/800/400?random=5" }],
    },
    {
      name: "ITC Hotels",
      media: [{ type: "image", src: "https://picsum.photos/800/400?random=6" }],
    },
    {
      name: "Lansum",
      media: [{ type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" }],
    },
  ];

  const [activeBrand, setActiveBrand] = useState(brands[0]);

  return (
    <section className="relative py-12 text-center overflow-hidden">
      {/* Section Header */}
      <motion.h3
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-xl md:text-2xl font-semibold mb-8 text-black"
      >
        Drone Shoots
      </motion.h3>

      {/* Brand Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {brands.map((brand) => (
          <motion.button
            key={brand.name}
            onClick={() => setActiveBrand(brand)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 250, damping: 18 }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
              activeBrand.name === brand.name
                ? "bg-[#00b050] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {brand.name}
          </motion.button>
        ))}
      </div>

      {/* Media Gallery */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBrand.name}
          variants={fadeUpVariant}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={fadeUpVariant.transition}
          className="h-auto max-w-6xl mx-auto px-4"
        >
          {activeBrand.media.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl shadow-md"
            >
              {item.type === "image" ? (
                <motion.img
                  src={item.src}
                  alt={`${activeBrand.name} media ${index + 1}`}
                  className="w-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 180, damping: 15 }}
                />
              ) : (
                <motion.video
                  controls
                  className="w-full object-cover rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
