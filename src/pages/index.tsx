import Image from 'next/image'
import { Check } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-[url('/pattern-01.jpg')] bg-no-repeat bg-cover mt-15 mx-auto">
      {/* Hero Section */}
      <section className="text-center pt-6 py-10">
        <h3 className="text-white font-semibold pt-10">Hello, I&apos;m</h3>
        <h1 className="text-white font-bold text-4xl">Muhammad Adil</h1>
        <h3 className="text-white font-semibold">Frontend Developer</h3>

        <div className="flex text-center justify-center mt-10 gap-8">
          <button className="outline outline-offset-2 outline-teal-500 rounded-lg text-lg p-2 font-medium text-teal-500">
            Download C.V
          </button>
          <button className="rounded-lg text-lg p-3 bg-teal-500 text-white">Let&apos;s Talk</button>
        </div>
      </section>

      {/* Image */}
      <div className="mx-auto justify-center items-center mt-7 p-5 md:pl-[33.6rem]">
        <Image
          src="/logos.jpg"
          alt="Logo Design"
          width={300}
          height={600}
          className=" justify-center items-center rounded-t-full"
        />
      </div>

      {/* About Section */}
      <section  id='about' className="text-center pt-20">
        <h3 className="text-teal-500 font-semibold">Get To Know</h3>
        <h2 className="text-teal-400 font-autograph text-6xl">About Me</h2>

        <div className="md:pl-20 flex gap-4 md:gap-8 justify-center items-center md:flex-row flex-col pt-10">
          <Image src="/laptop.jpg" alt="Logos Full" width={500} height={500} className="p-8 rounded-s-sm" />
          <div className="md:pl-10 md:pr-10 md:w-1/2">
            <p className="pt-10 md:text-lg p-7 text-balance text-teal-500">
              I am eager to apply my strong creative, technical, and analytical skills to Frontend Development, where I specialize in creating and enhancing user-centric web applications and interfaces. Throughout my career, I have been recognized for my ability to design and implement engaging, responsive, and visually appealing web experiences using the latest frontend technologies. My expertise includes translating design concepts into high-quality code and continuously optimizing applications for performance and usability.
            </p>
            <div className="pt-5">
              <button className="rounded-lg p-3 text-lg bg-teal-500 text-white">Let&apos;s Talk</button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id='skill' className="text-center pt-20">
        <h3  className="text-teal-500 font-semibold">What Skills Do I Have?</h3>
        <h2 className="text-teal-400 font-autograph text-5xl">My Skills</h2>

        <div  className="flex justify-center items-center max-w-full mx-auto pt-10">
          <div className="text-gray-500 p-5 md:p-10">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
              <div className="flex flex-row gap-4 justify-center items-center border rounded-lg p-4 bg-teal-500 w-[400px] h-[400px]">
                <div className="flex flex-col justify-center items-start h-full">
                  <p className="flex text-white font-medium items-center gap-2 pt-3"><Check size={23}/>HTML</p>
                  <p className="flex text-white font-medium items-center gap-2 pt-3"><Check size={23}/>Tailwindcss</p>
                  <p className="flex text-white font-medium items-center gap-2 pt-3"><Check size={23}/>Typescript</p>
                  <p className="flex text-white font-medium items-center gap-2 pt-3"><Check size={23}/>Git & Github</p>
                </div>
                <div className="flex flex-col justify-center items-start h-full">
                  <p className="flex text-white font-medium items-center gap-2 pt-3"><Check size={23}/>Next.js</p>
                  <p className="flex text-white font-medium items-center gap-2 pt-3"><Check size={23}/>Framer Motion</p>
                  <p className="flex text-white font-medium items-center gap-2 pt-3"><Check size={23}/>React</p>
                  <p className="flex text-white font-medium items-center gap-2 pt-3"><Check size={23}/>Shadcn UI</p>
                </div>
              </div>

              <div className="flex flex-row gap-4 border justify-center items-center  rounded-lg p-2 bg-teal-500 w-[400px] h-[400px]">
                <div className="flex flex-col justify-center items-start h-full">
                  <p className="flex text-white font-medium items-center gap-2 pt-3"><Check size={23}/>Javascript</p>
                  <p className="flex text-white font-medium items-center gap-2 pt-3"><Check size={23}/>Sanity</p>
                  <p className="flex text-white font-medium items-center gap-2 pt-3"><Check size={23}/>Fire-base</p>
                  <p className="flex text-white font-medium items-center gap-2 pt-3"><Check size={23}/>Redux Tool Kit</p>
                </div>
                <div className="flex flex-col justify-center items-start h-full">
                  <p className="flex text-white font-medium items-center gap-2 pt-3"><Check size={23}/>Python </p>
                  <p className="flex text-white font-medium items-center gap-2 pt-3"><Check size={23}/>Fast API</p>
                  <p className="flex text-white font-medium items-center gap-2 pt-3"><Check size={23}/>Docker</p>
                  <p className="flex text-white font-medium items-center gap-2 pt-3"><Check size={23}/>Postgres SQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id='portfolio' className="text-center pt-5">
        <h3 className="text-teal-500 font-semibold">My Recent Work</h3>
        <h2 className="text-teal-400 font-autograph text-6xl">Portfolio</h2>

        <div  className="flex items-center max-w-full mx-auto leading-8 mb-5">
          <div className="text-gray-500 px-10 mt-32 mx-auto">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-24 md:pr-20">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="shadow-md border-2 rounded-md shadow-gray-600 h-60 hover:scale-105 duration-75">
                  <div>
                    <Image
                      src={`/q${item}.png`}
                      width={300}
                      height={300}
                      className="w-60 h-40 border-b-2 rounded-t-md"
                      alt={`Project ${item}`}
                    />
                  </div>
                  <div className="flex justify-between px-5 text-white">
                    <button className="p-4 hover:scale-105 duration-200">
                      <a href={`https://github.com/${item}`} target="_blank" rel="noopener noreferrer">
                        Demo
                      </a>
                    </button>
                    <button className="p-4 hover:scale-105 duration-200">
                      <a href={`https://github.com/${item}`} target="_blank" rel="noopener noreferrer">
                        Code
                      </a>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact'  className="text-center pt-20">
        <h3 className="text-teal-500 font-semibold">Get In Touch</h3>
        <h2 className="text-teal-400 font-autograph text-6xl">Contact</h2>
        <form action="https://formspree.io/f/mbjeaqpn" method="POST" className="md:p-5 pt-5">
          <div>
            <input
              placeholder="Your Name"
              type="text"
              required
              name="name"
              className="p-2 md:w-80 bg-transparent border-2 rounded-md focus:outline-none text-white"
            />
          </div>
          <div className="my-5">
            <input
              required
              className="p-2 md:w-80 bg-transparent border-2 rounded-md focus:outline-none text-white"
              placeholder="Your E-Mail"
              type="email"
              name="email"
            />
          </div>
          <div>
            <textarea
              rows={8}
              name="message"
              required
              className="p-2 md:w-80 bg-transparent border-2 rounded-md focus:outline-none text-white"
              placeholder="Your Message Here..."
            />
          </div>
          <div className="pb-5">
            <button
              type="submit"
              className="mx-auto block px-5 rounded-md bg-gradient-to-b from-gray-300 text-black to-gray-600"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
