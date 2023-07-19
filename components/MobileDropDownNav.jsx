"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { ChefHat, Boxes, Home, Menu, Package, ScrollText } from "lucide-react";
import Link from "next/link";

const MobileDropDownNav = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='icon'>
            <Menu size={22} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-52 ml-5'>
          <DropdownMenuGroup className='space-y-1 font-semibold'>
            <DropdownMenuItem className='cursor-pointer'>
              <Home className='mr-2 h-5 w-5' />
              <Link href='/'>Home</Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <ChefHat  className='mr-2 h-4 w-4' />
              <Link href='/menu'>Menu</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Boxes className='mr-2 h-4 w-4' />
              <Link href='/orders'>My Orders</Link>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <ScrollText  className='mr-2 h-4 w-4' />
              <Link href='/history'>History</Link>
            </DropdownMenuItem>

          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default MobileDropDownNav;
