"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

// ⚡ Shared animation variants for global smoothness
const fadeVariant = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
  transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
};

// 🧮 Optimized Animated Number Counter
function AnimatedNumber({ value, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  const numericValue = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "").trim();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let current = 0;
          const frame = 1000 / 60; // 60 FPS
          const totalSteps = Math.floor(duration / frame);
          const increment = numericValue / totalSteps;

          const counter = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
              setCount(numericValue);
              clearInterval(counter);
            } else {
              setCount(Math.floor(current));
            }
          }, frame);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [numericValue, duration]);

  return (
    <motion.h3
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-3xl sm:text-4xl font-bold text-[#50B848] mb-1"
    >
      {count.toLocaleString()}
      {suffix}
    </motion.h3>
  );
}

export default function StatsAndClients() {
  const [activeTab, setActiveTab] = useState("Construction");

  const categories = {
    Construction: ["/assets/image2.webp", "/assets/image3.webp", "/assets/image4.webp", "/assets/image5.webp", "/assets/image6.webp", "/assets/image7.webp"],
    Restaurants: ["/assets/image2.webp", "/assets/image3.webp", "/assets/image4.webp", "/assets/image5.webp", "/assets/image6.webp", "/assets/image7.webp"],
    Schools: ["/assets/image2.webp", "/assets/image3.webp", "/assets/image4.webp", "/assets/image5.webp", "/assets/image6.webp", "/assets/image7.webp"],
    Hospitals: ["/assets/image2.webp", "/assets/image3.webp", "/assets/image4.webp", "/assets/image5.webp", "/assets/image6.webp", "/assets/image7.webp"],
    Others: ["/assets/image2.webp", "/assets/image3.webp", "/assets/image4.webp", "/assets/image5.webp", "/assets/image6.webp", "/assets/image7.webp"],
  };

  const stats = [
    { value: "25000+", label: "HAPPY CLIENTS" },
    { value: "5000+", label: "SIGNAGES INSTALLED" },
    { value: "1500+", label: "LOGO & BRANDING" },
    { value: "10+ YEARS", label: "EXPERIENCE" },
  ];

  return (
    <section className="relative py-20  overflow-hidden">
      {/* Background Texture */}
      {/* <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] bg-contain opacity-10 pointer-events-none" /> */}

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        {/* ===== Stats Section ===== */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center min-w-[120px]">
              <AnimatedNumber value={stat.value} />
              <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ===== Title ===== */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-10 leading-snug"
        >
          Signages implemented <br  /> in just 1 year
        </motion.h2>

        {/* ===== Container ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="bg-[#F1F1F1] rounded md:rounded-full shadow-md py-10 px-12 md:px-20 mx-auto w-full max-w-7xl overflow-hidden"
        >
          {/* Tabs */}
          <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-6">
            {Object.keys(categories).map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-[#50B848] text-white shadow-md"
                    : "text-gray-600 hover:text-[#00b050]"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Divider */}
          <div className="h-[1px] bg-gray-200 mb-8"></div>

          {/* ===== Logo Grid ===== */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={fadeVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={fadeVariant.transition}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 place-items-center"
            >
              {categories[activeTab].map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 14 }}
                  className="flex items-center justify-center p-2 sm:p-3 md:p-4 bg-white shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-[90px] sm:max-w-[110px] md:max-w-[130px]"
                >
                  <img
                    src={src}
                    alt={`${activeTab}-${i}`}
                    className="object-contain w-full h-auto aspect-[4/2]"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
