import SectionContainer from "@/components/SectionContainer"
import { Button } from "flowbite-react"

const AboutSection: React.FC = () => {
  return (
    <SectionContainer id="about">
      <article className="format text-center mb-[6vh]">
        <h1 className="mb-4">AboutMe</h1>
        <p className="lead">A bit about me and how I started my journey</p>
      </article>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem]">
        <div className="relative w-full h-full flex justify-center items-center">
          <div className="rounded-full overflow-hidden w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:h-[300px] lg:w-[300px]">
            <img src="/me.jpg" alt="" className="h-auto w-auto object-cover" />
          </div>
        </div>

        <div className="format text-center md:text-left">
          <h2>
            <q>
              Learning has no <span className="text-blue-600">Limits</span>
            </q>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
            facere asperiores obcaecati delectus ratione temporibus accusantium
            consectetur provident accusamus ducimus quaerat magni, ad placeat
            modi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
            facere asperiores obcaecati delectus ratione temporibus accusantium
            consectetur provident accusamus.
          </p>

          <div>
            <div className="mt-8 flex justify-center md:justify-start">
              <article className="format-p:m-0 flex flex-row justify-start items-center bg-white px-4 py-2 shadow-lg w-max rounded border-[1px] gap-2">
                <img
                  src="/badge.png"
                  alt=""
                  className="m-0 w-[2rem] h-[2rem]"
                />
                <div>
                  <p className="leading-[1.3]">
                    <span className="uppercase text-gray-700 text-sm">
                      Top Rated Plus
                    </span>
                    <br />
                    on <strong className="text-green-500">Upwork</strong>
                  </p>
                </div>
              </article>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-4 mt-[6vh]">
              <Button>Contact Me</Button>
              <Button color="gray">My Works</Button>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  )
}

export default AboutSection
