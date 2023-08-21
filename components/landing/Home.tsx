"use client";
import { Button } from "@chakra-ui/react";
import { useScroll } from "framer-motion";
import Image from "next/image";
import { Link } from "react-scroll";

function Home() {
  const scroll = useScroll();

  return (
    <>
      <Image
        src="/landing/undraw_outer_space_re_u9vd.svg"
        height={400}
        width={400}
        alt={""}
      />
      <div className="flex flex-col items-center space-y-10">
        <div className="text-5xl font-bold text-center">
          Let&apos;s take your business idea
          <br /> to the next level !
        </div>
        <div className="mx-24 text-2xl text-center leading-relaxed">
          <span className="text-3xl font-semibold">
            We are a team of developers who are passionate about <br />
            crafting scalable web applications.
          </span>
          <br />
          <br />
          <div>
            Our goal is to help early stage startups to build their MVPs that
            <br />
            can be easily maintained. Our team works with you on your business
            <br />
            idea right from the start and make sure that we launch it in minimal
            time.
          </div>
        </div>
        <Button
          size="lg"
          borderRadius={"full"}
          width={"2xl"}
          background="brand.300"
          color="white"
          _hover={{ background: "brand.400" }}
        >
          <Link
            activeClass="text-primary-600 font-semibold bg-primary-100"
            smooth
            spy
            duration={30}
            to="contact-us"
          >
            Get in touch
          </Link>
        </Button>
      </div>
    </>
  );
}

export default Home;
