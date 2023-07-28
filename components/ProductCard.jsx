"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import QuantityCounter from "./QuantityCounter";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState("");
  return (
    <Card className=''>
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
            <div className='flex items-center font-semibold'>
              <h3 className='text-slate-800'>{product.name}</h3>
              <p className='ml-2 text-[#FFA16C]'>${product.price}</p>
            </div>

            <p className='text-sm text-gray-500'>
              {product.description.substring(0, 150)}...
            </p>

            <div className='flex items-center justify-between mt-auto'>
              <p className='font-medium text-black'>Size:</p>
              <Button
                onClick={() => setSelectedSize("small")}
                variant='outline'
                className={`rounded-full font-semibold  text-base`}>
                S
              </Button>
              <Button
                onClick={() => setSelectedSize("medium")}
                variant='outline'
                className={`rounded-full font-semibold  text-base`}>
                M
              </Button>
              <Button
                onClick={() => setSelectedSize("large")}
                variant='outline'
                className={`rounded-full font-semibold  text-base`}>
                L
              </Button>
            </div>
          </div>
        </div>
        <QuantityCounter product={product} selectedSize={selectedSize} />
      </CardContent>
    </Card>
  );
};

export default ProductCard;
