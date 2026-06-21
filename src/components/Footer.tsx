"use client";

import React, { useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribing newsletter: ", email);
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <footer
      id="maison-footer"
      className="bg-[#0A0A09] text-white pt-24 pb-12 border-t border-luxury-gold/10 select-none"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Newsletter & Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-luxury-gold/10 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              THE JOURNAL
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-light uppercase tracking-wide">
              Subscribe to Maison Gazette
            </h2>
            <p className="font-sans text-[11px] text-white/50 tracking-wider">
              Receive private invitations to seasonal runway debuts, atelier showcases, and exclusive bespoke collections.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form onSubmit={handleSubscribe} className="relative w-full max-w-md lg:ml-auto">
              <input
                type="email"
                required
                placeholder="YOUR EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 focus:border-luxury-gold py-4 pr-12 text-xs uppercase tracking-[0.2em] outline-none font-sans transition-colors duration-300"
                id="newsletter-email-input"
              />
              <button
                type="submit"
                className="absolute right-0 top-3 text-white/60 hover:text-[#D4AF37] p-2 transition-colors duration-300"
                aria-label="Subscribe"
              >
                {subscribed ? (
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#D4AF37]">
                    ADDED
                  </span>
                ) : (
                  <ArrowRight size={16} />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 py-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex flex-col select-none">
              <span className="font-serif text-2xl uppercase tracking-[0.3em] font-light text-white">
                Maison
              </span>
              <span className="font-sans text-[8px] uppercase tracking-[0.4em] -mt-1 text-luxury-gold">
                d&apos;Élégance
              </span>
            </a>
            <p className="font-sans text-[10px] text-white/50 tracking-wider leading-relaxed pt-2 max-w-xs font-light">
              Maison d&apos;Élégance is a high-end luxury fashion house crafting bespoke wedding, festival, and ready-to-wear ensembles that redefine contemporary glamour.
            </p>
          </div>

          {/* Nav Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-xs uppercase tracking-widest text-luxury-gold font-medium">
              Navigation
            </h4>
            <ul className="space-y-2 text-[10px] font-sans text-white/65 uppercase tracking-widest font-light">
              <li><a href="#home" className="hover:text-luxury-gold transition-colors">Home</a></li>
              <li><a href="#categories" className="hover:text-luxury-gold transition-colors">Categories</a></li>
              <li><a href="#collection" className="hover:text-luxury-gold transition-colors">Collections</a></li>
              <li><a href="#story" className="hover:text-luxury-gold transition-colors">Our Story</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-xs uppercase tracking-widest text-luxury-gold font-medium">
              Client Services
            </h4>
            <ul className="space-y-2 text-[10px] font-sans text-white/65 uppercase tracking-widest font-light">
              <li><a href="#contact" className="hover:text-luxury-gold transition-colors">Book Private Appointment</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Shipping & Returns policy</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Couture Sizing Guide</a></li>
              <li><a href="#" className="hover:text-luxury-gold transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Location info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-xs uppercase tracking-widest text-luxury-gold font-medium">
              Our Salons
            </h4>
            <div className="text-[10px] font-sans text-white/65 uppercase tracking-widest space-y-3 font-light leading-relaxed">
              <p>
                <span className="text-white block font-medium">Paris Salon</span>
                Rue du Faubourg Saint-Honoré, Paris
              </p>
              <p>
                <span className="text-white block font-medium">New Delhi Salon</span>
                Diplomatic Enclave, Chanakyapuri
              </p>
            </div>
          </div>

        </div>

        {/* Footer Bottom / Legal */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[9px] uppercase tracking-widest text-white/40 text-center md:text-left">
            Maison d&apos;Élégance © 2026. All Rights Reserved. Crafted with Dior-Zara-Sabyasachi aesthetics.
          </p>

          <div className="flex items-center space-x-6 text-[9px] font-sans text-white/40 uppercase tracking-widest">
            <a href="#" className="hover:text-luxury-gold">Privacy Policy</a>
            <a href="#" className="hover:text-luxury-gold">Terms of Service</a>
            <a href="#" className="hover:text-luxury-gold flex items-center gap-1">
              <ShieldCheck size={10} className="text-luxury-gold" />
              Secure Checkout
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
