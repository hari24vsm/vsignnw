"use client";
import { useState, useEffect, useRef } from "react";
// import TextType from "./TextType";

export default function Videopage() {
  const [isMobile, setIsMobile] = useState(false);
  const [visible, setVisible] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0); // for desktop video rotation
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  const desktopVideos = [
    "https://outqinjxtp4ybt80.public.blob.vercel-storage.com/videos/video1.mp4",
    "https://outqinjxtp4ybt80.public.blob.vercel-storage.com/videos/video2.mp4",
    "https://outqinjxtp4ybt80.public.blob.vercel-storage.com/videos/video3.mp4"
  ];
  
  const mobileVideo = "https://outqinjxtp4ybt80.public.blob.vercel-storage.com/videos/top.mp4";

  useEffect(() => {
    // Detect mobile
    setIsMobile(/Mobi|Android/i.test(navigator.userAgent));

    // IntersectionObserver for smooth fade-in
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 1.5; // same speed for all videos

    const tryPlay = () => {
      video.play().catch(() => {
        document.body.addEventListener(
          "touchstart",
          () => {
            video.playbackRate = 1.5;
            video.play();
          },
          { once: true }
        );
      });
    };

    tryPlay();

    // Desktop: rotate videos on ended
    // Desktop and Mobile looping behavior
    const handleEnded = () => {
      if (isMobile) {
        // Mobile: replay same video
        video.currentTime = 0;
        video.play();
      } else {
        // Desktop: go to next video or loop back to first
        setCurrentVideo((prev) => (prev + 1) % desktopVideos.length);
      }
    };

    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, [currentVideo, isMobile]);

  return (
    <section
      ref={heroRef}
      className="relative h-[90vh] w-full overflow-hidden will-change-transform "
    >
      {/* Background Video */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out lg:pt-[86px]">
        <video
          key={isMobile ? mobileVideo : desktopVideos[currentVideo]} // key triggers smooth reload
          ref={videoRef}
          className="w-full h-full object-cover pointer-events-none"
          autoPlay
          muted
          playsInline
          fetchPriority="high"
          loop={isMobile}
          webkit-playsinline="true"
          preload="auto"
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          poster="https://outqinjxtp4ybt80.public.blob.vercel-storage.com/videos/vimage.jpg"
        >
          <source
            src={isMobile ? mobileVideo : desktopVideos[currentVideo]}
            type="video/mp4"
          />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Typing Text */}
      {/* <div
        className={`absolute top-24 left-6 md:left-16 z-10 max-w-3xl transform transition-all duration-700 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <TextType
          as="h1"
          text={[
            "We Build Icons.",
            "Signage That Defines Presence.",
            "Hyderabad's No.1 Signage Partner.",
            "Signs that shine brighter, last longer.",
          ]}
          typingSpeed={60}
          pauseDuration={4000}
          showCursor={true}
          cursorCharacter="|"
          className="text-4xl md:text-6xl font-light tracking-wide text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"
          textColors={["#FFFFFF"]}
        />
      </div> */}

      {/* Get Quote Button */}
      {/* <div
        className={`absolute bottom-6 md:bottom-10 right-6 md:right-10 z-10 transform transition-all duration-700 ease-out delay-300 ${
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <button
          onClick={openModal}
          className={`cursor-pointer px-6 py-3 rounded-2xl bg-white/10 ${
            isMobile ? "" : "backdrop-blur-md"
          } border border-white/20 text-white font-semibold ${
            isMobile ? "" : "shadow-lg"
          } hover:scale-105 transition-transform duration-300`}
        >
          Get a Quote
        </button>
      </div> */}
    </section>
  );
}