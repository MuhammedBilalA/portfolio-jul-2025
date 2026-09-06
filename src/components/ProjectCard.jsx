import React, { useEffect, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { github, playstoreIcon, websiteIcon } from "../assets";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_links = {},
  animate = true,
}) => {
  const cardRef = useRef(null);
  const [tiltEnabled, setTiltEnabled] = useState(
    () => typeof window !== "undefined" && window.innerWidth >= 768
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (event) => setTiltEnabled(event.matches);

    setTiltEnabled(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!animate || !cardRef.current) return;

    const el = cardRef.current;
    const tween = gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [animate]);

  return (
    <div ref={cardRef} className="w-full max-w-[360px]">
      <Tilt
        options={{
          max: tiltEnabled ? 45 : 0,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-left rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 gap-2 card-img_hover">
            {source_links?.github && (
              <div
                onClick={() => window.open(source_links.github, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                title="Source Code"
              >
                <img
                  src={github}
                  alt="GitHub"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}

            {source_links?.website && (
              <div
                onClick={() => window.open(source_links.website, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                title="Live Website"
              >
                <img
                  src={websiteIcon}
                  alt="Live Site"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}

            {source_links?.playstore && (
              <div
                onClick={() => window.open(source_links.playstore, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                title="Play Store"
              >
                <img
                  src={playstoreIcon}
                  alt="Play Store"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px] sm:text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </div>
  );
};

export default ProjectCard;
