import Footer from "@/components/Footer";
import Contact from "@/components/Landing/Contact";
import Home from "@/components/Landing/Home";
import TechStack from "@/components/Landing/TechStack";
import Navbar from "@/components/Navbar";

export default function Landing() {
  return (
    <main className="font-poppins flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <div className="flex flex-col sm:px-8 lg:px-24 sm:space-y-24 lg:space-y-10 items-center">
        <section
          id="home"
          className="lg:pt-48 lg:pb-16 flex items-center sm:pt-10 md:pt-0 lg:flex-row sm:flex-col sm:space-y-5 lg:space-y-0"
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
