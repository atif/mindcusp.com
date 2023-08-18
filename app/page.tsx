import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contact from "@/components/landing/Contact";
import Home from "@/components/landing/Home";
import TechStack from "@/components/landing/TechStack";
import Work from "@/components/landing/Work";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <main className="font-poppins flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="flex flex-col px-24 space-y-10 items-center">
        <div id="home" className="h-screen flex items-center pb-48">
          <Home />
        </div>

        <div id="case-studies" className="h-screen flex items-center">
          <Work />
        </div>

        <div id="tech-stack" className="h-screen flex items-center">
          <TechStack />
        </div>

        <div id="contact-us" className="h-screen flex items-center">
          <Contact />
        </div>
      </div>

      <Footer />
    </main>
  );
}
