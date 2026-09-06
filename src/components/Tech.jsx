import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-icon",
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".tech-icons-wrapper",
          start: "top 80%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <div>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </div>

      <div className="tech-icons-wrapper mt-12 sm:mt-16 flex flex-row flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
        {technologies.map((technology) => (
          <div
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center rounded-xl bg-tertiary/40 border border-white/5 hover:border-[#915EFF]/40 hover:bg-tertiary/70 transition-all duration-300 hover:scale-110"
            key={technology.name}
            title={technology.name}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className="tech-icon w-[70%] h-[70%] object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
