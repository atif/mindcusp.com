"use client";
import React from "react";
import Image from "next/image";
import { TextInput } from "@mantine/core";

function Contact() {
  return (
    <div className="flex flex-col space-y-5">
      <div className="font-bold text-4xl text-center my-5">Contact us</div>

      <div className="flex space-x-8">
        <Image src="/landing/contact-us.svg" height={600} width={600} />
        <div className="flex flex-col space-y-8 justify-center">
          <div className="text-3xl font-semibold">
            Let's get started with your project
          </div>
          <div className="text-2xl">
            Whether you're seeking to create something innovative and fresh or
            require our assistance with a project in progress, we are here to
            support you. Complete the contact form provided below to inform us
            about the ways we can be of assistance.
          </div>
        </div>
      </div>

      <div>
        <form>
          <TextInput placeholder="Enter your name" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
