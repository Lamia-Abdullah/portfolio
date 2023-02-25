import Head from "next/head";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { projects } from "../information/data";
import { skills } from "../information/data";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className=" bg-black">
          <section className=" container max-w-7xl mx-auto ">
            <nav className="py-10 mb-12 max-w-7xl mx-auto">
              <button
                className="bg-gradient-to-r from-blue-900 to-indigo-600 hover:from-indigo-600 hover:to-blue-900 text-white px-4 py-2 rounded-md  fixed md:static flex md:mr-auto md:ml-[10%] md:mt-5 justify-center gap-1 font-bold items-center w-full h-16 z-50 text-center top-0 text-lg  md:text-sm md:text-primary md:px-5 md:pb-3 md:pt-2 md:bg-transparent md:w-fit md:h-12"
                haref="#"
              >
                Resume
              </button>
            </nav>
            <div className="text-center p-10">
              <h2 className="text-5xl py-2 text-gray-300 font-medium">
                lamia abdullah
              </h2>
              <h3 className="text-2xl py2 text-gray-300">
                front-end and flutter
              </h3>
              <p className="text-md py-5 leading-8 text-gray-300">
                {" "}
                information ....
              </p>
            </div>
            <div className="text-4xl flex justify-center gap-4 text-white hover:text-indigo-500 cursor-pointer">
              <AiFillGithub />
              <AiFillLinkedin />
            </div>
          </section>
          <div className="w-7/12 mx-auto border-b p-9"></div>
          <section>
            <div className=" px-5 py-10 mx-auto">
              <div className="text-center mb-20">
                <h1 className=" sm:text-4xl text-3xl font-medium text-white ">
                  Skills &amp; Technologes 🚀
                </h1>
                <p className=" text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300 mt-5">
                  skills .....
                </p>
              </div>
              <div className="flex flex-wrap xl:w-1/3 lg:w-3/4 mx-auto ">
                {skills.map((skills) => (
                  <div key={skills} className="p-2 sm:w-1/2 w-full ">
                    <div className="bg-gry-800 rounded flex p-4 h-full items-center bg-gray-900">
                      <AiFillCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />
                      <span className=" title-font font-medium text-white">
                        {skills}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="text-gray-400 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
              <div className="flex flex-col w-full mb-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                  Apps I've Built 🛠️
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
                  projects .....
                </p>
              </div>
              <div className="flex flex-wrap -m-4">
                {projects.map((project) => (
                  <a
                    href={project.link}
                    key={project.image}
                    className="sm:w-1/2 w-100 p-4"
                  >
                    <div className="flex relative">
                      <img
                        alt="gallery"
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        src={project.image}
                      />
                      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                        <h1 className="title-font text-2xl font-medium text-white mb-3">
                          {project.title}
                        </h1>
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                          {project.subtitle}
                        </h2>
                        <p className="leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

        </main>
      </div>
    </>
  );
}
