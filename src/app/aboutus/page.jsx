"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import CreativeTeam from "./team/page";
import { motion } from "framer-motion";

const ClientsSay = dynamic(() => import("../home/clientssay"), { ssr: false });
const ContactForm = dynamic(() => import("./letstalk/page"), { ssr: false });



export default function AboutUs() {
  
  return (
    <section className=" relative  overflow-hidden pt-16 md:pt-20">
      {/* Section 1 */}
      <div
        className="pt-[80] max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 px-6 md:px-10 will-change-transform"
      >
        <div className="w-full md:w-1.5/2 flex justify-center">
          <Image
            src="/assets/about1.webp"
            alt="About VSign"
            width={700}
            height={500}
            priority
            className=" object-cover w-full h-auto transform-gpu transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h4 className="text-gray-700 text-sm md:text-base font-medium mb-2">
            About us
          </h4>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-5">
            Elevating <br/>Brand Identities <br /> with Premier <br/>Signage Solutions
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
            Welcome to V Sign Enterprises, Hyderabad’s premier signage company, 
            where quality meets innovation. Our mission is to elevate your brand 
            identity with our comprehensive range of signage solutions, crafted to perfection.
          </p>
        </div>
      </div>
      <div className="py-20 px-10  text-center">
        <h1 className="text-[25px]">Transforming Business Identities with <br/><span className="font-bold"> Hyderabad’s Best Signage Solutions</span></h1>
      </div>

      {/* CEO Section */}
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16 px-6 md:px-10 py-12 will-change-transform"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/about2.webp"
            alt="CEO"
            width={700}
            height={500}
            className="object-cover transform-gpu transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
            Established in 2013, VSign is a custom signage design and manufacturing 
            company that brings precision, quality and perfection to every project. 
            The organisation’s comprehensive signage solutions help brands create 
            the powerful brand experiences they need to draw the audiences they deserve.
          </p>
          <h2 className="text-2xl md:text-4xl pt-10 text-[#50B848] leading-snug mb-5">
            THARUN KUMAR
          </h2>
          <h4 className="text-gray-700 text-sm md:text-base font-medium ">
            Founder, CEO
          </h4>
        </div>
      </motion.div>

     

    <CreativeTeam/>
    <ClientsSay/>
    <ContactForm/>
    </section>
  );
}
