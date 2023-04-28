import Image from "next/image";
import { logoapple } from "@/public/assets";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
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
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
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
        <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4x1 text-textLight cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-textPink inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-200"></span>
          <span className="w-full h-[2px] bg-textPink inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-200"></span>
          <span className="w-full h-[2px] bg-textPink inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-200"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
