import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
// import profilePic from '../assets/profilepic.jpg';
import profilePic from '../assets/BilalProfilePic.png';

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
            I'm a software developer with 2.8 years of professional experience in Flutter, React.js, Node.js, and Nest.js.  
            I specialize in building cross-platform mobile applications, responsive web interfaces, and scalable backend systems.  
            With a focus on clean architecture, performance, and user experience, I help turn business ideas into impactful digital solutions.
          </p>
        </div>

        {/* Right Side - Professional Profile Card */}
        <div className="flex-1 flex justify-center">
          <div className="relative group w-80 h-96 p-[3px] bg-gradient-to-br from-slate-600 via-gray-700 to-black shadow-2xl rounded-lg hover:scale-105 transition-all duration-500">
            <div
              className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black overflow-hidden rounded-lg transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              style={{
                clipPath: 'polygon(0 0, 95% 0, 100% 5%, 100% 100%, 5% 100%, 0 95%)',
              }}
            >
              {/* Professional suit photo */}
              <img
                src={profilePic}
                alt="Muhammed Bilal"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 filter brightness-110 contrast-110"
                style={{
                  filter: 'brightness(1.1) contrast(1.2) saturate(0.9)'
                }}
              />
              
              {/* Subtle overlay for professional look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              
              {/* Professional glow on hover */}
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              
              {/* Elegant top accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gray-400 via-white to-gray-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Corner accent */}
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-white/40 group-hover:border-white/80 transition-colors duration-300"></div>
              
              {/* Bottom professional nameplate effect */}
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/90 to-transparent flex flex-col items-center justify-end pb-3">
                <div className="text-white text-xs font-light tracking-[0.2em] opacity-70 group-hover:opacity-100 transition-opacity duration-300 mb-1">
                  MUHAMMED BILAL
                </div>
                <div className="text-gray-300 text-[10px] font-light tracking-wider opacity-50 group-hover:opacity-80 transition-opacity duration-300">
                  SOFTWARE ENGINEER
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");