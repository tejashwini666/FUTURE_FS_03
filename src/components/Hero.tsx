"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const, // Apple-style smooth custom curve
      },
    },
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-luxury-obsidian select-none"
    >
      {/* Background Image with Parallax & Ken Burns zoom effect */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.85 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero_model.png')",
        }}
      />

      {/* Cinematic Dark Gradient Overlays for editorial style */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-luxury-obsidian via-transparent to-black/35" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-luxury-obsidian/40 via-transparent to-luxury-obsidian/40" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center text-white mt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 md:space-y-8"
        >
          <motion.p
            variants={itemVariants}
            className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-luxury-gold font-semibold"
          >
            HAUTE COUTURE • EST. 2026
          </motion.p>
          
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-8xl font-light uppercase tracking-wider leading-[1.1]"
          >
            Redefining <br className="hidden md:inline" />
            <span className="font-serif italic text-luxury-gold font-normal lowercase">modern</span> Elegance
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="font-sans text-xs md:text-sm max-w-xl mx-auto uppercase tracking-[0.25em] text-luxury-creamDark/85 leading-relaxed font-light"
          >
            Exquisite hand-crafted garments blending the luxury of Western fashion with the rich heritage of Indian couture.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#collection"
              className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#C5A880] text-luxury-obsidian font-sans text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300 shadow-xl shadow-luxury-gold/10"
            >
              Shop Collection
            </a>
            <a
              href="#story"
              className="w-full sm:w-auto bg-transparent border border-white/40 hover:border-[#D4AF37] hover:text-[#D4AF37] text-white font-sans text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300 backdrop-blur-sm"
            >
              Explore Story
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Apple-style smooth bouncing scroll-down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.8, duration: 1 },
          y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" },
        }}
        className="absolute bottom-10 z-20 flex flex-col items-center cursor-pointer"
        onClick={() => {
          document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-white mb-2 font-light">
          Scroll Down
        </span>
        <div className="w-[1px] h-10 bg-white/40 relative">
          <div className="absolute top-0 left-0 right-0 h-3 bg-luxury-gold" />
        </div>
      </motion.div>
    </section>
  );
}
