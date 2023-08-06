"use client";

import { useCart } from "@/lib/zustand";
import { Button } from "./ui/button";
import axios from "axios";
import {useUser } from "@clerk/nextjs";

const CartSummary = () => {
  const { cart } = useCart();
  const { user } = useUser()
  
  

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxes = total * 0.1;
  const grandTotal = total + taxes;

  const handleCheckOut = async () => {
    const {data} = await axios.post(`http://localhost:3001/api/checkout?userId=${user.id}`, {
      cartItems: cart,
    });
    window.location.assign(data);
  };

  return (
    <section className='p-5 flex flex-col border lg:col-span-5 h-fit rounded-md shadow-md mb-5'>
      <span className='font-semibold  text-xl'>Order Summary</span>
      <ul className='space-y-5 my-3 divide-y divide-gray-300'>
        <li className='flex items-center justify-between'>
          <span>Subtotal</span>
          <p className='font-medium '>${total.toFixed(2)}</p>
        </li>
        <li className='flex items-center justify-between pt-3'>
          <span>Tax</span>
          <p className='font-medium '>${taxes.toFixed(2)}</p>
        </li>
        <li className='flex items-center justify-between pt-3'>
          <span>Order Total</span>
          <p className='font-medium '>${grandTotal.toFixed(2)}</p>
        </li>
      </ul>
      <Button onClick={handleCheckOut} disabled={cart.length === 0}>
        Checkout
      </Button>
    </section>
  );
};

export default CartSummary;
