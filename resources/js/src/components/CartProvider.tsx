import React, { createContext, useContext, useReducer, useEffect } from "react";
import { Product } from "@/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  price: number;
}

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | {
      type: "ADD_ITEM";
      payload: { product: Product; size: string; price: number };
    }
  | { type: "REMOVE_ITEM"; payload: { productId: number; size: string } }
  | {
      type: "UPDATE_QUANTITY";
      payload: { productId: number; size: string; quantity: number };
    }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; payload: CartItem[] };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, size, price } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.product.id === product.id && item.size === size,
      );

      let newItems;
      if (existingItemIndex !== -1) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        newItems = [...state.items, { product, quantity: 1, size, price }];
      }

      const total = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );

      return { items: newItems, total };
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter(
        (item) =>
          !(
            item.product.id === action.payload.productId &&
            item.size === action.payload.size
          ),
      );
      const total = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
      return { items: newItems, total };
    }

    case "UPDATE_QUANTITY": {
      const { productId, size, quantity } = action.payload;
      if (quantity <= 0) {
        return cartReducer(state, {
          type: "REMOVE_ITEM",
          payload: { productId, size },
        });
      }

      const newItems = state.items.map((item) =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity }
          : item,
      );

      const total = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );

      return { items: newItems, total };
    }

    case "CLEAR_CART":
      return { items: [], total: 0 };

    case "LOAD_CART": {
      const total = action.payload.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
      return { items: action.payload, total };
    }

    default:
      return state;
  }
};

interface CartContextType {
  state: CartState;
  addItem: (product: Product, size: string, price: number) => void;
  removeItem: (productId: number, size: string) => void;
  updateQuantity: (productId: number, size: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 });

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("herbaquench-cart");
    if (savedCart) {
      try {
        const cartItems = JSON.parse(savedCart);
        dispatch({ type: "LOAD_CART", payload: cartItems });
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("herbaquench-cart", JSON.stringify(state.items));
  }, [state.items]);

  const addItem = (product: Product, size: string, price: number) => {
    dispatch({ type: "ADD_ITEM", payload: { product, size, price } });
  };

  const removeItem = (productId: number, size: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { productId, size } });
  };

  const updateQuantity = (
    productId: number,
    size: string,
    quantity: number,
  ) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { productId, size, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const getItemCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
