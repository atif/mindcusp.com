"use client";
import ContactForm from "@/components/Landing/ContactForm";
import Image from "next/image";

function Contact() {
  return (
    <div className="flex flex-col space-y-16 mb-16">
      <div className="font-bold text-4xl text-center my-5 tracking-wider">
        Contact us
      </div>
      <div className="flex lg:space-x-24 lg:flex-row sm:flex-col sm:space-y-16 md:space-y-0">
        <Image
          src="/landing/undraw_mailbox_re_dvds.svg"
          height={400}
          width={400}
          alt={""}
        />
        <div className="flex flex-col space-y-5 justify-center">
          <div className="text-3xl font-semibold">
            Let&apos;s get started with your project
          </div>
          <div className="text-2xl leading-relaxed">
            Whether you&apos;re seeking to create something innovative and fresh
            or require our assistance with a project in progress, we are here to
            support you. Please complete the form below to share how we can be
            of assistance.
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
