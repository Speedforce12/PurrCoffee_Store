"use client";

import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";
import EmptyCart from "@/components/EmptyCart";
import { useCart } from "@/lib/zustand";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [mounted, setMounted] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='flex flex-col '>
      <h1 className='font-bold md:text-2xl text-xl my-10'>Shopping Cart</h1>
      <div className='grid lg:grid-cols-12 gap-10 grid-cols-1'>
        <div className='lg:col-span-7  gap-5'>
          {cart.length === 0 && <EmptyCart />}

          {cart.map((product) => (
            <div key={product.id} className='border-b'>
              <CartItem product={product} />
            </div>
          ))}
              </div>
              <CartSummary/>
      </div>
    </div>
  );
};

export default CartPage;
