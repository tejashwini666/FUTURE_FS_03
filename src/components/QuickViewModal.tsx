"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Heart, ShoppingBag, ShieldCheck, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export interface ProductType {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  category: string;
  description: string;
  details: string[];
}

interface QuickViewModalProps {
  product: ProductType | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickViewModal({ product, isOpen, onClose }: QuickViewModalProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(0);

  if (!product) return null;

  const colors = ["Ivory Gold", "Antique Rose", "Obsidian Black"];
  const sizes = ["XS", "S", "M", "L", "XL"];

  const handleAddToBag = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
    });
    onClose();
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop overlay */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            id="quick-view-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="relative w-full max-w-4xl bg-luxury-cream dark:bg-luxury-charcoal rounded-2xl overflow-hidden shadow-2xl z-10 border border-luxury-gold/10"
            id="quick-view-modal-content"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-luxury-obsidian/10 dark:bg-white/10 hover:bg-[#D4AF37] hover:text-luxury-obsidian text-foreground transition-all duration-300"
              aria-label="Close Modal"
            >
              <X size={18} />
            </button>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Product Image Column */}
              <div className="relative h-[320px] md:h-[500px] bg-foreground/5 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-luxury-obsidian/70 backdrop-blur-md px-3 py-1 text-[9px] text-[#D4AF37] uppercase tracking-widest rounded-full">
                  {product.category}
                </div>
              </div>

              {/* Product Details Column */}
              <div className="p-6 md:p-10 flex flex-col justify-between space-y-6 overflow-y-auto max-h-[500px] md:max-h-none">
                {/* Header info */}
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl md:text-3xl uppercase tracking-wide text-foreground">
                    {product.name}
                  </h2>
                  <div className="flex items-center space-x-4">
                    <span className="font-sans text-xl font-bold text-[#D4AF37]">${product.price}</span>
                    <div className="flex items-center space-x-1 text-luxury-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < Math.floor(product.rating) ? "fill-luxury-gold" : "opacity-30"}
                        />
                      ))}
                      <span className="text-[10px] text-foreground/50 ml-1">({product.rating})</span>
                    </div>
                  </div>
                </div>

                <hr className="border-luxury-gold/10" />

                {/* Description */}
                <div className="space-y-2">
                  <p className="font-sans text-xs text-foreground/75 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="list-disc pl-4 font-sans text-[10px] text-foreground/60 space-y-1">
                    {product.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>

                {/* Color Selector */}
                <div className="space-y-2">
                  <span className="font-sans text-[9px] uppercase tracking-widest text-foreground/50 block">
                    Color: {colors[selectedColor]}
                  </span>
                  <div className="flex space-x-3">
                    {colors.map((color, idx) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(idx)}
                        className={`w-6 h-6 rounded-full border transition-all duration-300 ${
                          selectedColor === idx
                            ? "border-luxury-gold scale-110"
                            : "border-transparent"
                        }`}
                        style={{
                          backgroundColor:
                            idx === 0 ? "#FAF7F2" : idx === 1 ? "#E5DEC9" : "#1A1A19",
                        }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Size Selector */}
                <div className="space-y-2">
                  <span className="font-sans text-[9px] uppercase tracking-widest text-foreground/50 block">
                    Select Size
                  </span>
                  <div className="flex space-x-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`w-10 h-10 font-sans text-xs uppercase tracking-widest border transition-all duration-300 rounded ${
                          selectedSize === size
                            ? "border-luxury-gold bg-luxury-gold text-luxury-obsidian font-bold"
                            : "border-foreground/20 hover:border-luxury-gold text-foreground"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4 pt-2">
                  <button
                    onClick={handleAddToBag}
                    className="flex-1 bg-[#D4AF37] hover:bg-[#C5A880] text-luxury-obsidian font-sans text-xs font-bold uppercase tracking-[0.2em] py-4 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-luxury-gold/10"
                  >
                    <ShoppingBag size={14} />
                    <span>Add to Bag</span>
                  </button>
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="p-4 border border-foreground/20 hover:border-luxury-gold text-foreground hover:text-luxury-gold transition-all duration-300 rounded"
                    aria-label="Wishlist"
                  >
                    <Heart
                      size={16}
                      className={isInWishlist(product.id) ? "fill-luxury-gold text-luxury-gold" : ""}
                    />
                  </button>
                </div>

                {/* Value Props */}
                <div className="flex justify-between text-[9px] uppercase tracking-widest text-foreground/55 font-light pt-2">
                  <div className="flex items-center space-x-1">
                    <ShieldCheck size={12} className="text-luxury-gold" />
                    <span>Genuine Couture</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Truck size={12} className="text-luxury-gold" />
                    <span>Complementary Shipping</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
