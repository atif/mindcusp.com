"use client";
import Image from "next/image";
import { useEffect } from "react";
import { Link as ScrollLink, animateScroll } from "react-scroll";

const navLinks = [
  {
    name: "Home",
    section: "home",
    offset: -200,
  },
  {
    name: "Technology Stack",
    section: "tech-stack",
    offset: 0,
  },
  {
    name: "Contact us",
    section: "contact-us",
    offset: 0,
  },
];

function Navbar() {
  useEffect(() => {
    animateScroll.scrollTo(100);
  }, []);

  return (
    <nav className="z-10 w-full items-center justify-between text-sm flex sticky top-0 p-5 lg:px-24 bg-white">
      <ScrollLink
        smooth
        spy
        duration={30}
        to={"home"}
        className="cursor-pointer flex space-x-2 items-center font-poppins text-2xl font-semibold tracking-wide text-gray-700"
      >
        <Image
          src="/mindcusp-logo.svg"
          height={45}
          width={45}
          alt={"mindcusp logo"}
        />
        <span>mindcusp</span>
      </ScrollLink>

      <nav className="hidden font-inter lg:flex text-base tracking-wide lg:space-x-1 sm:flex-col sm:space-y-1 lg:space-y-0 lg:flex-row">
        {navLinks.map((link) => {
          return (
            <ScrollLink
              key={link.name}
              activeClass="text-primary-600 font-semibold bg-primary-100"
              smooth
              spy
              duration={30}
              offset={link.offset}
              to={link.section}
              className={`hover:bg-primary-100 font-medium hover:text-primary-600 rounded-full p-2 px-3 tracking-wide cursor-pointer`}
            >
              {link.name}
            </ScrollLink>
          );
        })}
      </nav>

      <nav className="flex font-inter lg:hidden text-base tracking-wide lg:space-x-1 sm:flex-col sm:space-y-1 lg:space-y-0 lg:flex-row">
        {navLinks.map((link) => {
          return (
            <ScrollLink
              key={link.name}
              activeClass="text-primary-600 font-semibold bg-primary-100"
              smooth
              spy
              duration={30}
              offset={link.offset}
              to={link.section}
              className={`hover:bg-primary-100 font-medium hover:text-primary-600 rounded-full p-2 px-3 tracking-wide cursor-pointer`}
            >
              {link.name}
            </ScrollLink>
          );
        })}
      </nav>
    </nav>
  );
}

export default Navbar;
