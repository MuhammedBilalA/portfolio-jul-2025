import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks, showResume } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const visibleNavLinks = navLinks.filter(
    (nav) => showResume || nav.id !== "resume"
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 sm:py-5 fixed top-0 z-20 transition-colors duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-sm border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            <span className="md:hidden">Bilal</span>
            <span className="hidden md:block">Muhammed Bilal A</span>
          </p>
        </Link>

        <ul className="list-none hidden md:flex flex-row gap-6 lg:gap-8 items-center">
          {visibleNavLinks.map((nav) =>
            nav.url ? (
              <li key={nav.id}>
                <Link
                  to={nav.url}
                  onClick={() => setActive(nav.title)}
                  className="text-secondary hover:text-white text-[16px] font-medium transition-colors duration-200 border border-[#915EFF]/50 hover:border-[#915EFF] px-4 py-1.5 rounded-lg"
                >
                  {nav.title}
                </Link>
              </li>
            ) : (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[16px] font-medium cursor-pointer transition-colors duration-200`}
              >
                <Link
                  to={`/#${nav.id}`}
                  onClick={() => setActive(nav.title)}
                >
                  {nav.title}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[180px] z-10 rounded-xl border border-white/10`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {visibleNavLinks.map((nav) =>
                nav.url ? (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] py-1 ${
                      active === nav.title ? "text-white" : "text-secondary"
                    } hover:text-white`}
                  >
                    <Link
                      to={nav.url}
                      onClick={() => {
                        setToggle(false);
                        setActive(nav.title);
                      }}
                    >
                      {nav.title}
                    </Link>
                  </li>
                ) : (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] py-1 ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  >
                    <Link
                      to={`/#${nav.id}`}
                      onClick={() => {
                        setToggle(false);
                        setActive(nav.title);
                      }}
                    >
                      {nav.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
