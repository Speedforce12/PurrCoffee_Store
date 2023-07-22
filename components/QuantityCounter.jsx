import React from 'react'
import { Button } from './ui/button'
import { Minus, Plus } from 'lucide-react';

const QuantityCounter = () => {
    return (
      <div className='flex items-center justify-between py-2.5 gap-2'>
        <div className='flex  w-20 gap-x-2'>
          <Button
            className='rounded-full h-8 w-8 flex items-center justify-center bg-gray-200 shadow p-2 hover:bg-gray-300'
            variant='outline'>
            <Minus size={22} />
          </Button>
                <input readOnly type='text' name='' value={25} className='w-12 h-8 focus:border-0 focus:ring-0 outline-none flex items-center justify-between border p-2 rounded-md' />
          <Button
            className='rounded-full h-8 w-8 flex items-center justify-center bg-gray-200 shadow p-2 hover:bg-gray-300'
            variant='outline'>
            <Plus  className=''/>
          </Button>
        </div>
        <div className='md:w-3/5'>
                <Button
            className='text-[#FFA16C] border-[#FFA16C] rounded-full w-full hover:bg-[#FFA16C] hover:text-white'
            variant='outline'>
            Add to Cart
          </Button>
        </div>
      </div>
    );
}

export default QuantityCounter