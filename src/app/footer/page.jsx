"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const footerLinks = {
    main: [
      { label: "About Us", href: "/about-us" },
      { label: "Our Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact Us", href: "/contact-us" },
    ],
    social: [
      { label: "Instagram", href: "#", icon: "/instagram_icon.svg" },
      { label: "Facebook", href: "#", icon: "/facebook_icon.svg" },
    ],
  };

  // Common animation variants for reusability
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeSide = (dir = 1) => ({
    hidden: { opacity: 0, x: 40 * dir },
    visible: { opacity: 1, x: 0 },
  });

  return (
    <footer className="bg-[#F8F8F8] text-gray-800 w-full relative overflow-hidden">
      {/* Subtle Motion Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        className="absolute inset-0  bg-cover bg-center pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-10 grid gap-10 md:gap-0 grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center will-change-transform">
        {/* Left Section */}
        <motion.div
          variants={fadeSide(-1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col space-y-6 text-center md:text-left items-center md:items-start"
        >
          {/* Navigation */}
          <nav className="flex flex-wrap gap-4 md:gap-6 font-medium justify-center md:justify-start">
            {footerLinks.main.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="hover:text-green-600 transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {footerLinks.social.map(({ label, href, icon }) => (
              <Link key={label} href={href}>
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image src={icon} alt={label} width={24} height={24} />
                </motion.div>
              </Link>
            ))}
          </div>

          <p className="text-sm leading-6 max-w-xs">
            Plot No. 27 &amp; 28, Rd Number 1, Samathapuri Colony, New Nagole
            Colony,
            <br />
            Samathapuri, Nagole, Hyderabad, Telangana 500035
          </p>
        </motion.div>

        {/* Middle Section (Logo + ISO) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-center space-y-3"
        >
          <div className="relative w-[180px] sm:w-[220px] h-[70px] sm:h-[90px]">
            <Image
              src="/vsignlogo.svg"
              alt="V Sign Logo"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-[80px] sm:w-[100px] h-[60px] sm:h-[80px]">
            <Image
              src="/iso.png"
              alt="ISO 9001:2015"
              fill
              sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 100px"
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Right Section (Contact Info) */}
        <motion.div
          variants={fadeSide(1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center md:items-end justify-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg md:max-w-md">
            {[
              { number: "99087 06363" },
              { number: "99490 66700" },
            ].map(({ number }) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                key={number}
                className="w-full"
              >
                <Link
                  href={`tel:${number.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 bg-white rounded-full px-4 py-3 shadow-sm justify-center text-sm sm:text-base hover:bg-green-50 hover:shadow-md transition"
                >
                  <Image src="/phone.svg" alt="Phone" width={18} height={18} />
                  <span className="font-semibold">{number}</span>
                </Link>
              </motion.div>
            ))}

            {[
              { email: "info@vsignpvtltd.com" },
              { email: "contact@vsignpvtltd.com" },
            ].map(({ email }) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                key={email}
                className="w-full"
              >
                <Link
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 bg-white rounded-full px-4 py-3 shadow-sm justify-center text-xs sm:text-sm hover:bg-green-50 hover:shadow-md transition"
                >
                  <Image src="/email.svg" alt="Mail" width={18} height={18} />
                  <span className="truncate max-w-[180px] sm:max-w-none">{email}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="border-t border-gray-300 relative"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-600 space-y-2 md:space-y-0">
          <p>© 2022 V Sign Pvt Ltd – All Rights Reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
}
