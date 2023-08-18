"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@mantine/core";

function Home() {
  return (
    <>
      <Image
        src="/landing/undraw_outer_space_re_u9vd.svg"
        height={400}
        width={400}
        alt={""}
      />
      <div className="m-24 text-2xl text-center leading-relaxed">
        <span className="text-3xl font-semibold">
          We are a team of developers who are passionate about crafting scalable
          web based software.
        </span>
        <br />
        <br />
        Our goal is to help early stage startups to build their MVPs that can be
        easily maintained. Our team works with you on your business idea from
        start and guide you on how to launch it in minimal time.
        <Button size="lg" radius={"xl"}>
          Get a quote
        </Button>
      </div>
    </>
  );
}

export default Home;
