"use client";

import { PartyPopper } from "lucide-react";
import React, { useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useCart } from "@/lib/zustand";

const SuccessMessage = ({ customerEmail, customerName }) => {
  const { clearCart } = useCart();

  useEffect(() => {
    if (customerEmail && customerEmail) {
      clearCart();
    }
  }, [clearCart, customerEmail]);

  return (
    <div className='flex items-center flex-col space-y-3 text-center'>
      <PartyPopper size={40} className='text-green-500' />
      <h1 className='text-green-500 font-bold md:text-4xl text-3xl'>
        Order Successful!
      </h1>
      <span className='flex items-center gap-x-2 text-xl font-medium'>
        Thank you, <p className='font-bold text-black'>{customerName}</p>
      </span>
      <span className='md:text-base font-medium flex  items-center gap-1.5 text-sm'>
        Check
        <p className='font-bold text-[#FFA16C]'>{customerEmail}</p> for your
        invoice
      </span>
      <div className='flex items-center justify-center gap-x-5'>
        <Link className='' href='/'>
          <Button className='bg-blue-500 hover:bg-blue-600'>Go Home</Button>
        </Link>

        <Link className='' href='/'>
          <Button variant='outline'>Contact Support</Button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessMessage;
