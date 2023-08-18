import Navbar from "@/components/Navbar";
import Contact from "@/components/landing/Contact";
import Home from "@/components/landing/Home";
import TechStack from "@/components/landing/TechStack";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <main className="font-poppins flex min-h-screen flex-col items-center justify-between px-48 flex-wrap ">
      <div className="z-10 w-full items-center justify-between text-sm lg:flex sticky top-0 p-5 bg-white">
        <Image src="/mindcusp-logo.svg" height={250} width={250} alt={""} />
        <Link
          href="/"
          className="font-poppins text-2xl font-semibold tracking-wide text-gray-700"
        >
          mindcusp
        </Link>

        <Navbar />
      </div>
      <div id="home" className="h-screen flex items-center">
        <Home />
      </div>

      <div id="work" className="h-screen">
        work
      </div>

      <div id="tech-stack" className="h-screen flex items-center">
        <TechStack />
      </div>

      <div id="contact-us" className="h-screen flex items-center">
        <Contact />
      </div>

      <div>Footer</div>
    </main>
  );
}
