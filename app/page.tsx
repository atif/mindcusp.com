import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contact from "@/components/landing/Contact";
import Home from "@/components/landing/Home";
import TechStack from "@/components/landing/TechStack";

export default function Landing() {
  return (
    <main className="font-poppins flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="flex flex-col px-24 space-y-10 items-center">
        <section id="home" className="h-screen flex items-center">
          <Home />
        </section>

        <section id="tech-stack" className="h-screen flex items-center pt-20">
          <TechStack />
        </section>

        <section id="contact-us" className="h-screen flex items-center pt-20">
          <Contact />
        </section>
      </div>

      <Footer />
    </main>
  );
}
