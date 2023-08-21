"use client";
import { Button, Input, Textarea } from "@chakra-ui/react";
import Image from "next/image";

function Contact() {
  return (
    <div className="flex flex-col space-y-16">
      <div className="font-bold text-4xl text-center my-5">Contact us</div>
      <div className="flex lg:space-x-24 lg:flex-row sm:flex-col sm:space-y-16 md:space-y-0">
        <Image
          src="/landing/undraw_mailbox_re_dvds.svg"
          height={400}
          width={400}
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
          <div className="flex flex-col space-y-5 py-5">
            <Input
              focusBorderColor={"brand.300"}
              type="name"
              borderRadius="full"
              size={"lg"}
              placeholder={"Please enter your name"}
            />

            <Input
              focusBorderColor={"brand.300"}
              type="email"
              borderRadius="full"
              size={"lg"}
              placeholder={"Please enter your email address"}
            />

            <Input
              focusBorderColor={"brand.300"}
              type="subject"
              borderRadius="full"
              size={"lg"}
              placeholder={"Please choose a subject"}
            />

            <Textarea
              borderRadius="lg"
              focusBorderColor={"brand.300"}
              size={"lg"}
              placeholder={"Write your message here"}
            />

            <Button
              size="lg"
              borderRadius={"full"}
              background="brand.300"
              color="white"
              _hover={{ background: "brand.400" }}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
