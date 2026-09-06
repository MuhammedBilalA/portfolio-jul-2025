import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { showResume } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full h-auto md:h-screen mx-auto mb-0 pb-0">
      <div
        className={`relative md:absolute md:inset-0 pt-28 sm:pt-32 md:pt-0 md:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10 pointer-events-none`}
      >
        <div className="flex flex-col justify-center items-center mt-2 md:mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-32 violet-gradient" />
        </div>

        <div className="mt-2 md:mt-5 pointer-events-auto">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Bilal A</span>
          </h1>
          <p className="mt-2 text-[#915EFF] font-medium text-[15px] sm:text-[18px] tracking-wide">
            Head of IT Department · Pixel Boho
          </p>
          <p className={`${styles.heroSubText} mt-3 text-white-100`}>
            Turning ideas into seamless mobile apps,
            <br className="sm:block hidden" />
            powerful web apps, and robust backend systems
          </p>

          <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
            <a
              href="#work"
              className="px-6 py-3 rounded-xl bg-[#915EFF] text-white font-semibold text-[15px] sm:text-[16px] hover:bg-[#7a4fd6] transition-colors duration-200 shadow-lg shadow-[#915EFF]/25"
            >
              View Work
            </a>
            {showResume && (
              <Link
                to="/resume"
                className="px-6 py-3 rounded-xl border border-[#915EFF]/70 text-white font-semibold text-[15px] sm:text-[16px] hover:bg-[#915EFF]/15 transition-colors duration-200"
              >
                Resume
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="w-full h-[280px] xs:h-[320px] sm:h-[360px] md:h-full mt-2 md:mt-0 overflow-hidden">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-6 w-full flex justify-center items-center z-10">
        <a href="#about" className="hidden md:flex">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
