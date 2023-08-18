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
        <section id="home" className="h-screen flex items-center">
          <Home />
        </section>

        <section id="case-studies" className="h-screen flex items-center">
          <Work />
        </section>

        <section id="tech-stack" className="h-screen flex items-center">
          <TechStack />
        </section>

        <section id="contact-us" className="h-screen flex items-center">
          <Contact />
        </section>
      </div>

      <Footer />
    </main>
  );
}
