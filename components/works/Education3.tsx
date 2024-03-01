import { motion } from "framer-motion";
import { FaAngleDoubleRight } from "react-icons/fa";

const Education3 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Full Stack Web Development
      </h3>
      <p className="text-sm mt-2 font-medium text-pinkLight">
        Frebaury 2022 - December 2022
      </p>
      <ul className="mt-2 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-[#faf9f9]">
          <span className="text-textPink mt-2">
            <FaAngleDoubleRight />
          </span>
          Web Design and Development: I learned to create 
          websites from scratch using HTML and CSS, 
          optimizing them with best practices. I also 
          mastered additional tools like Bootstrap, 
          Tailwind, and SASS for more efficient and 
          appealing web design.
        </li>
        <li className="text-base flex gap-2 text-[#faf9f9]">
          <span className="text-textPink mt-2">
            <FaAngleDoubleRight />
          </span>
          Front-end and Back-end Programming: I acquired 
          knowledge in JavaScript, for both dynamic interface 
          development and full-stack web application creation. 
          I learned to work with the DOM, use frameworks like 
          React.js, and develop robust APIs with Node.js and 
          Express.
        </li>
      </ul>
    </motion.div>
  );
};

export default Education3;
