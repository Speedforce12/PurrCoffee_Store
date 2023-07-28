import { Plus, XCircle } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const EmptyCart = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full border rounded-md h-64'>
      <div className='text-center flex flex-col items-center space-y-2'>
        <XCircle size={30} />
        <h2 className='font-bold text-xl tracking-wide'>No Products added</h2>
        <p className='text-sm text-gray-500'>Add products to your cart</p>
        <Link href='/menu'>
          <Button>
            <Plus size={20} className='mr-1' /> Add products
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
