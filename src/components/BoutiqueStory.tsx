"use client";

import React from "react";
import { motion } from "framer-motion";

export default function BoutiqueStory() {
  return (
    <section
      id="story"
      className="py-24 md:py-36 px-6 md:px-12 bg-luxury-cream dark:bg-luxury-obsidian overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
        
        {/* Story Text (Left Column) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className="lg:col-span-7 space-y-6 md:space-y-8"
        >
          <div className="space-y-2">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              OUR HERITAGE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light uppercase tracking-wide leading-tight text-foreground">
              Weaving dreams into <br />
              <span className="font-serif italic text-[#D4AF37] lowercase">haute</span> couture
            </h2>
          </div>

          <p className="font-serif text-lg md:text-xl italic text-foreground/80 leading-relaxed font-light">
            &ldquo;Maison d&apos;Élégance was born from a singular vision: to create a dialogue between the clean, structural lines of Parisian high fashion and the breathtaking luxury of Indian handloom.&rdquo;
          </p>

          <div className="font-sans text-xs md:text-sm text-foreground/70 leading-relaxed space-y-4 font-light">
            <p>
              Every garment that exits our atelier represents hundreds of hours of precision design. We source the finest mulberry silks from Varanasi, rich velvets from Gujarat, and structural satins from France. Our artisans employ heritage techniques—zardozi, dabka, and shadow chikankari work—to create modern silhouettes that transcend trends.
            </p>
            <p>
              Like the grand salons of Dior and the heritage-steeped craftsmanship of Sabyasachi, Maison d&apos;Élégance celebrates the individual. We believe fashion is not merely clothing, but an armor of artistic self-expression.
            </p>
          </div>

          {/* Luxury statistics/highlights */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-luxury-gold/10">
            <div>
              <span className="font-serif text-2xl md:text-3xl font-light text-luxury-gold block">
                100%
              </span>
              <span className="font-sans text-[9px] uppercase tracking-widest text-foreground/60">
                Artisanal Handloom
              </span>
            </div>
            <div>
              <span className="font-serif text-2xl md:text-3xl font-light text-luxury-gold block">
                250+
              </span>
              <span className="font-sans text-[9px] uppercase tracking-widest text-foreground/60">
                Hours per Lehenga
              </span>
            </div>
            <div>
              <span className="font-serif text-2xl md:text-3xl font-light text-luxury-gold block">
                Est.
              </span>
              <span className="font-sans text-[9px] uppercase tracking-widest text-foreground/60">
                Paris / Delhi 2026
              </span>
            </div>
          </div>
        </motion.div>

        {/* Story Image (Right Column) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Main image container */}
          <div className="aspect-[3/4] md:aspect-[4/5] bg-foreground/5 rounded-2xl overflow-hidden border border-luxury-gold/5 relative group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/boutique_story.png"
              alt="Maison d'Elégance Boutique Interior"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Fine gold border outline overlay */}
            <div className="absolute inset-4 border border-luxury-gold/25 rounded-xl pointer-events-none" />
            
            {/* Inner shading */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
            
            {/* Tiny brand label */}
            <div className="absolute bottom-6 left-6 right-6 text-white text-center">
              <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-[#C5A880]">
                ATELIER SALON • PARIS
              </span>
            </div>
          </div>

          {/* Artistic floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 bg-[#D4AF37] text-luxury-obsidian p-6 hidden sm:block rounded-xl shadow-2xl max-w-[180px] border border-white/10"
          >
            <span className="font-serif text-sm italic block">
              &ldquo;Made by hands, worn by souls.&rdquo;
            </span>
            <span className="font-sans text-[8px] uppercase tracking-widest text-luxury-obsidian/70 block mt-2 text-right">
              — Atelier Maison
            </span>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
