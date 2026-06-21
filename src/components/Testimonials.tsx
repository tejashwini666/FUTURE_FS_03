"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 1,
    quote: "The Ivory Silk Saree is an absolute dream. The level of hand-embroidery and the weight of the silk is unmatched. I felt like royalty wearing it at the gala. It truly bridges Sabyasachi heritage with modern luxury.",
    author: "Arundhati Roy",
    role: "Collector & Client",
    rating: 5,
  },
  {
    id: 2,
    quote: "Maison d'Élégance captures the essence of pure luxury. The velvet lehenga I ordered for my wedding was a literal work of art, weighing beautifully and fitting like a glove. The golden zardozi sequins are breathtaking.",
    author: "Sophia K.",
    role: "Vogue Editor / Bride",
    rating: 5,
  },
  {
    id: 3,
    quote: "Their customer concierge is just as exquisite as their garments. The Chikankari Kurti is perfect for daily luxury—delicate, breathable, and highly detailed. They have gained a lifelong patron.",
    author: "Meera Johar",
    role: "Art Curator",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut" as const,
      },
    }),
  };

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 px-6 md:px-12 bg-luxury-cream dark:bg-luxury-obsidian border-t border-b border-luxury-gold/5 relative overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-luxury-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
            CLIENT CORRESPONDENCE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light uppercase tracking-wide text-foreground">
            Boutique Testimonials
          </h2>
          <div className="w-12 h-[1px] bg-luxury-gold mx-auto" />
        </div>

        {/* Testimonial Slider Frame */}
        <div className="w-full relative min-h-[320px] md:min-h-[260px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full glassmorphism p-8 md:p-12 rounded-2xl flex flex-col items-center text-center shadow-xl space-y-6"
            >
              {/* Quote Mark */}
              <Quote size={28} className="text-luxury-gold opacity-50 rotate-180" />

              {/* Rating */}
              <div className="flex space-x-1 text-luxury-gold">
                {[...Array(TESTIMONIALS_DATA[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-luxury-gold" />
                ))}
              </div>

              {/* Quote Content */}
              <p className="font-serif text-lg md:text-2xl font-light italic leading-relaxed text-foreground/90 max-w-2xl">
                &ldquo;{TESTIMONIALS_DATA[currentIndex].quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="space-y-1">
                <h4 className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-foreground">
                  {TESTIMONIALS_DATA[currentIndex].author}
                </h4>
                <p className="font-sans text-[9px] uppercase tracking-widest text-[#8C7853]">
                  {TESTIMONIALS_DATA[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Interface */}
        <div className="flex items-center space-x-6 mt-8 z-10">
          <button
            onClick={handlePrev}
            className="p-3 border border-luxury-gold/25 text-foreground hover:bg-[#D4AF37] hover:text-luxury-obsidian transition-all duration-300 rounded-full"
            aria-label="Previous Review"
          >
            <ChevronLeft size={16} />
          </button>
          
          {/* Pagination Indicators */}
          <div className="flex space-x-2">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`h-[3px] transition-all duration-300 rounded-full ${
                  currentIndex === idx ? "w-6 bg-luxury-gold" : "w-2 bg-foreground/20"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 border border-luxury-gold/25 text-foreground hover:bg-[#D4AF37] hover:text-luxury-obsidian transition-all duration-300 rounded-full"
            aria-label="Next Review"
          >
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
