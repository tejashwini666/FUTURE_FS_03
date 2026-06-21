"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Eye, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import QuickViewModal, { ProductType } from "./QuickViewModal";

const PRODUCTS_DATA: ProductType[] = [
  {
    id: "1",
    name: "Ivory Silk Saree",
    price: 1850,
    rating: 4.9,
    image: "/images/category_saree.png",
    category: "Sarees",
    description: "Indulge in pure elegance with our signature Ivory Silk Saree. Expertly hand-woven using fine mulberry silk, it features delicate zari embroidery along the borders, inspired by royal drapery. Perfect for modern brides and prestigious festive soirées.",
    details: ["100% Pure Mulberry Silk", "Hand-woven gold zari borders", "Includes unstitched designer blouse piece", "Dry clean only"],
  },
  {
    id: "2",
    name: "Velvet Bridal Lehenga",
    price: 3400,
    rating: 5.0,
    image: "/images/category_lehenga.png",
    category: "Lehengas",
    description: "An archival masterpiece of Sabyasachi-inspired grandeur. Crafted in heavy jewel-toned velvet, this bridal lehenga is adorned with traditional dabka and hand-placed zardozi sequins. Designed to turn heads with cinematic beauty.",
    details: ["Premium silk velvet base", "Over 200 hours of artisanal hand-embroidery", "Comes with dual organza dupattas", "Signature heavy flair"],
  },
  {
    id: "3",
    name: "Pastel Chikankari Kurti",
    price: 650,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop",
    category: "Kurtis",
    description: "A soft, breathable celebration of Lucknowi craftsmanship. Made from lightweight premium georgette, it features intricate shadow work and floral hand-embroidery, complete with micro-pearl accents.",
    details: ["Fine georgette fabric", "Lucknowi hand-done shadow work", "Embedded pearl details", "Includes cotton slip"],
  },
  {
    id: "4",
    name: "Royal Satin Gown",
    price: 1200,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop",
    category: "Party Wear",
    description: "Inspired by Parisian haute couture, this golden satin evening gown features asymmetric drapes that hug your curves beautifully. The structured corset bodice offers timeless vintage-modern elegance.",
    details: ["Heavy silk satin blend", "Structured interior corset structure", "Hidden back zip closure", "Elegant trailing hem"],
  },
  {
    id: "5",
    name: "Draped Organza Dress",
    price: 1550,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop",
    category: "Designer Collection",
    description: "From our luxury runway line, this avant-garde organza creation merges architectural drapes with soft romance. Features puff sleeves and raw edge tiers that dance gracefully as you walk.",
    details: ["Pure Italian organza", "Unique architectural tier pattern", "Soft interior lining", "Runway-featured collection"],
  },
  {
    id: "6",
    name: "Georgette Floral Kurta",
    price: 450,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=600&auto=format&fit=crop",
    category: "Kurtis",
    description: "Perfect for daytime luxury. A lightweight floral georgette kurta set featuring keyhole neckline, scalloped lace borders, and complementary tapered trousers.",
    details: ["Breathable premium georgette", "Hand-painted floral motif layout", "Delicate scalloped lace trims", "Includes trousers"],
  },
];

const CATEGORIES = ["All", "Sarees", "Lehengas", "Kurtis", "Party Wear", "Designer Collection"];

export default function Products() {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    if (activeCategory === "All") return true;
    return product.category === activeCategory;
  });

  const handleQuickView = (product: ProductType) => {
    setSelectedProduct(product);
    setQuickViewOpen(true);
  };

  const handleAddToCart = (product: ProductType) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: "M", // default size
    });
  };

  return (
    <section
      id="collection"
      className="py-24 md:py-32 px-6 md:px-12 bg-luxury-creamDark/10 dark:bg-luxury-charcoal/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-luxury-gold font-semibold">
            CURATED COUTURE
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-light uppercase tracking-wide text-foreground">
            Trending Products
          </h2>
          <div className="w-12 h-[1px] bg-luxury-gold mx-auto mt-4" />
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              id={`filter-tab-${category.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 font-sans text-[10px] uppercase tracking-widest transition-all duration-300 rounded-full border ${
                activeCategory === category
                  ? "bg-luxury-gold border-luxury-gold text-luxury-obsidian font-bold"
                  : "bg-transparent border-foreground/10 hover:border-luxury-gold text-foreground/75"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                className="group relative flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] bg-foreground/5 overflow-hidden rounded-xl border border-luxury-gold/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Wishlist Button */}
                  <button
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-luxury-cream/80 dark:bg-luxury-obsidian/85 hover:bg-luxury-cream dark:hover:bg-luxury-obsidian shadow shadow-black/10 border border-luxury-gold/10 text-foreground transition-all duration-300"
                    aria-label="Add to Wishlist"
                  >
                    <Heart
                      size={15}
                      className={`transition-colors duration-300 ${
                        isInWishlist(product.id) ? "fill-luxury-gold text-luxury-gold" : "hover:text-[#D4AF37]"
                      }`}
                    />
                  </button>

                  {/* Hover Buttons Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex items-center justify-center space-x-3 backdrop-blur-[2px]">
                    <button
                      onClick={() => handleQuickView(product)}
                      className="p-3 bg-luxury-cream text-luxury-obsidian rounded-full hover:bg-[#D4AF37] hover:text-luxury-obsidian transition-all duration-300 scale-90 group-hover:scale-100 shadow-md"
                      title="Quick View"
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="p-3 bg-luxury-cream text-luxury-obsidian rounded-full hover:bg-[#D4AF37] hover:text-luxury-obsidian transition-all duration-300 scale-90 group-hover:scale-100 shadow-md"
                      title="Add to Bag"
                    >
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>

                {/* Info Area */}
                <div className="mt-6 flex justify-between items-start space-x-4">
                  <div className="space-y-1">
                    <span className="font-sans text-[9px] uppercase tracking-widest text-[#8C7853]">
                      {product.category}
                    </span>
                    <h3 className="font-serif text-base uppercase tracking-wide text-foreground group-hover:text-[#D4AF37] transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1 text-luxury-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          className={i < Math.floor(product.rating) ? "fill-luxury-gold" : "opacity-30"}
                        />
                      ))}
                      <span className="text-[9px] text-foreground/50 ml-1">({product.rating})</span>
                    </div>
                  </div>
                  <span className="font-sans text-sm font-semibold text-foreground mt-1">
                    ${product.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Quick View Modal Overlay */}
      <QuickViewModal
        product={selectedProduct}
        isOpen={quickViewOpen}
        onClose={() => {
          setQuickViewOpen(false);
          setSelectedProduct(null);
        }}
      />
    </section>
  );
}
