import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className='flex flex-col items-center h-screen relative'>
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-7'>
        <div className='relative aspect-square'>
          <Image
            src='/cup_coffee.png'
            alt='home image'
            fill
            priority={true}
            sizes='(min-width: 1360px) 606px, (min-width: 640px) 45.71vw, calc(100vw - 40px)'
            className='object-center'
          />
        </div>

        <div className='flex flex-col justify-start px-5'>
          <span className='sm:text-6xl text-4xl sm:pt-12 font-semibold font-serif text-[#f28749]'>
            Enjoy Your <br /> Morning Coffee
          </span>
          <p className='sm:my-7 my-4 text-sm text-[#f86814b3]'>
            Boost your productivity and build your mood with a glass of coffee
            in the morning, 100% natural from the garden
          </p>

          <Link href='/menu' className='group w-36'>
            <div className='rounded-full px-1 h-11 flex bg-[#FFA16C]  items-center justify-between group-hover:bg-white group-hover:border transition-colors duration-200'>
              <p className='ml-1 text-white font-medium group-hover:text-[#FFA16C] transition-colors duration-200'>
                {" "}
                Order Now
              </p>
              <div className='h-10 w-10 bg-white rounded-full flex items-center justify-center group-hover:bg-[#FFA16C] transition-colors duration-200'>
                <MoveUpRight
                  size={20}
                  className='group-hover:text-white transition-colors duration-200'
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row sm:items-center mt-10 sm:justify-between w-full'>
        <div className='flex items-center justify-between w-2/5 gap-8 text-4xl'>
          <div className=''>
            <p className=' text-[#f28749] font-medium'>1k+</p>
            <p className='text-base sm:text-lg sm:ml-2 ml-1.5 text-[#f28749d2] font-normal'>
              Reviews
            </p>
          </div>
          <div className=''>
            <p className=' text-[#f28749] font-medium'>3k+</p>
            <p className='text-base sm:text-lg sm:ml-2 ml-1.5 text-[#f28749d2] font-normal whitespace-nowrap'>
              Best Sell
            </p>
          </div>
          <div className=''>
            <p className=' text-[#f28749] font-medium'>150+</p>
            <p className='text-base sm:text-lg sm:ml-2 ml-1.5 text-[#f28749d2] font-normal'>
              Menu
            </p>
          </div>
        </div>
        <div className='mt-10 sm:mt-0 ml-auto object-right-bottom'>
          <Image
            src='/coffee_falling.png'
            width={350}
            height={375}
            alt='coffee falling'
            className="w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
}
