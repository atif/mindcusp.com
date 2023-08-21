import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Contact from "@/components/landing/Contact";
import Home from "@/components/landing/Home";
import TechStack from "@/components/landing/TechStack";

export default function Landing() {
  return (
    <main className="font-poppins flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="flex flex-col sm:px-8 lg:px-24 sm:space-y-24 lg:space-y-10 items-center">
        <section
          id="home"
          className="h-screen flex items-center sm:pt-10 md:pt-0 lg:flex-row sm:flex-col sm:space-y-5 lg:space-y-0"
        >
          <Home />
        </section>

        <section
          id="tech-stack"
          className="flex items-center sm:pt-10 md:pt-0 lg:flex-row sm:flex-col sm:space-y-5 lg:space-y-0"
        >
          <TechStack />
        </section>

        <section
          id="contact-us"
          className="flex items-center sm:pt-10 md:pt-0 lg:flex-row sm:flex-col sm:space-y-5 lg:space-y-0"
        >
          <Contact />
        </section>
      </div>

      <Footer />
    </main>
  );
}
