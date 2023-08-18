"use client";
import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import scrollTo from "next/router";
import Image from "next/image";
import { Link, animateScroll } from "react-scroll";

const navLinks = [
  {
    name: "Home",
    section: "home",
  },
  {
    name: "Case Studies",
    section: "case-studies",
  },
  {
    name: "Technology Stack",
    section: "tech-stack",
  },
  {
    name: "Contact us",
    section: "contact-us",
  },
];

function Navbar() {
  useEffect(() => {
    animateScroll.scrollTo(150);
  }, []);

  return (
    <nav className="z-10 w-full items-center justify-between text-sm lg:flex sticky top-0 p-5 px-24 bg-white">
      <Link
        href="/"
        className="flex space-x-2 items-center font-poppins text-2xl font-semibold tracking-wide text-gray-700"
      >
        <Image src="/mindcusp-logo.svg" height={250} width={250} alt={""} />
        <span>mindcusp</span>
      </Link>

      <nav className="font-inter flex text-base tracking-wide space-x-1">
        {navLinks.map((link) => {
          return (
            <Link
              key={link.name}
              activeClass="text-primary-600 font-semibold bg-primary-100"
              smooth
              spy
              duration={30}
              to={link.section}
              className={`hover:bg-primary-100 font-medium hover:text-primary-600 rounded-full p-2 px-3 tracking-wide cursor-pointer`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </nav>
  );
}

export default Navbar;
