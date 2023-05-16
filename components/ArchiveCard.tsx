import { FaGithub } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import Image from "next/image";
import { StaticImageData } from 'next/image';
import { logox32, captura4, captura3, captura5 } from "@/public/assets";

interface Props {
  title: string;
  image: StaticImageData;
  listItem: string[];
  link: string;
}

const ArchiveCard = ({ title, image, listItem, link }: Props) => {
  return (
    <a href={link} target="_blank">
      <div
        className="flex flex-col w-full h-full justify-center rounded-lg 
                bg-buttonBlack bg-opacity-100 drop-shadow-md gap-4
                hover:-translate-y-2 transition-transform duration-300 group p-7"
      >
        <div>
          <h1 className="flex justify-center mb-2 group-hover:text-textPink">
            {title}
          </h1>
        </div>
        <div>
          <Image
            className="w-full object-contain rounded-xl shadow-xl hover:opacity-70 cursor-pointer"
            src={image}
            alt="project"
          />
        </div>
        <ul className="text-md mdl:text-sm text-textLight flex items-center gap-2 justify-evenly m-2 flex-wrap">
          {listItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <div className="flex justify-between items-center">
          <button
            className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor 
                    bg-opacity-100 transition-all hover:bg-bodyColor drop-shadow-md mr-4 mb-4 text-white"
          >
            <div className="flex justify-center">
              <FaGithub className="w-6 h-8" />
            </div>
          </button>
          <button
            className="border-none outline-none px-4 py-2 rounded-md bg-contratsColor 
                    bg-opacity-100 transition-all hover:bg-bodyColor drop-shadow-md mr-4 mb-4 text-white"
          >
            <div className="flex justify-center">
              <MdOutlineWeb className="w-6 h-8" />
            </div>
          </button>
        </div>
      </div>
    </a>
  );
};

export default ArchiveCard;
