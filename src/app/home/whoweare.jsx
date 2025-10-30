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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            A Sign Of The{" "}
            <span className="text-[#00b050]">Success</span>
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
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 px-3 sm:px-4 md:px-6">
        {/* Each image block */}
        <div className="w-[45%] sm:w-[30%] md:w-[18%] min-w-[160px] overflow-hidden  shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
          <img
            src="/assets/Mask1.webp"
            alt="Gallery 1"
            loading="lazy"
            className="w-full h-[180px] sm:h-[200px] md:h-[240px] object-cover object-center transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="w-[90%] sm:w-[60%] md:w-[40%] min-w-[200px] overflow-hidden  shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
          <img
            src="/assets/Mask2.webp"
            alt="Gallery 2"
            loading="lazy"
            className="w-full h-[180px] sm:h-[200px] md:h-[240px] object-cover object-center transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="w-[40%] sm:w-[25%] md:w-[10%] min-w-[160px] overflow-hidden  shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
          <img
            src="/assets/Mask3.webp"
            alt="Gallery 3"
            loading="lazy"
            className="w-full h-[180px] sm:h-[200px] md:h-[240px] object-cover object-center transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="w-[60%] sm:w-[35%] md:w-[25%] min-w-[160px] overflow-hidden  shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
          <img
            src="/assets/Mask4.webp"
            alt="Gallery 4"
            loading="lazy"
            className="w-full h-[180px] sm:h-[200px] md:h-[240px] object-cover object-center transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
