import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCart = create(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const cart = get().cart;
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          cart.push({ ...product, quantity: 1 });
        }

        set({ cart });
      },

      removeProduct: (id) => {
        set({ cart: get().cart.filter((item) => item.id !== id) });
      },

      clearCart: () => {
        set({ cart: [] });
      },

      updateQuantity: (productId, action) => {
        const cart = get().cart;
        const foundProduct = cart.find((item) => item.id === productId);

        if (action === "decrease") {
          foundProduct.quantity =
            foundProduct.quantity > 1
              ? foundProduct.quantity--
              : foundProduct.quantity;
        } else {
          foundProduct.quantity += 1;
        }

        set({ cart });
      },
    }),
    {
      name: "cart-items",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useMenu = create((set) => ({
  selectedMenu: undefined,
  onSelected: (id) => set({ selectedMenu: id }),
}));
