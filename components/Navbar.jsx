"use client";

import Link from "next/link";
import NavItems from "./NavItems";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import MobileDropDownNav from "./MobileDropDownNav";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/zustand";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className='border-b border-gray-300 h-14 md:px-8 px-5 flex items-center justify-between shadow-sm mx-auto bg-white'>
      <div className='md:hidden block'>
        <MobileDropDownNav />
      </div>
      <div className='flex items-center justify-between'>
        <Link
          href='/'
          className='md:text-3xl text-2xl font-bold flex items-center pr-5'>
          <span className='text-[#FFA16C]'>Purr&apos;</span>Coffee
        </Link>
        <NavItems />
      </div>

      <div className='flex items-center gap-x-4'>
        <div className='hidden md:block'>
          <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton afterSignOutUrl='/sign-in' />
          </SignedIn>
          <SignedOut>
            {/* Signed out users get sign in button */}
            <SignInButton />
          </SignedOut>
        </div>
        <div className='relative py-2'>
          <div className='bottom-0 absolute  right-0'>
            <p className='flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white'>
              {cart.length}
            </p>
          </div>
          <Link
            href='/cart'
            className='bg-black px-2 py-2 flex rounded-xl w-12'>
            <ShoppingCart size={20} className='text-white' />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
