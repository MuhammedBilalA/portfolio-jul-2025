import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const INITIAL_PROJECT_COUNT = 6;

const Works = () => {
  const visibleProjects = projects.slice(0, INITIAL_PROJECT_COUNT);
  const hasMore = projects.length > INITIAL_PROJECT_COUNT;

  useEffect(() => {
    const tween = gsap.fromTo(
      ".project-card",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".works-container",
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );

    ScrollTrigger.refresh();

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]">
          Selected work from leading delivery at Pixel Boho, plus earlier product
          builds across mobile, web, and backend. These projects show scalable
          platforms, campaign systems, and production-ready apps from concept to
          hosting.
        </p>
      </div>

      <div className="works-container mt-14 sm:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 sm:gap-8">
        {visibleProjects.map((project, index) => (
          <div
            key={`project-${project.name}-${index}`}
            className="project-card w-full max-w-[360px]"
          >
            <ProjectCard {...project} animate={false} />
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 flex justify-center px-2">
          <Link
            to="/projects"
            className="group inline-flex items-center justify-center gap-3 w-full max-w-xs sm:w-auto px-7 py-3.5 rounded-full border border-[#915EFF]/70 text-white font-semibold text-[15px] sm:text-[16px] bg-transparent hover:bg-[#915EFF]/15 hover:border-[#915EFF] transition-all duration-200"
          >
            <span>View all projects</span>
            <span className="text-[#915EFF] transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "projects");
