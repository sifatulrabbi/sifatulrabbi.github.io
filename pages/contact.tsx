import {NextPage} from "next";
import Link from "next/link";
import React from "react";
import {ContactMeForm} from "../features";

const Contact: NextPage = () => {
    return (
        <section className="mt-[60px] md:grid md:grid-cols-2 gap-6 min-h-[75vh]">
            <div>
                <div className="mb-6">
                    <h3 className="mb-2">Contact me</h3>
                    <p className="text-sm">
                        I am always excited about new ideas meeting with new
                        people.
                    </p>
                </div>
                <div className="flex flex-row flex-wrap gap-2 items-center">
                    <Link href="/">
                        <a className="font-primary font-medium underline hover:text-primary p-1">
                            Upwork
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="font-primary font-medium underline hover:text-primary p-1">
                            Fiverr
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="font-primary font-medium underline hover:text-primary p-1">
                            Linked In
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="font-primary font-medium underline hover:text-primary p-1">
                            Twitter
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="font-primary font-medium underline hover:text-primary p-1">
                            Facebook
                        </a>
                    </Link>
                </div>
            </div>
            <ContactMeForm />
        </section>
    );
};

export default Contact;
