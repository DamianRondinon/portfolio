import SectionTitle from "./SectionTitle";
import {
  FaPython,
  FaGitAlt,
  FaNodeJs,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiSqlite,
  SiDjango,
  SiTailwindcss,
  SiChakraui,
  SiExpress,
  SiMui,
  SiStyledcomponents,
  SiNotion,
  SiRedux,
} from "react-icons/si";
import Image from "next/image";
import imgAnimado from "@/public/assets/images/imgAnimado2.png";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-contentContainer mx-auto py-5 lgl:py-32 flex flex-col gap-12"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-15, 0], opacity: 2 }}
        transition={{ duration: 1 }}
      >
        <SectionTitle title="About" titleSpan="Me" />
      </motion.div>
      <div className="flex flex-col lgl:flex-row gap-16">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full lgl:w-1/2 text-base text-textLight font-medium flex flex-col gap-4"
        >
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta).
          </p>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto.
            <span className="text-textPink">
              {" "}
              Lorem Ipsum ha sido el texto.
            </span>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto.
            <span className="text-textPink">
              {" "}
              Lorem Ipsum ha sido el texto.
            </span>{" "}
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <p>
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta).
          </p>
        </motion.div>
        <div className="w-full lgl:w-1/2 h-80 relative group">
          <div className="absolute w-full h-80 py-0 -left-6 -top-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [-15, 0], opacity: 2 }}
              transition={{ duration: 1 }}
              className="w-full relative z-20 flex pl-6 lgl:pl-0"
            >
              <h1 className="mb-6 text-lg text-textPink font-semibold">
                My Skills
              </h1>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-wrap flex-row justify-center md:justify-start w-full relative group absolute pl-6 lgl:pl-0"
            >
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-orange-600">
                <h1>GIT</h1>
                <div className="flex justify-center">
                  <FaGitAlt className="w-6 h-8" />
                </div>
              </button>
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-white">
                <h1>Next.js</h1>
                <div className="flex justify-center">
                  <SiNextdotjs className="w-6 h-8" />
                </div>
              </button>
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-green-600">
                <h1>Node.js</h1>
                <div className="flex justify-center">
                  <FaNodeJs className="w-6 h-8" />
                </div>
              </button>
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-blue-600">
                <h1>CSS</h1>
                <div className="flex justify-center">
                  <FaCss3Alt className="w-6 h-8" />
                </div>
              </button>
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-blue-400">
                <h1>Postgresql</h1>
                <div className="flex justify-center">
                  <SiPostgresql className="w-6 h-8" />
                </div>
              </button>
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-white">
                <h1>Github</h1>
                <div className="flex justify-center">
                  <FaGithub className="w-6 h-8" />
                </div>
              </button>
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-green-700">
                <h1>Django</h1>
                <div className="flex justify-center">
                  <SiDjango className="w-6 h-8" />
                </div>
              </button>
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-blue-300">
                <h1>Tailwind</h1>
                <div className="flex justify-center">
                  <SiTailwindcss className="w-6 h-8" />
                </div>
              </button>
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-blue-400">
                <h1>ChakraUi</h1>
                <div className="flex justify-center">
                  <SiChakraui className="w-6 h-8" />
                </div>
              </button>
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-white">
                <h1>Express</h1>
                <div className="flex justify-center">
                  <SiExpress className="w-6 h-8" />
                </div>
              </button>
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-white">
                <h1>Notion</h1>
                <div className="flex justify-center">
                  <SiNotion className="w-6 h-8" />
                </div>
              </button>
            </motion.div>
            <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: [20, 0], opacity: 1 }}
            transition={{ duration: 2 }}
            >
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default About;


/*

            <Image
              className="object-cover -mt-10 hidden mdl:inline-flex w-18 h-26"
              src={imgAnimado}
              alt="imagen"
            />
*/