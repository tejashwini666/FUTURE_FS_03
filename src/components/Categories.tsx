"use client";

import React from "react";
import { motion } from "framer-motion";

interface Category {
  id: string;
  name: string;
  count: string;
  image: string;
  gridClass: string;
  aspectClass: string;
}

export default function Categories() {
  const categories: Category[] = [
    {
      id: "sarees",
      name: "Sarees",
      count: "18 ITEMS",
      image: "/images/category_saree.png",
      gridClass: "md:col-span-2 md:row-span-2",
      aspectClass: "aspect-[4/5] md:aspect-square",
    },
    {
      id: "lehengas",
      name: "Lehengas",
      count: "12 ITEMS",
      image: "/images/category_lehenga.png",
      gridClass: "md:col-span-1 md:row-span-2",
      aspectClass: "aspect-[3/4] md:aspect-auto md:h-full",
    },
    {
      id: "kurtis",
      name: "Kurtis",
      count: "24 ITEMS",
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop",
      gridClass: "md:col-span-1 md:row-span-1",
      aspectClass: "aspect-[4/3] md:aspect-auto md:h-full",
    },
    {
      id: "partywear",
      name: "Party Wear",
      count: "15 ITEMS",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
      gridClass: "md:col-span-1 md:row-span-1",
      aspectClass: "aspect-[4/3] md:aspect-auto md:h-full",
    },
    {
      id: "designer",
      name: "Designer Collection",
      count: "8 ITEMS",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop",
      gridClass: "md:col-span-2 md:row-span-1",
      aspectClass: "aspect-[16/9] md:aspect-auto md:h-full",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="categories"
      className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto bg-luxury-cream dark:bg-luxury-obsidian"
    >
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
        <div className="space-y-2">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-semibold">
            THE ATELIER
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light uppercase tracking-wide text-foreground">
            Featured Categories
          </h2>
        </div>
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-foreground/50 max-w-md md:text-right leading-relaxed font-light">
          Explore our carefully curated silhouettes, each crafted by hand with details that tell a story of beauty and grandeur.
        </p>
      </div>

      {/* Asymmetric Grid Layout */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]"
      >
        {categories.map((category) => (
          <motion.div
            key={category.id}
            variants={cardVariants}
            className={`${category.gridClass} group relative overflow-hidden rounded-xl border border-luxury-gold/5 bg-luxury-creamDark/10 dark:bg-luxury-charcoal/30 cursor-pointer`}
          >
            {/* Aspect container */}
            <div className={`relative w-full h-full overflow-hidden ${category.aspectClass}`}>
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out scale-100 group-hover:scale-110 filter brightness-[0.9] group-hover:brightness-75"
              />

              {/* Gold gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-obsidian via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-luxury-brown/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Text Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex flex-col justify-end text-white z-20">
                <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-[#C5A880] mb-2 font-medium">
                  {category.count}
                </span>
                <h3 className="font-serif text-xl md:text-2xl uppercase tracking-wide group-hover:text-luxury-gold transition-colors duration-300">
                  {category.name}
                </h3>
                
                {/* Expand indicator line on hover */}
                <div className="w-0 h-[1px] bg-luxury-gold mt-4 transition-all duration-500 group-hover:w-16" />
              </div>

              {/* Subtle gold border reveal on hover */}
              <div className="absolute inset-4 border border-luxury-gold/0 group-hover:border-luxury-gold/20 transition-all duration-500 pointer-events-none rounded-lg" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
