# ⚜️ BOUT — Premium Luxury E-Commerce Boutique

A high-end, archival designer couture storefront crafted using **Next.js 14 (App Router)**, **TypeScript**, **Framer Motion**, and **Tailwind CSS**. Designed to simulate a bespoke, immersive shopping experience for a luxury fashion house.

---

## ✨ Features

- **👑 Premium Page Loader** — A custom, smooth introductory loader that sets a sophisticated brand tone upon entering the storefront.
- **🛍️ Dynamic Collection Showcase** — Real-time filterable product grids for categories such as *Sarees*, *Lehengas*, *Kurtis*, *Party Wear*, and *Designer Collections*.
- **🔎 Product Quick View** — An elegant, interactive modal showing detailed material information, curated descriptions, sizing selections, and direct add-to-bag action.
- **🛒 Persistent Shopping Cart** — A sliding responsive sidebar drawer to view cart items, manage quantities, select sizes, and calculate order totals. 
- **💖 Wishlist Management** — Quick toggle for favoriting products, allowing users to build their curated luxury wishlist.
- **🌓 Dark & Light Modes** — Smooth transitions between a light luxury cream aesthetic (`#FAF7F2`) and an obsidian dark mode (`#0A0A09`).
- **🗄️ Local Storage Hydration** — Complete client-side state persistence for the shopping cart, wishlist, and theme configurations.
- **📱 Responsive & Interactive UI** — Fully responsive layouts featuring bespoke micro-interactions, hover states, and parallax-inspired scrolling powered by Framer Motion.
- **📬 Inquire & Contact Form** — An interactive boutique inquiry form designed to capture bespoke tailoring requests.

---

## 🎨 Design System

The application is styled with a highly curated luxury color palette and modern typography pairings configured directly in Tailwind:

*   **Typography:**
    *   `var(--font-cormorant)` (Serif) — Used for headings, product names, and premium branding.
    *   `var(--font-montserrat)` (Sans) — Used for navigation, body text, buttons, and subtext.
*   **Colors:**
    *   `luxury-cream` (`#FAF7F2`) — Primary light mode background.
    *   `luxury-obsidian` (`#0A0A09`) — Primary dark mode background.
    *   `luxury-gold` (`#D4AF37`) — Signature metallic accent color.
    *   `luxury-charcoal` (`#161513`) — Secondary dark container background.
    *   `luxury-bronze` (`#8C7853`) — Secondary text/category accent.

---

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + PostCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

---

## 📂 Directory Structure

```text
src/
├── app/
│   ├── layout.tsx         # Global layout with providers and fonts
│   ├── page.tsx           # Home page assembling all main sections
│   └── globals.css        # Global CSS, theme variables & animations
├── components/
│   ├── Loader.tsx         # Initial luxury brand loader
│   ├── Navbar.tsx         # Responsive sticky header with cart & wishlist drawers
│   ├── Hero.tsx           # Premium widescreen landing hero
│   ├── Categories.tsx     # Grid-based visual category navigation
│   ├── Products.tsx       # Interactive product listing with filtering
│   ├── QuickViewModal.tsx # Detailed product view overlay
│   ├── BoutiqueStory.tsx  # Editorial brand story section
│   ├── Testimonials.tsx   # Premium client reviews slider
│   ├── InstagramGallery.tsx# Simulating curation from social feeds
│   ├── Contact.tsx        # Tailoring & inquiry forms
│   └── Footer.tsx         # Structured editorial brand directory footer
└── context/
    └── CartContext.tsx    # State management for cart, wishlist, and theme toggling
```

---

## 🛠️ Getting Started

### Prerequisites

Make sure you have Node.js (v18.x or later) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tejashwini666/FUTURE_FS_03.git
   cd FUTURE_FS_03
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Production & Optimization

To build the application for production:

```bash
npm run build
# Start the production server
npm run start
```

To run the ESLint linter:

```bash
npm run lint
```
