"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "./ui/button";
import { ChefHat, Boxes, Home, Menu, ScrollText } from "lucide-react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const routes = [
  {
    href: `/`,
    label: "Home",
    icon: <Home className='mr-2 h-5 w-5' />,

  },
  {
    href: `/menu`,
    label: "Menu",
    icon: <ChefHat className='mr-2 h-4 w-4' />,

  },
  {
    href: `/orders`,
    label: "My Orders",
    icon: <Boxes className='mr-2 h-4 w-4' />,
  },
  {
    href: `/history`,
    label: "History",
    icon: <ScrollText className='mr-2 h-4 w-4' />,

  },
];
const MobileDropDownNav = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Button variant='icon'>
            <Menu size={22} />
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <SheetHeader className='flex  justify-start'>
            <SheetTitle>
              {" "}
              <Link
                href='/'
                className='md:text-3xl text-2xl font-bold flex items-center pr-5'>
                <span className='text-[#FFA16C]'>Purr&apos;</span>Coffee
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className='flex flex-col space-y-2 mt-5'>
            {routes.map((route) => (
              <Link
                href={route.href}
                key={route.label}
                className={`hover:bg-[#FFA16C]/30 ${
                  pathname === route.href ? "bg-[#FFA16C]/30 text-[#FFA16C]/80" : "text-black"
                } hover:text-[#FFA16C]/80 font-semibold p-2 rounded-md`}>
                <div className='flex items-center text-xl'>
                  {route.icon}
                  {route.label}
                </div>
              </Link>
            ))}
          </div>
          <SheetFooter className='absolute bottom-0 pb-5'>
            <UserButton afterSignOutUrl='/sign-in' />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileDropDownNav;
