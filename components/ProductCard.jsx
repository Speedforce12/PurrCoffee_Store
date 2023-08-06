"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useState } from "react";
import CartButton from "./CartButton";

const ProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("");

  const Sizes = [
    {
      id: 1,
      label: "S",
      value: "small",
    },
    {
      id: 2,
      label: "M",
      value: "medium",
    },
    {
      id: 3,
      label: "L",
      value: "large",
    },
  ];

  console.log(selectedSize);
  return (
    <Card>
      <CardContent className='p-3'>
        <div className='gap-3 w-full max-w-md flex'>
          <div className='relative  md:h-44 rounded-md bg-zinc-200 p-2 w-28'>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className='object-contain'
            />
          </div>

          <div className='flex-col justify-between flex flex-1'>
            <div className='flex items-center font-semibold justify-between'>
              <h3 className='text-slate-800'>{product.name}</h3>
              <p className='ml-2 text-[#FFA16C]'>${product.price}</p>
            </div>

            <p className='text-sm text-gray-500'>
              {product.description.substring(0, 150)}...
            </p>

            <div className='flex items-center justify-between mt-auto'>
              <p className='font-medium text-black'>Size:</p>
              {Sizes.map((size) => (
                <Button
                  key={size.id}
                  onClick={() => setSelectedSize(size.value)}
                  variant='outline'
                  className={`rounded-full font-semibold  text-base hover:bg-[#FFA16C] hover:text-white ${
                    selectedSize === size.value && "bg-[#FFA16C] text-white"
                  }`}>
                  {size.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
        <CartButton product={product} selectedSize={selectedSize} />
      </CardContent>
    </Card>
  );
};

export default ProductCard;
