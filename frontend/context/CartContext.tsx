import { createContext, useState, ReactNode } from 'react';

export interface CartItem {
  part_id: number;
  part_name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (partId: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalCost: number;
}

export const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (newItem: CartItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.part_id === newItem.part_id);
      if (existing) {
        return prevCart.map((i) =>
          i.part_id === newItem.part_id ? { ...i, quantity: i.quantity + newItem.quantity } : i
        );
      }
      return [...prevCart, newItem];
    });
  };

  const removeFromCart = (partId: number) => {
    setCart((prevCart) => prevCart.filter((i) => i.part_id !== partId));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems, totalCost }}>
      {children}
    </CartContext.Provider>
  );
};
