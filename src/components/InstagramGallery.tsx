"use client";

import React from "react";
import { motion } from "framer-motion";

interface GalleryItem {
  id: number;
  image: string;
  tag: string;
  sizeClass: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop",
    tag: "@maison.elegance",
    sizeClass: "mb-6 break-inside-avoid",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=600&auto=format&fit=crop",
    tag: "#MaisonAtelier",
    sizeClass: "mb-6 break-inside-avoid",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
    tag: "@maison.elegance",
    sizeClass: "mb-6 break-inside-avoid",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=600&auto=format&fit=crop",
    tag: "#SummerSilk",
    sizeClass: "mb-6 break-inside-avoid",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=600&auto=format&fit=crop",
    tag: "#MaisonCouture",
    sizeClass: "mb-6 break-inside-avoid",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=600&auto=format&fit=crop",
    tag: "@maison.elegance",
    sizeClass: "mb-6 break-inside-avoid",
  },
];

export default function InstagramGallery() {
  return (
    <section
      id="gallery"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto bg-luxury-cream dark:bg-luxury-obsidian select-none"
    >
      {/* Header */}
      <div className="text-center space-y-4 mb-16">
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold flex items-center justify-center gap-2">
          <svg className="w-3.5 h-3.5 text-[#D4AF37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          SOCIAL JOURNAL
        </span>
        <h2 className="font-serif text-3xl md:text-5xl font-light uppercase tracking-wide text-foreground">
          Editorial Gallery
        </h2>
        <p className="font-sans text-xs uppercase tracking-widest text-foreground/50 max-w-xs mx-auto">
          Tag us at @maison.elegance to be featured
        </p>
        <div className="w-12 h-[1px] bg-luxury-gold mx-auto mt-4" />
      </div>

      {/* Masonry Columns */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 w-full">
        {GALLERY_ITEMS.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${item.sizeClass} group relative overflow-hidden rounded-xl border border-luxury-gold/5 bg-foreground/5 cursor-pointer`}
          >
            {/* Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt="Maison Fashion Feed"
              className="w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Hover Backdrop Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white space-y-2 backdrop-blur-[1px]">
              <svg className="w-6 h-6 text-[#D4AF37] scale-75 group-hover:scale-100 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#FAF7F2]">
                {item.tag}
              </span>
            </div>

            {/* Subtle Gold Frame Border inside the card */}
            <div className="absolute inset-3 border border-luxury-gold/0 group-hover:border-luxury-gold/15 transition-all duration-300 rounded-lg pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
