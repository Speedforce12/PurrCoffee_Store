"use client";

import { useCart } from "@/lib/zustand";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

const QuantityCounter = ({ product, selectedSize }) => {
  const [mounted, setMounted] = useState(false);
  const { addToCart, updateQuantity } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleAddToCart = () => {
    const item = {
      ...product,
      size: selectedSize,
    };

    addToCart(item);
  };

  return (
    <div className='flex py-2.5 gap-2'>

        <Button
          onClick={handleAddToCart}
          className='text-[#FFA16C] border-[#FFA16C] rounded-md w-full hover:bg-[#FFA16C] hover:text-white'
          variant='outline'>
          Add to Cart
        </Button>
    </div>
  );
};

export default QuantityCounter;
