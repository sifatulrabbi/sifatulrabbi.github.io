import SectionContainer from "@/components/SectionContainer"
import { Button } from "flowbite-react"

const HeroSection: React.FC = () => {
  return (
    <SectionContainer id="hero">
      <div className="h-[7rem] w-[7rem] md:h-[8rem] md:w-[8rem] my-8">
        <img
          src="/intro-img.png"
          alt=""
          className="object-cover h-auto w-auto"
        />
      </div>

      <article className="format format-h1:md:text-5xl text-center format-lead:text-lg format-lead:md:text-xl">
        <h1 className="mb-4">
          Hi, I am <span className="text-blue-700">Sifatul Rabbi</span>
        </h1>
        <h1 className="text-gray-500">
          Professional <span className="">FullStack</span> Developer
        </h1>
        <p className="lead">
          I have a passion for web application development and want to
          collaborate more about cloud computing. Currently working as a
          freelance fullstack developer. Contact me if you want to build
          something amazing.
        </p>
      </article>

      <div className="w-full flex flex-row justify-center items-center gap-4 mt-[5vh]">
        <Button className="min-w-[120px]">Contact Me</Button>
        <Button color="gray" className="min-w-[120px]">
          Portfolio
        </Button>
      </div>
    </SectionContainer>
  )
}

export default HeroSection
