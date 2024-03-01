import { motion } from "framer-motion";
import { FaAngleDoubleRight } from "react-icons/fa";

const Education1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Bachelor's Degree in Computer Science
      </h3>
      <p className="text-sm mt-2 font-medium text-pinkLight">
        January 2024 - Present
      </p>
      <ul className="mt-2 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-[#faf9f9]">
          <span className="text-textPink mt-2">
            <FaAngleDoubleRight />
          </span>
          Proficiency in programming and logic: Through subjects 
          such as Programming Elements and Logic, Object-Oriented 
          Programming I, and Algorithms, I am developing strong skills 
          in programming and computational logic.
        </li>
        <li className="text-base flex gap-2 text-[#faf9f9]">
          <span className="text-textPink mt-2">
            <FaAngleDoubleRight />
          </span>
          Development of professional competencies: 
          The degree also emphasizes soft skills and 
          professional competencies, such as leadership, 
          teamwork, and critical thinking, taught in 
          subjects like User Interface Construction and 
          Software Engineering Elements.
        </li>
      </ul>
    </motion.div>
  );
};

export default Education1;
