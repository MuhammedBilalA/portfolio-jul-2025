import React, { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import profilePic from "../assets/me/muhammed_bilal_a_1.png";

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
  useGsap(
    cardRef,
    {
      from: { opacity: 0, y: 100, scale: 0.8 },
      to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
    },
    index * 0.2
  );

  return (
    <Tilt className="w-full xs:w-[250px]">
      <div
        ref={cardRef}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useGsap(headingRef, {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 1, ease: "power2.out" },
  });

  useGsap(
    paragraphRef,
    {
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
    },
    0.3
  );

  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-12 mt-6 md:mt-10">
        <div className="flex-1" ref={headingRef}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
          <p
            ref={paragraphRef}
            className="mt-4 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]"
          >
            I'm Head of IT Department at{" "}
            <a
              href="https://www.pixelboho.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#915EFF] hover:underline"
            >
              Pixel Boho
            </a>{" "}
            with 4+ years of experience leading product delivery across Flutter,
            React.js, Next.js, Node.js, Nest.js, and Django. I specialize in
            cross-platform mobile apps, campaign-ready web platforms, scalable
            backends, and DevOps — handling infra and deployments across AWS,
            Azure, Google Cloud (Cloud Run), Hostinger, and GoDaddy — turning
            client needs into production systems with clean architecture and
            strong UX.
          </p>
        </div>

        <div className="flex-1 flex justify-center w-full max-w-sm md:max-w-none">
          <div className="relative group w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden border border-[#915EFF]/40 shadow-lg transition-transform duration-500 hover:scale-[1.02]">
            <img
              src={profilePic}
              alt="Muhammed Bilal A"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 w-full px-4 pb-4">
              <p className="text-white text-sm font-medium tracking-[0.15em]">
                MUHAMMED BILAL A
              </p>
              <p className="text-[#915EFF] text-xs tracking-wider mt-0.5">
                HEAD OF IT DEPARTMENT
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-8 md:gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
