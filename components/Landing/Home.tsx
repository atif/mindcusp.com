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
        <div className="sm:text-3xl lg:text-5xl font-bold text-center">
          Let&apos;s take your business idea
          <br /> to the next level !
        </div>
        <div className="flex flex-col items-center space-y-5 lg:mx-24 text-2xl text-center leading-relaxed">
          <span className="sm:text-2xl lg:text-3xl font-semibold">
            We are a team of developers who are passionate about <br />
            crafting scalable web applications.
          </span>
          <div>
            We strive to help early stage startups in building and scaling their
            MVPs. Our team partners with you right from the start to ensure a
            fast time-to-market for your business idea.
          </div>
        </div>
        <div className="sm:w-full lg:w-2/3">
          <Link
            activeClass="text-primary-600 font-semibold bg-primary-100"
            smooth
            spy
            duration={30}
            offset={-80}
            to="contact-us"
          >
            <Button
              size="lg"
              borderRadius={"full"}
              width={"full"}
              background="brand.300"
              color="white"
              _hover={{ background: "brand.400" }}
            >
              Get in touch
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
