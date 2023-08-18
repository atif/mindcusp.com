"use client";
import React from "react";

function Footer() {
  return (
    <div className="flex bg-primary-50 w-full px-24">
      <div className=" my-10 flex flex-col space-y-8">
        <div className="flex flex-col space-y-4">
          <div>
            <div className="font-medium text-xl uppercase">Call Us</div>
            <div>+92 335 4880 555</div>
          </div>
          <div>
            <div className="font-medium text-xl uppercase">Email Us</div>
            <div>info@mindcusp.com</div>
          </div>
        </div>
        <div>
          COPYRIGHT &copy; {new Date().getFullYear()} &mdash;{" "}
          <span className="text-primary-600 font-semibold">mindcusp</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
