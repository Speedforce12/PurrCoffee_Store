"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();

  const routes = [
    {
      href: `/`,
      label: "Home",
      active: pathname === `/`,
    },
    {
      href: `/menu`,
      label: "Menu",
      active: pathname === `/menu`,
    },
    {
      href: `/orders`,
      label: "My Orders",
      active: pathname === `/orders`,
    },
    {
      href: `/history`,
      label: "History",
      active: pathname === `/history`,
    },
  ];

  return (
    <nav className='md:flex gap-x-4 items-center justify-between hidden'>
      {routes.map((route, i) => (
          <Link href={route.href} key={i} className={`font-semibold text-lg dark:text-white hover:bg-gray-100 transition-colors duration-300 dark:hover:bg-neutral-100 hover:text-primary p-1 rounded-md ${route.active ? 'text-[#FFA16C]' : 'text-muted-foreground'}`}>
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
