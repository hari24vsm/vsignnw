import React from "react";

export default function WhoWeAre() {
  return (
    <div className="w-full">
      <section className="relative py-16 sm:py-20 overflow-hidden">
        {/* Background texture */}
        {/* <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] bg-contain opacity-10 pointer-events-none" /> */}

        {/* Heading Section */}
        <div className="relative text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-600 font-medium mb-2 text-sm sm:text-base">
            Who We Are
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl  mb-4 text-black">
            A Sign Of The{" "}
            <span className=" font-bold">Success</span>
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10 text-sm sm:text-base">
            Established in 2013, VSign is a custom signage design and manufacturing company
            that brings precision, quality, and perfection to every project. The organisation’s
            comprehensive signage solutions help brands create the powerful brand experiences
            they need to draw the audiences.
          </p>
        </div>
      </section>

      {/* Image Row */}
      <div className="flex justify-center items-stretch gap-3 sm:gap-4 md:gap-6 overflow-hidden px-1">
        {/* 1 */}
        <div className="w-[20%] sm:w-[22%] md:w-[20%] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
          <img
            src="/assets/boutique.png"
            alt="Gallery 1"
            loading="lazy"
            className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover object-center transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* 2 */}
        <div className="w-[40%] sm:w-[36%] md:w-[35%] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
          <img
            src="/assets/seetha.png"
            alt="Gallery 2"
            loading="lazy"
            className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover object-center transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* 3 */}
        <div className="w-[15%] sm:w-[18%] md:w-[14%] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
          <img
            src="/assets/barcelos.png"
            alt="Gallery 3"
            loading="lazy"
            className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover object-center transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* 4 */}
        <div className="w-[25%] sm:w-[24%] md:w-[23%] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
          <img
            src="/assets/shakeitup.png"
            alt="Gallery 4"
            loading="lazy"
            className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover object-center transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

    </div>
  );
}
