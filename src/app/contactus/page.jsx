"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import ContactForm from "../aboutus/letstalk/page";

export default function ContactLocation() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("contact-map");
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) setVisible(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section
            id="contact-map"
            className={`bg-white w-full pt-[70px] md:pt-[85px] transition-opacity duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
        >
            {/* image */}
            <div>
                <Image
                    src="/assets/contact-us.webp"
                    alt="About Us - Team"
                    width={500}
                    height={500}
                    className="w-full h-[40vh] md:h-[65vh]  shadow-lg"
                    priority
                />

            </div>
            {/* Map */}
            <div className="w-full h-[350px] md:h-[500px] overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.7305377283456!2d78.55236177462675!3d17.37669460311414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99f1915ac63b%3A0x3969b507ad883a6e!2sV%20Sign!5e0!3m2!1sen!2sin!4v1761723550273!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    width="600"
                    height="450"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Contact Info Cards */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-6 md:px-10 py-10">
                {/* Call Us */}
                <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
                    <div className="inline-block bg-yellow-400 text-gray-900 text-sm font-medium px-3 py-1 rounded-md mb-3">
                        Call us at
                    </div>
                    <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                        +91 99490 66700 <br /> +91 99087 06363
                    </p>
                </div>

                {/* Office */}
                <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
                    <div className="inline-block bg-yellow-400 text-gray-900 text-sm font-medium px-3 py-1 rounded-md mb-3">
                        Our office
                    </div>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                        Plot No. 27 & 28, Rd Number 1, Samathapuri Colony, <br />
                        New Nagole Colony, Samathapuri, Nagole, <br />
                        Hyderabad, Telangana 500035, India
                    </p>
                </div>

                {/* Email */}
                <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
                    <div className="inline-block bg-yellow-400 text-gray-900 text-sm font-medium px-3 py-1 rounded-md mb-3">
                        E-mail us at
                    </div>
                    <p className="text-lg font-bold text-gray-900">
                        contact@vsignpvtltd.com <br /> info@vsignpvtltd.com
                    </p>
                </div>
            </div>

            <ContactForm />
        </section>
    );
}
