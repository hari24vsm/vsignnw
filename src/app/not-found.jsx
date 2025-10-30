"use client";
import Link from "next/link";

export default function NotFoundSignage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      
      {/* Softer Neon Text */}
      <h1 className="text-6xl md:text-8xl font-extrabold text-[#00b050] soft-glow mb-6 animate-flicker">
        NOT FOUND
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-md">
        The service you are looking for does not exist.
      </p>

      {/* Go Back Button */}
      <Link
        href="/"
        className="px-6 py-3 bg-[#00b050] text-white rounded-lg shadow-md hover:bg-[#009944] transition-colors duration-300"
      >
        Go Back Home
      </Link>

      {/* Softer Glow & Flicker */}
      <style jsx>{`
        .soft-glow {
          text-shadow:
            0 0 4px #00b050,
            0 0 8px #00b050,
            0 0 16px #00b050;
        }

        @keyframes flicker {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0.8; }
        }

        .animate-flicker {
          animation: flicker 2s infinite;
        }
      `}</style>
    </div>
  );
}
