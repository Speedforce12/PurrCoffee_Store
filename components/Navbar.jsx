import Link from "next/link";
import NavItems from "./NavItems";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import MobileDropDownNav from "./MobileDropDownNav";

const Navbar = () => {
  return (
    <header className='border-b border-gray-300 h-14 md:px-8 px-5 flex items-center justify-between shadow-sm mx-auto'>
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

      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton afterSignOutUrl='/sign-in' />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </header>
  );
};

export default Navbar;
