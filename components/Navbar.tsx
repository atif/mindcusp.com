"use client";
import React, { useState } from "react";
import Link from "next/link";
import scrollTo from "next/router";
import Image from "next/image";

const navLinks = [
  {
    name: "Home",
    section: "home",
  },
  {
    name: "Our Work",
    section: "work",
  },
  {
    name: "Tech stack",
    section: "tech-stack",
  },
  {
    name: "Contact us",
    section: "contact-us",
  },
];

function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav className="z-10 w-full items-center justify-between text-sm lg:flex sticky top-0 p-5 px-24 bg-white">
      <Image src="/mindcusp-logo.svg" height={250} width={250} alt={""} />
      <Link
        href="/"
        className="font-poppins text-2xl font-semibold tracking-wide text-gray-700"
      >
        mindcusp
      </Link>

      <nav className="font-inter flex text-base tracking-wide space-x-1">
        {navLinks.map((link) => {
          return (
            <Link
              key={link.name}
              href={`#${link.section}`}
              onClick={() => {
                scrollTo(link.section, 50);
                setActiveLink(link.name);
              }}
              className={`${
                activeLink === link.name
                  ? "text-primary-600 font-semibold bg-primary-100"
                  : ""
              } hover:bg-primary-100 hover:text-primary-600 rounded-full p-2 px-3 tracking-wide`}
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
