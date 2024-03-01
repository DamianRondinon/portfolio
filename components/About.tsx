import SectionTitle from "./SectionTitle";
import {
  FaPython,
  FaGitAlt,
  FaNodeJs,
  FaCss3Alt,
  FaGithub,
  FaArrowCircleRight,
  FaForward,
  FaChevronRight,
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
      <div className="flex flex-col lgl:flex-row gap-24">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full lgl:w-1/2 text-base text-textLight font-medium flex flex-col gap-12"
        >
          <div className="flex gap-2" >
          <FaChevronRight className="w-36 h-6"/>
          <p>
          I am a developer willing to adapt to the current job market. Initially, I started delving into
            <span className="text-textPink"> Front-end. </span>
            As I progressed, I discovered other programming languages and technical areas that sparked my interest, such as 
            <span className="text-textPink"> Back-end. </span>
          </p>
          </div>

          <div className="flex flex-col items-center">
  <h1 className="text-textPink mb-4">Education and technical skills"</h1>
  <div className="flex flex-col items-start gap-4">
    <div className="flex items-center">
      <FaArrowCircleRight className="w-6 h-6" />
      <p className="ml-2">Desarrollo Fullstack MERN..</p>
    </div>
    <div className="flex items-center">
      <FaArrowCircleRight className="w-6 h-6" />
      <p className="ml-2">Bachelor's degree in Computer Science at the National University of Quilmes.</p>
    </div>
    <div className="flex items-center">
      <FaArrowCircleRight className="w-6 h-6" />
      <p className="ml-2">Agile methodologies and collaboration in group projects.</p>
    </div>
  </div>
</div>
          
        </motion.div>
        <div className="w-full lgl:w-1/2 h-60 relative group">
          <div className="absolute w-full h-80 py-0 -left-6 -top-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [-15, 0], opacity: 2 }}
              transition={{ duration: 1 }}
              className="w-full relative z-20 flex pl-6 lgl:pl-0"
            >
              <h1 className="mb-6 text-lg text-textPink font-semibold">
                Tools
              </h1>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [250, 0], opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-wrap flex-row justify-center md:justify-start w-full relative group absolute pl-6 lgl:pl-0"
            >
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-orange-600 cursor-default">
                <h1>GIT</h1>
                <div className="flex justify-center">
                  <FaGitAlt className="w-6 h-8" />
                </div>
              </button>
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-white cursor-default">
                <h1>Next.js</h1>
                <div className="flex justify-center">
                  <SiNextdotjs className="w-6 h-8" />
                </div>
              </button>
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-green-600 cursor-default">
                <h1>Node.js</h1>
                <div className="flex justify-center">
                  <FaNodeJs className="w-6 h-8" />
                </div>
              </button>
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-blue-600 cursor-default">
                <h1>CSS</h1>
                <div className="flex justify-center">
                  <FaCss3Alt className="w-6 h-8" />
                </div>
              </button>
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-blue-400 cursor-default">
                <h1>Postgresql</h1>
                <div className="flex justify-center">
                  <SiPostgresql className="w-6 h-8" />
                </div>
              </button>
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-white cursor-default">
                <h1>Github</h1>
                <div className="flex justify-center">
                  <FaGithub className="w-6 h-8" />
                </div>
              </button>
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-green-700 cursor-default">
                <h1>Django</h1>
                <div className="flex justify-center">
                  <SiDjango className="w-6 h-8" />
                </div>
              </button>
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-blue-300 cursor-default">
                <h1>Tailwind</h1>
                <div className="flex justify-center">
                  <SiTailwindcss className="w-6 h-8" />
                </div>
              </button>
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-blue-400 cursor-default">
                <h1>ChakraUi</h1>
                <div className="flex justify-center">
                  <SiChakraui className="w-6 h-8" />
                </div>
              </button>
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-white cursor-default">
                <h1>Express</h1>
                <div className="flex justify-center">
                  <SiExpress className="w-6 h-8" />
                </div>
              </button>
              <button className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-white cursor-default">
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
            ></motion.div>
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
