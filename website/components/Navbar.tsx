"use client";
import React, { useState } from "react";
import Link from "next/link";
import scrollTo from "next/router";

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
    <nav className="font-inter flex text-base tracking-wide space-x-1">
      {navLinks.map((link) => {
        return (
          <>
            <Link
              href={`#${link.section}`}
              onClick={() => {
                scrollTo(link.section, 50);
                setActiveLink(link.name);
              }}
              className={`${
                activeLink == link.name
                  ? "text-primary-600 font-semibold bg-primary-100"
                  : ""
              } hover:bg-primary-100 hover:text-primary-600 rounded-full p-2 px-3 tracking-wide`}
            >
              {link.name}
            </Link>
          </>
        );
      })}
    </nav>
  );
}

export default Navbar;
