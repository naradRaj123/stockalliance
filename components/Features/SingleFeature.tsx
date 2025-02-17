import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white p-10 shadow-Stock Alliance-3 transition-all hover:shadow-Stock Alliance-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-16"
      >
        <div className="relative flex h-64 w-64 items-center justify-center rounded-[4px] bg-primary">
          <Image src={icon} width={150} height={150} alt={title} />
        </div>
        <h3 className="mb-5 mt-10 text-2xl font-semibold text-black dark:text-white xl:text-3xl">
          {title}
        </h3>
        <p className="text-lg">
          {description}
        </p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
