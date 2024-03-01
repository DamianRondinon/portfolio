import { motion } from "framer-motion";
import { FaAngleDoubleRight } from "react-icons/fa";

const Education2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Mastering React: Building Dynamic Web Applications
      </h3>
      <p className="text-sm mt-2 font-medium text-pinkLight">
      August 2022 - March 2023
      </p>
      <ul className="mt-2 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-[#faf9f9]">
          <span className="text-textPink mt-2">
            <FaAngleDoubleRight />
          </span>
          Proficiency in React: Through this course, 
          I´ve mastered React, from its fundamentals 
          like JSX to advanced topics like state management. 
          I can now build dynamic user interfaces and fully 
          functional web apps.
        </li>
        <li className="text-base flex gap-2 text-[#faf9f9]">
          <span className="text-textPink mt-2">
            <FaAngleDoubleRight />
          </span>
          Firebase Integration for Full Stack Development: 
          I´ve also learned to integrate Firebase into my 
          projects, utilizing real-time databases, 
          user authentication, and Firebase Hosting 
          for deployment. This enables me to create 
          powerful and scalable web solutions.
        </li>
      </ul>
    </motion.div>
  );
};

export default Education2;
