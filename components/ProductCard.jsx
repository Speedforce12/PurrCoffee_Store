import Image from "next/image";
import React from "react";
import { Card, CardContent } from "./ui/card";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <CardContent className="gap-3 p-3 w-full max-w-sm flex">
        <div className='relative  h-36 rounded-md bg-zinc-200 p-2 w-28'>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className='object-contain'
          />
        </div>
        <div className='flex-col flex flex-1'>
          <div className='flex items-center font-semibold'>
            <h3 className='text-slate-800'>{product.name}</h3>
            <p className='ml-2 text-[#FFA16C]'>${product.price}</p>
          </div>

          <p className='text-sm text-gray-500'>{product.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
