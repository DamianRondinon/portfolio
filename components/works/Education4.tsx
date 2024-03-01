import { motion } from "framer-motion";
import { FaAngleDoubleRight } from "react-icons/fa";

const Education4 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Java and Spring Boot Training
      </h3>
      <p className="text-sm mt-2 font-medium text-pinkLight">
        June 2022 - June 2023
      </p>
      <ul className="mt-2 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-[#faf9f9]">
          <span className="text-textPink mt-2">
            <FaAngleDoubleRight />
          </span>
          Mastered Java Fundamentals: I learned 
          the fundamental concepts of Java, including 
          language syntax, data structures, and 
          object-oriented programming (OOP). 
          This provided me with a solid foundation for 
          building scalable and efficient Java applications.
        </li>
        <li className="text-base flex gap-2 text-[#faf9f9]">
          <span className="text-textPink mt-2">
            <FaAngleDoubleRight />
          </span>
          Acquired Spring Boot Skills: I delved into web 
          application development using Spring Boot, 
          learning to create RESTful APIs, manage 
          configuration, implement security, and perform 
          unit testing. These skills enable me to build 
          robust and high-performance Java applications.
        </li>
      </ul>
    </motion.div>
  );
};

export default Education4;
