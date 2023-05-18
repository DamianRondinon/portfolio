import { logox32, captura4, captura3, captura5 } from "@/public/assets";
import SectionTitle from "./SectionTitle";
import title from "./SectionTitle";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineWeb } from "react-icons/md";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-36 py-36">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SectionTitle titleSpan="Projects" title="" />
      </motion.div>
      <div className="w-full flex flex-col items-center justify-evenly gap-28 mt-4">
        {/* Project one */}
        <motion.div
          className="w-full flex flex-col items-center justify-center gap-28 mt-5"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ y: [0, 0], opacity: 2 }}
          transition={{ duration: 2 }}
        >
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-2/3 h-auto relative group"
              href="https://realtor-react-henna.vercel.app/"
              target="_blank"
            >
              <div className="mt-10">
                <Image
                  className="w-full h-full object-contain rounded-xl shadow-xl hover:opacity-70"
                  src={captura4}
                  alt="project"
                />
              </div>
            </a>
            <motion.div
              className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-evenly items-end text-right xl:-ml-16 z-10"
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [-250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="font-titleFont text-textPink text-xl tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Realtor</h3>
              <p className="bg-buttonBlack text-sm md:text-base p-2 md:p-6 rounded-md">
                In this project I used the chakra UI library to design, I got
                the data from RapidAPI.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textLight">
                <li>Nextjs</li>
                <li>React</li>
                <li>Typescript</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className="flex gap-1">
                <a
                  href="https://github.com/DamianRondinon/realtor-react"
                  target="_blank"
                >
                <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-white">
                  <div className="flex justify-center">
                    <FaGithub className="w-6 h-8" />
                  </div>
                </button>
                </a>
                <a
                  href="https://realtor-react-henna.vercel.app/"
                  target="_blank"
                >
                <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-white">
                  <div className="flex justify-center">
                    <MdOutlineWeb className="w-6 h-8" />
                  </div>
                </button>
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* Project two */}
        <motion.div
          className="w-full flex flex-col items-center justify-center gap-28 mt-5"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ y: [10, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-2/3 h-auto relative group"
              href="https://cripto-ranking-js.vercel.app/"
              target="_blank"
            >
              <div className="mt-10">
                <Image
                  className="w-full h-full object-contain rounded-xl shadow-xl hover:opacity-70"
                  src={captura3}
                  alt="project"
                />
              </div>
            </a>
            <motion.div
              className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-evenly items-end text-right z-10"
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [-250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="font-titleFont text-textPink text-xl tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Cripto Ranking</h3>
              <p className="bg-buttonBlack text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                I learned how to perform paging, and call a cryptocurrency api
                to get the updated data.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textLight">
                <li>CSS</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className="flex gap-1">
                <a 
                href="</a>"
                target="https://github.com/DamianRondinon/realtor-react"
                >
                <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-white">
                  <div className="flex justify-center">
                    <FaGithub className="w-6 h-8" />
                  </div>
                </button>
                </a>
                <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-white">
                  <div className="flex justify-center">
                    <MdOutlineWeb className="w-6 h-8" />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* Project three */}
        <motion.div
          className="w-full flex flex-col items-center justify-center gap-28 mt-5"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ y: [10, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-2/3 h-auto relative group"
              href="https://books-commerce-mowj.vercel.app/"
              target="_blank"
            >
              <div className="mt-10">
                <Image
                  className="w-full h-full object-contain rounded-xl shadow-xl hover:opacity-70"
                  src={captura5}
                  alt="project"
                />
              </div>
            </a>
            <motion.div
              className="w-full xl:w-1/2 flex flex-col gap-4 lgl:justify-evenly items-end text-right xl:-ml-16 z-10"
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [-250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <p className="font-titleFont text-textPink text-xl tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Book Store</h3>
              <p className="bg-buttonBlack text-sm md:text-base p-2 md:p-6 rounded-md">
                This web project is mainly focused on aesthetics. I worked on
                animations made with css and vanilla javascript.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textLight">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Vercel Deployment</li>
              </ul>
              <div className="flex gap-1">
                <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-white">
                  <div className="flex justify-center">
                    <FaGithub className="w-6 h-8" />
                  </div>
                </button>
                <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-white">
                  <div className="flex justify-center">
                    <MdOutlineWeb className="w-6 h-8" />
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
