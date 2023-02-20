import SectionContainer from "@/components/SectionContainer";
import Form from "./Form";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

const ContactSection: React.FC = () => {
  return (
    <SectionContainer id="contactSection">
      <article className="format text-center mb-[6vh]">
        <h1>
          Get in <span className="text-blue-600">Touch</span>
        </h1>
        <p className="lead">Let&apos;s discuss our next project!</p>
      </article>

      <div className="grid grid-cols-1 md:grid-cols-[0.4fr_0.6fr] border-2 border-blue-600 rounded-xl p-4 w-full md:max-w-[90vw] lg:max-w-[76vw] xl:max-w-[66vw] gap-6">
        <div className="w-full flex flex-col justify-between bg-blue-900 rounded-lg relative format format-invert format-h3:font-medium format-a:font-normal format-a:no-underline format-p:mb-0 h-full">
          <div>
            <article className="p-4">
              <h3>Contact Information</h3>
              <p>
                Send me a message and I will get back to you within 24 hours!
              </p>
            </article>

            <div className="flex flex-col gap-4 p-4">
              <a
                href="tel:+8801882970400"
                className="flex flex-row items-center gap-4 hover:underline cursor-pointer"
              >
                <MdOutlinePhone className="text-2xl text-blue-600" />
                +88 018 8297 0400
              </a>
              <a
                href="mailto:sifatul@sifatul.com"
                className="flex flex-row items-center gap-4 hover:underline cursor-pointer"
              >
                <MdOutlineEmail className="text-2xl text-blue-600" />
                sifatul@sifatul.com
              </a>
            </div>
          </div>

          <div className="w-full">
            <img src="/contact-card-bg.svg" alt="" className="m-0 mb-2" />
          </div>
        </div>

        <Form />
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
