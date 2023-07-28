"use client"

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/lib/zustand";

const CartItem = ({ product }) => {
    const { updateQuantity, removeProduct } = useCart();

  return (
    <div className='h-36 flex  items-center '>
      <div className='relative aspect-square pr-3'>
        <Image
          src={product.image}
          alt={product.name}
          width={130}
          height={200}
          className='object-contain'
        />
      </div>

      <div className='flex items-center justify-between h-full w-full relative'>
        <div className='flex flex-col  h-full'>
          <p>{product.name}</p>
          <span className='font-semibold text-black'>${product.price}</span>

          <div className='flex  w-20 gap-x-2 mt-auto pb-3'>
            <Button
              onClick={() => updateQuantity(product.id, "decrease")}
              className='rounded-full h-8 w-8 flex items-center justify-center bg-gray-200 shadow p-2 hover:bg-gray-300'
              variant='outline'>
              <Minus size={22} />
            </Button>
            <input
              readOnly
              type='text'
              name=''
              value={product.quantity}
              className='w-12 h-8 focus:border-0 focus:ring-0 outline-none flex items-center justify-between border p-2 rounded-md '
            />
            <Button
              onClick={() => updateQuantity(product.id, "increase")}
              className='rounded-full h-8 w-8 flex items-center justify-center bg-gray-200 shadow p-2 hover:bg-gray-300'
              variant='outline'>
              <Plus className='' />
            </Button>
          </div>
        </div>
        <button
          className='rounded-full h-10 w-10 absolute top-0 right-0'
          onClick={() => removeProduct(product.id)}>
          <X size={20} className='text-red-600' />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
