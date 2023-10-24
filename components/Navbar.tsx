"use client";
import NavDrawer from "@/components/NavDrawer";
import NavLinks from "@/components/NavLinks";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  return (
    <nav className="bg-primary-50 z-10 w-full items-center justify-between text-sm flex sticky top-0 p-5 lg:px-24">
      <ScrollLink
        smooth
        spy
        duration={30}
        to={"home"}
        className="cursor-pointer flex space-x-2 items-center font-poppins text-2xl font-semibold tracking-wide text-gray-700"
      >
        <Image
          src="/mindcusp-logo.svg"
          height={50}
          width={50}
          alt={"mindcusp logo"}
        />
        <span>mindcusp</span>
      </ScrollLink>

      <nav className="hidden font-inter lg:flex text-base tracking-wide lg:space-x-1 sm:flex-col sm:space-y-1 lg:space-y-0 lg:flex-row">
        <NavLinks />
      </nav>

      <nav className="flex font-inter lg:hidden text-base tracking-wide lg:space-x-1 sm:flex-col sm:space-y-1 lg:space-y-0 lg:flex-row">
        <NavDrawer />
      </nav>
    </nav>
  );
}

export default Navbar;
