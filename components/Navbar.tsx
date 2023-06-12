import Image from "next/image";
import { logoapple } from "@/public/assets";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbBrandGithub, TbBrandTwitter } from "react-icons/tb";
import { GrLinkedinOption } from "react-icons/gr";
import { StateLanguage } from "@/pages/context/language/StateLanguage";
import { DispatchLanguage } from "@/pages/context/language/DispatchLanguage";

const Navbar = () => {
  const { language } = StateLanguage();
  const dispatchLanguage = DispatchLanguage();
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[10vh] sticky top-0 z-50 bg-bodyColor px-6">
      <div className="contentContainer h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="#/">
            <Image className="w-12" src={logoapple} alt="logo" />
          </Link>
        </motion.div>

        <div className="hidden mdl:inline-flex items-center gap-6">
          <ul className="flex text-lg gap-6">
            <Link
              className="flex items-center gap-1 font-medium hover:text-[#f72585] cursor-pointer duration-200 nav-link"
              href="#/"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                Home
              </motion.li>
            </Link>

            <Link
              className="flex items-center gap-1 font-medium hover:text-[#f72585] cursor-pointer duration-200 nav-link"
              href="#about"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                About
              </motion.li>
            </Link>

            <Link
              className="flex items-center gap-1 font-medium hover:text-[#f72585] cursor-pointer duration-200 nav-link"
              href="#project"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                Projects
              </motion.li>
            </Link>

            <Link
              className="flex items-center gap-1 font-medium hover:text-[#f72585] cursor-pointer duration-200 nav-link"
              href="#education"
              onClick={handleScroll}
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                { language.labels.lb_save }
              </motion.li>
            </Link>

            <Link
              className="flex items-center gap-1 font-medium hover:text-[#f72585] cursor-pointer duration-200 nav-link"
              href=""
              onClick={handleScroll}
            >
              <motion.button
                onClick={ () => dispatchLanguage({type:"ES"})}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="border-none outline-none	px-4 py-2 rounded-md bg-buttonBlack bg-opacity-100 transition-all hover:bg-contratsColor drop-shadow-md "
              >
                ES
              </motion.button>

              <motion.button
                onClick={ () => dispatchLanguage({type:"EN"})}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="border-none outline-none	px-4 py-2 rounded-md bg-buttonBlack bg-opacity-100 transition-all hover:bg-contratsColor drop-shadow-md "
              >
                EN
              </motion.button>

            </Link>

            {/* 
            <Link
              className="flex items-center gap-1 font-medium hover:text-[#f72585] cursor-pointer duration-200 nav-link"
              href="#blog"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                Blog
              </motion.li>
            </Link>
            */}
            <Link
              className="flex items-center gap-1 font-medium hover:text-[#f72585] cursor-pointer duration-200 nav-link"
              href="#contact"
              onClick={handleScroll}
            >
              <motion.button
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="border-none outline-none	px-4 py-2 rounded-md bg-buttonBlack bg-opacity-100 transition-all hover:bg-contratsColor drop-shadow-md "
              >
                Contact
              </motion.button>
            </Link>
          </ul>
        </div>
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden 
        text-4x1 text-textLight cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textPink inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-200"></span>
          <span className="w-full h-[2px] bg-textPink inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-200"></span>
          <span className="w-full h-[2px] bg-textPink inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-200"></span>
        </div>
        {showMenu && (
          <div
            ref={(node) => (ref.current = node)}
            className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black
            bg-opacity-50 flex flex-col items-end"
          >
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%] h-full overflow-y-scroll scrollbarHide
              bg-buttonBlack flex flex-col items-center px-4 py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShowMenu(false)}
                className="text-3xl text-textPink cursor-pointer
                hover:text-textLight absolute top-4 right-4"
              />
              <div className="flex flex-col items-center gap-7 mt-20">
                <ul className="flex flex-col items-center text-lg gap-7">
                  <Link
                    className="flex items-center gap-1 font-medium hover:text-[#f72585] cursor-pointer duration-200 nav-link"
                    href="#/"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                    >
                      Home
                    </motion.li>
                  </Link>

                  <Link
                    className="flex items-center gap-1 font-medium hover:text-[#f72585] cursor-pointer duration-200 nav-link"
                    href="#about"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
                    >
                      About
                    </motion.li>
                  </Link>

                  <Link
                    className="flex items-center gap-1 font-medium hover:text-[#f72585] cursor-pointer duration-200 nav-link"
                    href="#project"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.3, ease: "easeIn" }}
                    >
                      Projects
                    </motion.li>
                  </Link>

                  <Link
                    className="flex items-center gap-1 font-medium hover:text-[#f72585] cursor-pointer duration-200 nav-link"
                    href="#education"
                    onClick={handleScroll}
                  >
                    <motion.li
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                    >
                      Education
                    </motion.li>
                  </Link>

                  {/* 
            <Link
              className="flex items-center gap-1 font-medium hover:text-[#f72585] cursor-pointer duration-200 nav-link"
              href="#blog"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                Blog
              </motion.li>
            </Link>
            */}
                  <Link
                    className="flex items-center gap-1 font-medium hover:text-[#f72585] cursor-pointer duration-200 nav-link"
                    href="#contact"
                    onClick={handleScroll}
                  >
                    <motion.button
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.5, ease: "easeIn" }}
                      className="border-none outline-none	rounded-md bg-opacity-100 transition-all drop-shadow-md "
                    >
                      Contact
                    </motion.button>
                  </Link>
                </ul>
                <div className="flex items-center justify-center w-full py-6 gap-4">
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, ease: "easeIn" }}
                    href=""
                    target="_blank"
                  >
                    <span
                      className="w-10 h-10 text-xl bg-contratsColor border-[2px] border-zinc-600
            hover:border-textPink text-zinc-200 rounded-full inline-flex items-center
            justify-center hover:text-textPink cursor-pointer hover:-translate-y-2 
            transition-all duration-300"
                    >
                      <TbBrandGithub />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, ease: "easeIn" }}
                    href=""
                    target="_blank"
                  >
                    <span
                      className="w-10 h-10 text-xl bg-contratsColor border-[2px] border-zinc-600
            hover:border-textPink text-zinc-200 rounded-full inline-flex items-center
            justify-center hover:text-textPink cursor-pointer hover:-translate-y-2 
            transition-all duration-300"
                    >
                      <BsInstagram />
                    </span>
                  </motion.a>
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, ease: "easeIn" }}
                    href=""
                    target="_blank"
                  >
                    <span
                      className="w-10 h-10 text-xl bg-contratsColor border-[2px] border-zinc-600
            hover:border-textPink text-zinc-200 rounded-full inline-flex items-center
            justify-center hover:text-textPink cursor-pointer hover:-translate-y-2 
            transition-all duration-300"
                    >
                      <GrLinkedinOption />
                    </span>
                  </motion.a>
                </div>
                <motion.a
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.1, ease: "easeIn" }}
                  className="text-md w-72 tracking-widest text-textPink text-center"
                  href=""
                >
                  <p>damianrondinon@gmail.com</p>
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
