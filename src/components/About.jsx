import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  useGsap(cardRef, {
    from: { opacity: 0, y: 100, scale: 0.8 },
    to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
  }, index * 0.2);

  return (
    <Tilt className="xs:w-[250px] w-full">
      <div ref={cardRef} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  // Heading Animation
  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  // Paragraph Animation
  useGsap(paragraphRef, {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
  }, 0.3);

  return (
    <>
     <div className="flex flex-col md:flex-row items-center gap-8 mt-10">
  {/* Left Side - Text */}
  <div className="flex-1" ref={headingRef}>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview.</h2>
    <p ref={paragraphRef} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I’m a software developer with 2.8 years of professional experience in Flutter, React.js, Node.js, and Nest.js.  
      I specialize in building cross-platform mobile applications, responsive web interfaces, and scalable backend systems.  
      With a focus on clean architecture, performance, and user experience, I help turn business ideas into impactful digital solutions.
    </p>
  </div>

  {/* Right Side - Aggressive Card */}
  <div className="flex-1 flex justify-center">
    <div className="relative group w-72 h-80 p-[4px] bg-gradient-to-r from-purple-700 via-pink-500 to-blue-500 shadow-2xl rounded-[4px] hover:scale-110 transition-transform duration-300">
      <div
        className="relative w-full h-full bg-[#0f0f0f] overflow-hidden rounded-[2px] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_#ff00ff]"
        style={{
          clipPath: 'polygon(0 0, 90% 0, 100% 10%, 100% 100%, 10% 100%, 0 90%)',
        }}
      >
        <img
          src="/src/assets/profilepic.jpg"
          alt="Muhammed Bilal"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Flash on Hover */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-150"></div>
        {/* Neon Top Pulse Line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse"></div>
      </div>
    </div>
  </div>
</div>




    </>
  );
};

export default SectionWrapper(About, "about");
