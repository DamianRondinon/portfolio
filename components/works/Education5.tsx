import { motion } from "framer-motion";
import { FaAngleDoubleRight } from "react-icons/fa";

const Education5 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      English level B1
      </h3>
      <p className="text-sm mt-2 font-medium text-pinkLight">
        March 2023 - Present
      </p>
      <ul className="mt-2 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-[#faf9f9]">
          <span className="text-textPink mt-2">
            <FaAngleDoubleRight />
          </span>
          Enhancing Communication Skills: I practice 
          speaking to express myself confidently in 
          English conversations.
        </li>
        <li className="text-base flex gap-2 text-[#faf9f9]">
          <span className="text-textPink mt-2">
            <FaAngleDoubleRight />
          </span>
          Strengthening Comprehension and Grammar: 
          I reinforce my listening and reading skills 
          while delving into grammar to communicate 
          more accurately.
        </li>
      </ul>
    </motion.div>
  );
};

export default Education5;
