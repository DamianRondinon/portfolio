import { BsInstagram } from "react-icons/bs";
import { TbBrandGithub, TbBrandTwitter } from "react-icons/tb";
import { GrLinkedinOption } from "react-icons/gr";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      className="hidden md:inline-flex items-center justify-center w-full py-6 gap-4"
      initial={{ opacity: 0 }}
      whileInView={{ y: [-50, 0], opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <a href="" target="_blank">
        <span
          className="w-10 h-10 text-xl bg-contratsColor border-[2px] border-zinc-600
            hover:border-textPink text-zinc-200 rounded-full inline-flex items-center
            justify-center hover:text-textPink cursor-pointer hover:-translate-y-2 
            transition-all duration-300"
        >
          <TbBrandGithub />
        </span>
      </a>
      <a href="" target="_blank">
        <span
          className="w-10 h-10 text-xl bg-contratsColor border-[2px] border-zinc-600
            hover:border-textPink text-zinc-200 rounded-full inline-flex items-center
            justify-center hover:text-textPink cursor-pointer hover:-translate-y-2 
            transition-all duration-300"
        >
          <BsInstagram />
        </span>
      </a>
      <a href="" target="_blank">
        <span
          className="w-10 h-10 text-xl bg-contratsColor border-[2px] border-zinc-600
            hover:border-textPink text-zinc-200 rounded-full inline-flex items-center
            justify-center hover:text-textPink cursor-pointer hover:-translate-y-2 
            transition-all duration-300"
        >
          <GrLinkedinOption />
        </span>
      </a>
      <div>
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
  );
};

export default Footer;
