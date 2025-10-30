"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function BehindPage() {
  const [visibleSections, setVisibleSections] = useState({
    main: false,
    gallery: false,
  });

  const mainRef = useRef(null);
  const galleryRef = useRef(null);

  // Detect when sections scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    if (mainRef.current) observer.observe(mainRef.current);
    if (galleryRef.current) observer.observe(galleryRef.current);

    return () => observer.disconnect();
  }, []);

  const galleryImages = [
    { src: "/assets/behind2.webp", client: "ITC", span: "md:col-span-2 md:row-span-2" },
    { src: "/assets/behind3.webp", client: "ITC" },
    { src: "/assets/behind4.webp", client: "Riverside" },
    { src: "/assets/behind5.webp", client: "Bharat" },
    { src: "/assets/behind6.webp", client: "Good Samaritan" },
  ];

  return (
    <>
      {/* --- MAIN SECTION --- */}
      <section
        ref={mainRef}
        data-section="main"
        className="pt-[100px] relative w-full overflow-hidden px-6 md:px-16 py-16 flex flex-col md:flex-row items-center justify-between gap-10 "
      >
        {/* Left Text Section */}
        <div
          className={`flex-1 transition-all duration-700 ${
            visibleSections.main ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight md:mb-30 text-black">
            Behind The<br />
            <span className="text-[#00b050]">Scenes</span>
          </h2>
          <p className="text-gray-600 max-w-lg leading-relaxed">
            At V Sign Enterprises, we stand for sustainable construction quality
            and the highest level of creativity. Our commitment to excellence has
            established us as a predominant organization in Telangana, specializing
            in the production, supply, and merchandising of superior quality signage
            solutions.
          </p>
        </div>

        {/* Right Image Section */}
        <div
          className={` w-full md:w-1/2 transition-all duration-700 flex justify-center ${
            visibleSections.main ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative w-full max-w-[600px] h-[50vw] sm:h-[40vw] md:h-[50vh] shadow-lg overflow-hidden">
            <Image
              src="/assets/behind2.webp"
              alt="Behind the Scenes"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* --- GALLERY SECTION --- */}
      <section
        ref={galleryRef}
        data-section="gallery"
        className="relative w-full px-6 md:px-16 py-16 overflow-hidden "
      >
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 auto-rows-[200px] md:auto-rows-[250px] transition-all duration-700 ${
            visibleSections.gallery ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden shadow-md ${img.span || ""}`}
            >
              <Image
                src={img.src}
                alt={`Client ${img.client}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="absolute bottom-2 left-2 bg-[#00b050] text-white text-xs font-semibold px-3 py-1 rounded-md">
                Client : {img.client}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
