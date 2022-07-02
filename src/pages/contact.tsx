import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Head } from "../components";
import { ContactMeForm } from "../features";

const Contact: NextPage = () => {
  return (
    <>
      <Head title="Contact" />
      <section className="mt-[60px] lg:grid lg:grid-cols-2 gap-6 min-h-[75vh] theme-styles">
        <div>
          <div className="mb-6">
            <h3 className="mb-2 opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.4s_forwards]">
              Contact me
            </h3>
            <p className="text-sm opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.6s_forwards]">
              I am always excited about new ideas and meeting with new people.
            </p>
          </div>
          <div className="flex flex-row flex-wrap gap-2 items-center">
            <Link href="#">
              <a
                target="_blank"
                className="font-primary font-medium underline hover:text-primary p-1 opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.8s_forwards]"
              >
                Upwork
              </a>
            </Link>
            <Link href="https://fiverr.com/temujins">
              <a
                target="_blank"
                className="font-primary font-medium underline hover:text-primary p-1 opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_0.9s_forwards]"
              >
                Fiverr
              </a>
            </Link>
            <Link href="https://linkedin.com/in/temujins">
              <a
                target="_blank"
                className="font-primary font-medium underline hover:text-primary p-1 opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_1.0s_forwards]"
              >
                Linked In
              </a>
            </Link>
            <Link href="https://twitter.com/sifatul_rabbi">
              <a
                target="_blank"
                className="font-primary font-medium underline hover:text-primary p-1 opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_1.1s_forwards]"
              >
                Twitter
              </a>
            </Link>
            <Link href="https://facebook.com/ttemujins">
              <a
                target="_blank"
                className="font-primary font-medium underline hover:text-primary p-1 opacity-0 translate-y-4 animate-[textSlideUp_0.5s_ease_1.2s_forwards]"
              >
                Facebook
              </a>
            </Link>
          </div>
        </div>
        <ContactMeForm />
      </section>
    </>
  );
};

export default Contact;
