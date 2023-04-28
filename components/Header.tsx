import React from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";
import { logoapple } from "@/public/assets";
import dami from "@/public/assets/images/imagenAnimada1.png";
import { BsInstagram } from "react-icons/bs";
import { TbBrandGithub, TbBrandTwitter } from "react-icons/tb";
import { GrLinkedinOption, GrReactjs } from "react-icons/gr";
import { DiJavascript1 } from "react-icons/di";
import { FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import ToolTip from "./Tooltip";

const Header = () => {
  return (
    <section id="/" className="max-w-contentContainer mx-auto py-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex-1 font-secondary lg:text-left"
          >
            <motion.h3
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg font-titleFont tracking-wide text-textPink mb-6"
            >
              Welcome to my world
            </motion.h3>
            <h1 className="text-5xl lgl:text-5xl font-titleFont font-semibold">
              Hi, I´m
            </h1>
            <h1 className="text-5xl lgl:text-5xl font-titleFont font-semibold mt-2 mb-4">
              Damián
              <span className="text-textPink"> Rondinon</span>
            </h1>
            <h2 className="mt-3 text-2xl">
              <Typewriter
                words={["Developer Trainee", "Front-End", "Back-End Student"]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={110}
                deleteSpeed={80}
                delaySpeed={1000}
              />
            </h2>

            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-base md:max-w-[550px] font-medium mb-6 mt-6 max-w-lg lg:mx:0"
            >
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta).
            </motion.p>

            <div className="flex max-w-max gap-x-6 items-center mx-auto lg:mx-0">
              <a href="assets/Damián_Rondinon_CV.pdf" target="_blank">
                <motion.button
                  initial={{ y: 1, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  className="border-none outline-none	px-6 py-2 rounded-md bg-opacity-100 mt-0.2 hover:font-bold
                         hover:bg-contratsColor shadow-lg shadow-pink-500/50 hover:shadow-lg bg-pink-600 duration-300"
                >
                  <h1 className="">Download CV</h1>
                </motion.button>
              </a>
            </div>
            <motion.div className="text-lg font-titleFont tracking-wide text-textPink mt-10">
              <div className="flex max-w-max gap-x-36 items-center mx-auto lg:mx-0 mt-6">
                <h1>Find with me & Best skill on</h1>
              </div>
              <div className="flex max-w-max gap-x-8 items-center mx-auto lg:mx-0 mt-6">
                <div>
                  <ToolTip tooltip="GitHub">
                    <a href="https://github.com/DamianRondinon" target="_blank">
                      <button className="border-none outline-none	px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4">
                        <TbBrandGithub className="w-6 h-8" />
                      </button>
                    </a>
                  </ToolTip>

                  <ToolTip tooltip="Instagram">
                    <a
                      href="https://www.linkedin.com/in/damian-rondinon/"
                      target="_blank"
                    >
                      <button className="border-none outline-none	px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4">
                        <BsInstagram className="w-6 h-8" />
                      </button>
                    </a>
                  </ToolTip>

                  <ToolTip tooltip="Linkedin">
                    <a
                      href="https://www.linkedin.com/in/damian-rondinon/"
                      target="_blank"
                    >
                      <button className="border-none outline-none	px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4">
                        <GrLinkedinOption className="w-6 h-8" />
                      </button>
                    </a>
                  </ToolTip>
                </div>
              </div>

              <div className="flex max-w-max gap-x-8 items-center mx-auto lg:mx-0 mt-2">
                <div>
                  <ToolTip tooltip="React">
                    <button className="border-none outline-none	px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-iceBlue">
                      <GrReactjs className="w-6 h-8" />
                    </button>
                  </ToolTip>

                  <ToolTip tooltip="JavaScript">
                    <button className="border-none outline-none	px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-yellow">
                      <DiJavascript1 className="w-6 h-8" />
                    </button>
                  </ToolTip>

                  <ToolTip tooltip="Python">
                    <button className="border-none outline-none	px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-yellow">
                      <FaPython className="w-6 h-8" />
                    </button>
                  </ToolTip>

                  <ToolTip tooltip="Java">
                    <button className="border-none outline-none	px-4 py-2 rounded-md bg-contratsColor bg-opacity-100 transition-all hover:bg-buttonBlack drop-shadow-md mr-4 mb-4 text-iceBlue">
                      <FaJava className="w-6 h-8" />
                    </button>
                  </ToolTip>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="translate-y-1"
            >
              <Image
                className="rounded-lg h-full object-cover -mt-30 hidden mdl:inline-flex"
                src={dami}
                alt="imagen"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
