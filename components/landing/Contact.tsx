"use client";
import React from "react";
import Image from "next/image";
import { TextInput } from "@mantine/core";

function Contact() {
  return (
    <div className="flex flex-col space-y-16">
      <div className="font-bold text-4xl text-center my-5">Contact us</div>

      <div className="flex space-x-24">
        <Image
          src="/landing/undraw_contact_us_re_4qqt.svg"
          height={600}
          width={600}
          alt={""}
        />
        <div className="flex flex-col space-y-5 justify-center">
          <div className="text-3xl font-semibold">
            Let&apos;s get started with your project
          </div>
          <div className="text-2xl leading-relaxed">
            Whether you&apos;re seeking to create something innovative and fresh
            or require our assistance with a project in progress, we are here to
            support you. Complete the contact form provided below to inform us
            about the ways we can be of assistance.
          </div>
          <form>
            <div className="flex flex-col space-y-5 py-5">
              <TextInput placeholder="Enter your name" radius="xl" size="lg" />
              <TextInput
                placeholder="Enter your email address"
                radius="xl"
                size="lg"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
