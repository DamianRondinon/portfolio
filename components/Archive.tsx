import { motion, AnimatePresence } from "framer-motion";
import ArchiveCard from "@/components/ArchiveCard";
import { logox32, captura4, captura3, captura5 } from "@/public/assets";
import React, { useState } from "react";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-2 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Projects
        </h2>
        <p className="text-md font-titleFont text-textPink">view the archive</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Proyecto 1"
          image="{captura4}"
          listItem={["Reactjs", "Tailwind CSS", "Vercel"]}
          link="http://www.sistemas-utnfra.com.ar/#/pages/carrera/tecnico-programacion/resumen"
        />
        <ArchiveCard
          title="Proyecto 1"
          image="{captura4}"
          listItem={["Reactjs", "Tailwind CSS", "Vercel"]}
          link="http://www.sistemas-utnfra.com.ar/#/pages/carrera/tecnico-programacion/resumen"
        />
        <ArchiveCard
          title="Proyecto 1"
          image="{captura4}"
          listItem={["Reactjs", "Tailwind CSS", "Vercel"]}
          link="http://www.sistemas-utnfra.com.ar/#/pages/carrera/tecnico-programacion/resumen"
        />
        <ArchiveCard
          title="Proyecto 1"
          image="{captura4}"
          listItem={["Reactjs", "Tailwind CSS", "Vercel"]}
          link="http://www.sistemas-utnfra.com.ar/#/pages/carrera/tecnico-programacion/resumen"
        />
        <ArchiveCard
          title="Proyecto 1"
          image="{captura4}"
          listItem={["Reactjs", "Tailwind CSS", "Vercel"]}
          link="http://www.sistemas-utnfra.com.ar/#/pages/carrera/tecnico-programacion/resumen"
        />
        <ArchiveCard
          title="Proyecto 1"
          image="{captura4}"
          listItem={["Reactjs", "Tailwind CSS", "Vercel"]}
          link="http://www.sistemas-utnfra.com.ar/#/pages/carrera/tecnico-programacion/resumen"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Proyecto 1"
                image="{captura4}"
                listItem={["Reactjs", "Tailwind CSS", "Vercel"]}
                link="http://www.sistemas-utnfra.com.ar/#/pages/carrera/tecnico-programacion/resumen"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Proyecto 1"
                image="{captura4}"
                listItem={["Reactjs", "Tailwind CSS", "Vercel"]}
                link="http://www.sistemas-utnfra.com.ar/#/pages/carrera/tecnico-programacion/resumen"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Proyecto 1"
                image="{captura4}"
                listItem={["Reactjs", "Tailwind CSS", "Vercel"]}
                link="http://www.sistemas-utnfra.com.ar/#/pages/carrera/tecnico-programacion/resumen"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? 
          <button
            onClick={() => setShowMore(false)}
            className="border-none outline-none px-6 py-4 rounded-md bg-buttonBlack bg-opacity-100 
                  transition-all hover:bg-contratsColor hover:text-textPink drop-shadow-md mr-4 mb-4 text-white"
          >
            Show Less
          </button>
         : 
          <button
            onClick={() => setShowMore(true)}
            className="border-none outline-none px-6 py-4 rounded-md bg-buttonBlack bg-opacity-100 
                transition-all hover:bg-contratsColor hover:text-textPink drop-shadow-md mr-4 mb-4 text-white"
          >
            Show More
          </button>
        }
      </div>
    </div>
  );
};

export default Archive;
