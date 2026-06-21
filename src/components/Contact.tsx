"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact submission: ", formState);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 bg-luxury-creamDark/10 dark:bg-luxury-charcoal/10 relative"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Contact Info & Form (Left Column) */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-2">
            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
              INQUIRIES & BOOKINGS
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-light uppercase tracking-wide text-foreground">
              Contact Our Atelier
            </h2>
            <div className="w-12 h-[1px] bg-luxury-gold mt-4" />
          </div>

          <p className="font-sans text-xs uppercase tracking-widest text-foreground/60 leading-relaxed font-light">
            Schedule a private consultation, inquire about customized bridal wear, or speak with our stylists.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6 pt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder="YOUR FULL NAME"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-transparent border-b border-foreground/30 focus:border-luxury-gold py-3 text-xs uppercase tracking-widest outline-none font-sans transition-colors duration-300"
                  id="contact-name-input"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="YOUR EMAIL ADDRESS"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent border-b border-foreground/30 focus:border-luxury-gold py-3 text-xs uppercase tracking-widest outline-none font-sans transition-colors duration-300"
                  id="contact-email-input"
                />
              </div>
            </div>
            
            <div className="relative">
              <textarea
                required
                rows={4}
                placeholder="YOUR MESSAGE OR CONSULTATION REQUEST"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-transparent border-b border-foreground/30 focus:border-luxury-gold py-3 text-xs uppercase tracking-widest outline-none font-sans transition-colors duration-300 resize-none"
                id="contact-message-input"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#C5A880] text-luxury-obsidian font-sans text-xs font-bold uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-luxury-gold/5"
            >
              <span>{submitted ? "MESSAGE SENT" : "SEND MESSAGE"}</span>
              <Send size={12} className={submitted ? "translate-x-1 duration-300" : ""} />
            </button>
          </form>

          {/* Contact Details & Socials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-luxury-gold/10">
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-foreground/80">
                <MapPin size={16} className="text-luxury-gold mt-1 flex-shrink-0" />
                <div className="font-sans text-xs font-light tracking-wide">
                  <p className="font-semibold uppercase text-foreground">Maison d&apos;Élégance Salon</p>
                  <p>75008 Rue du Faubourg Saint-Honoré, Paris</p>
                  <p>Chanakyapuri, New Delhi, India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-foreground/80">
                <Clock size={16} className="text-luxury-gold flex-shrink-0" />
                <div className="font-sans text-xs font-light tracking-wide">
                  <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
                  <p>Sundays: By Appointment Only</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-foreground/80">
                <Phone size={16} className="text-luxury-gold flex-shrink-0" />
                <span className="font-sans text-xs font-light tracking-wide">+33 (0) 1 42 68 53 00</span>
              </div>
              <div className="flex items-center space-x-3 text-foreground/80">
                <Mail size={16} className="text-luxury-gold flex-shrink-0" />
                <span className="font-sans text-xs font-light tracking-wide">concierge@maison-elegance.com</span>
              </div>

              {/* Social Icons */}
              <div className="flex items-center space-x-4 pt-2">
                <a href="#" className="p-2 border border-foreground/15 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all" aria-label="Instagram">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="p-2 border border-foreground/15 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all" aria-label="Facebook">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="p-2 border border-foreground/15 rounded-full hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all" aria-label="Twitter">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Styled Google Maps (Right Column) */}
        <div className="lg:col-span-5 h-[350px] lg:h-auto min-h-[400px] relative rounded-2xl overflow-hidden border border-luxury-gold/15 shadow-xl bg-foreground/5">
          {/* Custom Sepia/Gray filter wrapper */}
          <div className="w-full h-full grayscale sepia-[0.1] contrast-[0.95] dark:invert dark:opacity-85">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.221424755104!2d2.3188546156743913!3d48.872054679289294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4ee385c5b%3A0x7d6f51be8c9629b3!2sRue%20du%20Faubourg%20Saint-Honor%C3%A9%2C%2075008%20Paris%2C%20France!5e0!3m2!1sen!2sus!4v1653841029202!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maison d'Elégance Atelier Map"
              id="boutique-google-map"
            ></iframe>
          </div>
          
          {/* Map tag badge */}
          <div className="absolute bottom-4 left-4 bg-luxury-cream dark:bg-luxury-obsidian border border-luxury-gold/10 px-4 py-2 text-[10px] uppercase tracking-widest rounded-lg flex items-center space-x-2 text-foreground shadow-md">
            <MapPin size={12} className="text-[#D4AF37]" />
            <span>Rue du Faubourg Saint-Honoré</span>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Support Widget (Bottom-Right) */}
      <motion.a
        href="https://wa.me/33142685300"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-4 rounded-full shadow-2xl flex items-center justify-center border border-white/20 group cursor-pointer"
        aria-label="Chat on WhatsApp"
        id="floating-whatsapp-widget"
      >
        {/* Pulse Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:animate-none pointer-events-none" />
        <MessageSquare size={22} className="relative z-10" />
        
        {/* Hover Label */}
        <span className="absolute right-full mr-3 bg-luxury-cream dark:bg-luxury-obsidian text-foreground border border-luxury-gold/15 text-[9px] font-sans font-bold uppercase tracking-widest py-1.5 px-3 rounded shadow-lg opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap">
          WhatsApp Styling
        </span>
      </motion.a>
    </section>
  );
}
