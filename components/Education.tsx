import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Education1 from "./works/Education1";
import Education2 from "./works/Education2";
import Education3 from "./works/Education3";
import Education4 from "./works/Education4";
import Education5 from "./works/Education5";
import { motion, AnimatePresence } from "framer-motion";

const Education = () => {
  const [education1, setEducation1] = useState(true);
  const [education2, setEducation2] = useState(false);
  const [education3, setEducation3] = useState(false);
  const [education4, setEducation4] = useState(false);
  const [education5, setEducation5] = useState(false);

  const handleEducation1 = () => {
    setEducation1(true);
    setEducation2(false);
    setEducation3(false);
    setEducation4(false);
    setEducation5(false);
  };
  const handleEducation2 = () => {
    setEducation1(false);
    setEducation2(true);
    setEducation3(false);
    setEducation4(false);
    setEducation5(false);
  };
  const handleEducation3 = () => {
    setEducation1(false);
    setEducation2(false);
    setEducation3(true);
    setEducation4(false);
    setEducation5(false);
  };
  const handleEducation4 = () => {
    setEducation1(false);
    setEducation2(false);
    setEducation3(false);
    setEducation4(true);
    setEducation5(false);
  };
  const handleEducation5 = () => {
    setEducation1(false);
    setEducation2(false);
    setEducation3(false);
    setEducation4(false);
    setEducation5(true);
  };

  return (
    <section
      id="education"
      className="max-w-containerxs mx-auto py-10 lgl:py-32 flex flex-col gap-12"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-10, 0], opacity: 2 }}
        transition={{ duration: 1 }}
      >
        <SectionTitle title="" titleSpan="Education" />
      </motion.div>
      <motion.div
        className="w-full mt-6 flex flex-col md:flex-row gap-24"
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ y: [20, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ul className="md:w-42 flex flex-col">
          <li
            onClick={handleEducation1}
            className={`${
              education1
                ? "border-2 border-[#ff36ab] text-textPink"
                : "border-2 border-contratsColor text-pinkLight"
            } border-solid bg-transparent hover:bg-contratsColor rounded py-3 text-sm cursor-pointer duration-300 px-8 font-medium mb-1`}
          >
            UNQ
          </li>
          <li
            onClick={handleEducation2}
            className={`${
              education2
                ? "border-2 border-[#ff36ab] text-textPink"
                : "border-2 border-contratsColor text-pinkLight"
            } border-solid bg-transparent hover:bg-contratsColor rounded py-3 text-sm cursor-pointer duration-300 px-8 font-medium mb-1`}
          >
            Udemy
          </li>
          <li
            onClick={handleEducation3}
            className={`${
              education3
                ? "border-2 border-[#ff36ab] text-textPink"
                : "border-2 border-contratsColor text-pinkLight"
            } border-solid bg-transparent hover:bg-contratsColor rounded py-3 text-sm cursor-pointer duration-300 px-8 font-medium mb-1`}
          >
            Nucba
          </li>
          <li
            onClick={handleEducation4}
            className={`${
              education4
                ? "border-2 border-[#ff36ab] text-textPink"
                : "border-2 border-contratsColor text-pinkLight"
            } border-solid text-pinkLight bg-transparent hover:bg-contratsColor rounded py-3 text-sm cursor-pointer duration-300 px-8 font-medium mb-1`}
          >
            Oracle Alura
          </li>
          <li
            onClick={handleEducation5}
            className={`${
              education5
                ? "border-2 border-[#ff36ab] text-textPink"
                : "border-2 border-contratsColor text-pinkLight"
            } border-solid bg-transparent hover:bg-contratsColor rounded py-3 text-sm cursor-pointer duration-300 px-8 font-medium mb-1`}
          >
            CELC
          </li>
        </ul>
        {education1 && <Education1 />}
        {education2 && <Education2 />}
        {education3 && <Education3 />}
        {education4 && <Education4 />}
        {education5 && <Education5 />}
      </motion.div>
    </section>
  );
};

export default Education;
