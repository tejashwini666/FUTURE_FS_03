"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  wishlist: string[];
  cartCount: number;
  cartTotal: number;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, quantity: number) => void;
  toggleWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
  theme: "light" | "dark";
  toggleTheme: () => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Hydrate states from localStorage on client render
  useEffect(() => {
    const savedCart = localStorage.getItem("maison-cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error(e);
      }
    }

    const savedWishlist = localStorage.getItem("maison-wishlist");
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (e) {
        console.error(e);
      }
    }

    const savedTheme = localStorage.getItem("maison-theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      // Default to light
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const saveCartToStorage = (newCart: CartItem[]) => {
    localStorage.setItem("maison-cart", JSON.stringify(newCart));
  };

  const saveWishlistToStorage = (newWishlist: string[]) => {
    localStorage.setItem("maison-wishlist", JSON.stringify(newWishlist));
  };

  const addToCart = (newItem: Omit<CartItem, "quantity">) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === newItem.id && item.size === newItem.size
      );

      let updatedCart;
      if (existingItemIndex > -1) {
        updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
      } else {
        updatedCart = [...prevCart, { ...newItem, quantity: 1 }];
      }
      saveCartToStorage(updatedCart);
      return updatedCart;
    });
    setCartOpen(true); // Open cart drawer on addition
  };

  const removeFromCart = (id: string, size: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => !(item.id === id && item.size === size));
      saveCartToStorage(updatedCart);
      return updatedCart;
    });
  };

  const updateQuantity = (id: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, size);
      return;
    }
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity } : item
      );
      saveCartToStorage(updatedCart);
      return updatedCart;
    });
  };

  const toggleWishlist = (id: string) => {
    setWishlist((prevWishlist) => {
      const isWishlisted = prevWishlist.includes(id);
      let updatedWishlist;
      if (isWishlisted) {
        updatedWishlist = prevWishlist.filter((item) => item !== id);
      } else {
        updatedWishlist = [...prevWishlist, id];
      }
      saveWishlistToStorage(updatedWishlist);
      return updatedWishlist;
    });
  };

  const isInWishlist = (id: string) => {
    return wishlist.includes(id);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("maison-theme", nextTheme);
      if (nextTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return nextTheme;
    });
  };

  const clearCart = () => {
    setCart([]);
    saveCartToStorage([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
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
        isInWishlist,
        theme,
        toggleTheme,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
