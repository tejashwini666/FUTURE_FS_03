import React from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Products from "@/components/Products";
import BoutiqueStory from "@/components/BoutiqueStory";
import Testimonials from "@/components/Testimonials";
import InstagramGallery from "@/components/InstagramGallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      {/* Premium introductory page loader */}
      <Loader />
      
      {/* Sticky navigation header */}
      <Navbar />

      {/* Main website sections */}
      <Hero />
      <Categories />
      <Products />
      <BoutiqueStory />
      <Testimonials />
      <InstagramGallery />
      <Contact />
      
      {/* Luxury footer */}
      <Footer />
    </main>
  );
}
