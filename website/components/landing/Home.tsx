import React from "react";
import Image from "next/image";

function Home() {
  return (
    <>
      <Image src="/landing/outer-space.svg" height={400} width={400} alt={""} />
      <div className="m-24 text-3xl text-center leading-relaxed">
        We are a team of developers who are passionate about crafting scalable
        web based software. Our goal is to help early stage startups to build
        their MVPs that can be easily maintained.
      </div>
    </>
  );
}

export default Home;
