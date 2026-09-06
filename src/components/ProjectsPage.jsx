import React from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { projects } from "../constants";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="relative z-0 min-h-screen bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>

      <main className={`${styles.padding} max-w-7xl mx-auto pt-28 sm:pt-32 pb-16`}>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-secondary hover:text-white text-sm font-medium transition-colors duration-200 mb-8"
        >
          <span>&larr;</span>
          <span>Back to Home</span>
        </Link>

        <p className={styles.sectionSubText}>Portfolio</p>
        <h1 className={styles.sectionHeadText}>All Projects.</h1>
        <p className="mt-4 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]">
          Full list of selected delivery work — platforms, apps, campaign systems,
          and production deployments across web, mobile, and backend.
        </p>

        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={`all-project-${project.name}-${index}`}
              className="w-full max-w-[360px]"
            >
              <ProjectCard {...project} animate={false} />
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
