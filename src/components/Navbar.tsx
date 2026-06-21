"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Heart, Search, Menu, X, Sun, Moon, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const {
    cart,
    wishlist,
    cartCount,
    cartTotal,
    cartOpen,
    setCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleWishlist,
    theme,
    toggleTheme,
  } = useCart();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle scroll trigger for navbar blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Categories", href: "#categories" },
    { name: "Collection", href: "#collection" },
    { name: "Our Story", href: "#story" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  // Dummy products mapped by ID to show metadata in the wishlist
  const dummyProductData: Record<string, { name: string; price: number; image: string }> = {
    "1": { name: "Ivory Silk Saree", price: 1850, image: "/images/category_saree.png" },
    "2": { name: "Velvet Bridal Lehenga", price: 3400, image: "/images/category_lehenga.png" },
    "3": { name: "Pastel Chikankari Kurti", price: 650, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=600&auto=format&fit=crop" },
    "4": { name: "Royal Satin Gown", price: 1200, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop" },
    "5": { name: "Draped Organza Dress", price: 1550, image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop" },
    "6": { name: "Georgette Floral Kurta", price: 450, image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=600&auto=format&fit=crop" },
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        id="maison-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "glassmorphism py-3 shadow-md"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Mobile Menu Icon (Left) */}
          <button
            id="navbar-mobile-menu-toggle"
            aria-label="Toggle Mobile Menu"
            className="lg:hidden p-2 text-foreground hover:text-[#D4AF37] transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={22} />
          </button>

          {/* Logo (Centered on mobile, Left on desktop) */}
          <a
            href="#home"
            id="navbar-logo-link"
            className="flex flex-col items-center lg:items-start select-none"
          >
            <span className="font-serif text-xl md:text-2xl uppercase tracking-[0.3em] font-light text-foreground">
              Maison
            </span>
            <span className="font-sans text-[8px] uppercase tracking-[0.4em] -mt-1 text-luxury-gold">
              d&apos;Élégance
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-xs uppercase tracking-[0.2em] font-medium text-foreground/80 hover:text-luxury-gold transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-3 md:space-x-5">
            {/* Search Icon */}
            <button
              id="navbar-search-btn"
              aria-label="Search Boutique"
              className="p-2 text-foreground hover:text-luxury-gold transition-colors"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search size={19} />
            </button>

            {/* Theme Toggle */}
            <button
              id="navbar-theme-btn"
              aria-label="Toggle Theme"
              className="p-2 text-foreground hover:text-luxury-gold transition-colors"
              onClick={toggleTheme}
            >
              {theme === "light" ? <Moon size={19} /> : <Sun size={19} />}
            </button>

            {/* Wishlist Heart Icon */}
            <button
              id="navbar-wishlist-btn"
              aria-label="Open Wishlist"
              className="p-2 text-foreground hover:text-luxury-gold transition-colors relative"
              onClick={() => setWishlistOpen(true)}
            >
              <Heart size={19} className={wishlist.length > 0 ? "fill-luxury-gold text-luxury-gold" : ""} />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 bg-luxury-gold text-luxury-obsidian text-[8px] font-sans font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Bag Icon */}
            <button
              id="navbar-cart-btn"
              aria-label="Open Shopping Cart"
              className="p-2 text-foreground hover:text-luxury-gold transition-colors relative"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag size={19} />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-luxury-gold text-luxury-obsidian text-[8px] font-sans font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Dynamic Search Bar dropdown */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 glassmorphism shadow-lg py-4 px-6 md:px-12 flex justify-center border-t border-luxury-gold/10"
            >
              <div className="w-full max-w-xl relative">
                <input
                  type="text"
                  placeholder="SEARCH OUR COLLECTIONS..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-b border-foreground/30 focus:border-luxury-gold py-2 px-4 pr-12 text-sm uppercase tracking-widest outline-none font-sans"
                  id="search-input-field"
                />
                <button
                  className="absolute right-4 top-2 text-foreground/50 hover:text-luxury-gold"
                  onClick={() => {
                    console.log("Searching for: ", searchQuery);
                    setSearchOpen(false);
                  }}
                >
                  <Search size={18} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Shopping Cart Side Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            {/* Drawer body */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-luxury-cream dark:bg-luxury-obsidian shadow-2xl z-50 flex flex-col border-l border-luxury-gold/10"
              id="shopping-cart-drawer"
            >
              {/* Header */}
              <div className="p-6 border-b border-luxury-gold/10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <ShoppingBag size={20} className="text-luxury-gold" />
                  <h2 className="font-serif text-lg md:text-xl uppercase tracking-widest text-foreground">
                    Your Shopping Bag ({cartCount})
                  </h2>
                </div>
                <button
                  id="close-cart-btn"
                  onClick={() => setCartOpen(false)}
                  className="p-1 hover:text-luxury-gold text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <ShoppingBag size={48} className="text-foreground/20 stroke-[1]" />
                    <p className="font-serif text-lg italic text-foreground/60">Your bag is empty.</p>
                    <button
                      onClick={() => setCartOpen(false)}
                      className="font-sans text-xs uppercase tracking-widest text-luxury-gold border border-luxury-gold px-6 py-2 hover:bg-luxury-gold hover:text-luxury-obsidian transition-all duration-300"
                    >
                      Browse Collections
                    </button>
                  </div>
                ) : (
                  cart.map((item, idx) => (
                    <motion.div
                      key={`${item.id}-${item.size}-${idx}`}
                      layout
                      className="flex space-x-4 border-b border-luxury-gold/10 pb-4"
                    >
                      {/* Image */}
                      <div className="w-20 h-24 bg-foreground/5 relative flex-shrink-0 overflow-hidden rounded">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-serif text-sm uppercase tracking-wide text-foreground">
                            {item.name}
                          </h3>
                          <p className="font-sans text-[10px] text-luxury-gold uppercase tracking-widest mt-1">
                            Size: {item.size}
                          </p>
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center border border-foreground/20 rounded">
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                              className="p-1 px-2 text-foreground/60 hover:text-luxury-gold transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="px-2 text-xs font-sans font-medium">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                              className="p-1 px-2 text-foreground/60 hover:text-luxury-gold transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeFromCart(item.id, item.size)}
                            className="text-foreground/40 hover:text-red-500 transition-colors p-1"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="text-right">
                        <span className="font-sans text-sm font-semibold text-foreground">
                          ${item.price * item.quantity}
                        </span>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Footer */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-luxury-gold/10 bg-luxury-creamDark dark:bg-luxury-charcoal space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-sans text-xs uppercase tracking-widest text-foreground/60">
                      Subtotal
                    </span>
                    <span className="font-sans text-lg font-bold text-[#D4AF37]">
                      ${cartTotal}
                    </span>
                  </div>
                  <p className="font-sans text-[10px] text-foreground/50 tracking-wider">
                    Shipping & taxes calculated at checkout.
                  </p>
                  <button
                    onClick={() => alert("Proceeding to secure luxury checkout...")}
                    className="w-full bg-[#D4AF37] hover:bg-[#C5A880] text-luxury-obsidian font-sans text-xs font-bold uppercase tracking-[0.25em] py-4 transition-all duration-300 shadow-lg shadow-luxury-gold/10"
                  >
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Wishlist Side Drawer */}
      <AnimatePresence>
        {wishlistOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setWishlistOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            {/* Drawer body */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-luxury-cream dark:bg-luxury-obsidian shadow-2xl z-50 flex flex-col border-l border-luxury-gold/10"
              id="wishlist-drawer"
            >
              {/* Header */}
              <div className="p-6 border-b border-luxury-gold/10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Heart size={20} className="text-luxury-gold fill-luxury-gold" />
                  <h2 className="font-serif text-lg md:text-xl uppercase tracking-widest text-foreground">
                    Your Wishlist ({wishlist.length})
                  </h2>
                </div>
                <button
                  id="close-wishlist-btn"
                  onClick={() => setWishlistOpen(false)}
                  className="p-1 hover:text-luxury-gold text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {wishlist.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                    <Heart size={48} className="text-foreground/20 stroke-[1]" />
                    <p className="font-serif text-lg italic text-foreground/60">Your wishlist is empty.</p>
                    <button
                      onClick={() => setWishlistOpen(false)}
                      className="font-sans text-xs uppercase tracking-widest text-luxury-gold border border-luxury-gold px-6 py-2 hover:bg-luxury-gold hover:text-luxury-obsidian transition-all duration-300"
                    >
                      Save Items
                    </button>
                  </div>
                ) : (
                  wishlist.map((id) => {
                    const item = dummyProductData[id] || {
                      name: "Premium Couture Item",
                      price: 990,
                      image: "/images/category_saree.png",
                    };
                    return (
                      <div key={id} className="flex space-x-4 border-b border-luxury-gold/10 pb-4">
                        {/* Image */}
                        <div className="w-20 h-24 bg-foreground/5 relative flex-shrink-0 overflow-hidden rounded">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Details */}
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h3 className="font-serif text-sm uppercase tracking-wide text-foreground">
                              {item.name}
                            </h3>
                            <span className="font-sans text-sm font-semibold text-[#D4AF37] block mt-1">
                              ${item.price}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <button
                              onClick={() => {
                                removeFromCart(id, "M"); // clear cart size instance if we want
                                addToCart({ id, name: item.name, price: item.price, image: item.image, size: "M" });
                                toggleWishlist(id);
                              }}
                              className="text-xs font-sans uppercase tracking-widest text-luxury-gold hover:underline"
                            >
                              Add to Bag
                            </button>
                            <button
                              onClick={() => toggleWishlist(id)}
                              className="text-xs font-sans uppercase tracking-widest text-red-500 hover:underline"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Drawer Navigation overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-luxury-cream dark:bg-luxury-obsidian flex flex-col"
            id="mobile-navigation-drawer"
          >
            {/* Header */}
            <div className="p-6 border-b border-luxury-gold/10 flex items-center justify-between">
              <span className="font-serif text-xl uppercase tracking-[0.25em] text-foreground">
                Maison
              </span>
              <button
                id="close-mobile-menu-btn"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 hover:text-luxury-gold text-foreground transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links List */}
            <div className="flex-1 flex flex-col justify-center items-center space-y-6 px-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl uppercase tracking-widest text-foreground hover:text-luxury-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-luxury-gold/10 text-center space-y-4">
              <p className="font-sans text-[10px] uppercase tracking-widest text-foreground/50">
                Maison d&apos;Élégance © 2026
              </p>
              <div className="flex justify-center space-x-6 text-foreground/60">
                <a href="#" className="hover:text-luxury-gold">INSTAGRAM</a>
                <a href="#" className="hover:text-luxury-gold">DIOR INSPIRED</a>
                <a href="#" className="hover:text-luxury-gold">SABYASACHI</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
