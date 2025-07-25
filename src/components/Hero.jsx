import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-auto md:h-screen mx-auto mb-20 md:mb-0">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-28 md:mt-5 lg:5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="mt-28 md:mt-5 lg:5">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Bilal A</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Turning ideas into seamless mobile apps,<br />
            powerful web apps, and robust backend systems
          </p>
        </div>
      </div>

      <ComputersCanvas />

    </section>
  );
};

export default Hero;
