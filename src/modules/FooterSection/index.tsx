import { BsFacebook, BsTwitter, BsGithub } from "react-icons/bs"
import SectionContainer from "@/components/SectionContainer"
import { NavLink } from "react-router-dom"

const FooterSection: React.FC = () => {
  return (
    <footer className="mt-[10vh] bg-slate-800">
      <SectionContainer
        noMargin
        className="grid grid-cols-1 md:grid-cols-2 border-b-[1px] py-8 gap-12"
      >
        <div className="w-full h-full flex items-start justify-center md:justify-start">
          <a
            href="#"
            className="text-white text-xl flex flex-row items-center gap-2 max-w-max"
          >
            <img src="/logo.png" alt="" height={40} width={40} />
            Sifatul
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 format format-invert format-a:no-underline format-a:text-gray-400 format-h4:uppercase format-h4:mb-8 gap-12 text-center md:text-left">
          <div>
            <h4>Site Map</h4>
            <div className="flex flex-col gap-2">
              <NavLink to="/" className="hover:underline">
                Home
              </NavLink>
              <NavLink to="/about" className="hover:underline">
                About
              </NavLink>
              <NavLink to="/services" className="hover:underline">
                Services
              </NavLink>
              <NavLink to="/works" className="hover:underline">
                Works
              </NavLink>
              <NavLink to="/contact" className="hover:underline">
                Contact
              </NavLink>
            </div>
          </div>
          <div className="format-a:text-2xl">
            <h4>Socials</h4>
            <div className="flex flex-col gap-4 items-center md:items-start">
              <a
                href="#"
                target="_blank"
                className="max-w-max hover:text-white"
              >
                <BsGithub />
              </a>
              <a
                href="#"
                target="_blank"
                className="max-w-max hover:text-white"
              >
                <BsTwitter />
              </a>
              <a
                href="#"
                target="_blank"
                className="max-w-max hover:text-white"
              >
                <BsFacebook />
              </a>
            </div>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer noMargin className="py-8">
        <article className="format">
          <p className="text-white">
            &copy; {new Date().getFullYear()} - Md Sifatul Islam Rabbi
          </p>
        </article>
      </SectionContainer>
    </footer>
  )
}

export default FooterSection
