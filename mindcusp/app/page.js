import Navbar from "@/components/common/Navbar";
import TechStack from "@/components/landing/TechStack";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-poppins flex min-h-screen flex-col items-center justify-between px-48 flex-wrap ">
      <div className="z-10 w-full items-center justify-between text-sm lg:flex sticky top-0 p-5 bg-white">
        <Link
          href="/"
          className="font-poppins text-2xl font-semibold tracking-wide text-gray-700"
        >
          mindcusp
        </Link>

        <Navbar />
      </div>
      <div id="home" className="h-screen">
        <div className="m-24 text-3xl text-center">
          We are a small team of developers who are passionate about crafting
          scalable software. Our goal is to create flexible, innovative products
          that can be easily maintained.
        </div>
      </div>

      <div id="work" className="h-screen">
        work
      </div>

      <div id="tech-stack" className="h-screen flex items-center">
        <TechStack />
      </div>

      <div id="contact-us" className="h-screen">
        Reach out to us If you aspire to be equipped with the latest and most
        advanced digital solutions for your customers in compliance with HIPAA
        regulations and work with the best software engineering field has to
        offer - contact us today.
      </div>

      <div>Footer</div>
    </main>
  );
}
