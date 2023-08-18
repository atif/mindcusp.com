import React from "react";
import Image from "next/image";

function Home() {
  return (
    <>
      <Image src="/landing/outer-space.svg" height={400} width={400} />
      <div className="m-24 text-3xl text-center">
        We are a team of developers who are passionate about crafting scalable
        software. Our goal is to create flexible, innovative products that can
        be easily maintained.
      </div>
    </>
  );
}

export default Home;
