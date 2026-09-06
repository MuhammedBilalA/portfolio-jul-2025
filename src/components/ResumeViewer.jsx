import React from "react";
import { Link } from "react-router-dom";

const ResumeViewer = () => (
  <div className="min-h-screen flex items-center justify-center bg-primary bg-hero-pattern bg-cover bg-no-repeat bg-center p-4">
    <div className="relative w-full max-w-3xl bg-[#181824]/90 rounded-2xl shadow-2xl border border-[#915EFF]/50 flex flex-col items-center px-4 md:px-10 py-8">
      <Link
        to="/"
        className="absolute top-4 left-4 md:top-6 md:left-6 text-secondary hover:text-white text-sm font-medium transition-colors duration-200"
      >
        &larr; Back to Home
      </Link>

      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 tracking-tight text-center mt-6 md:mt-2">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#915EFF] to-[#7a4fd6]">
          My Resume
        </span>
      </h1>
      <p className="text-white/80 mb-6 text-center text-base md:text-lg max-w-xl">
        View or download my professional resume below.
      </p>
      <div className="w-full h-[65vh] md:h-[70vh] rounded-xl overflow-hidden border border-[#915EFF]/40 shadow-lg mb-8 flex items-center justify-center bg-[#23234b]/60">
        <iframe
          src="/MuhammedBilalAResume.pdf#toolbar=0"
          title="Resume"
          className="w-full h-full border-none rounded-xl"
          frameBorder="0"
        />
      </div>
      <a
        href="/MuhammedBilalAResume.pdf"
        download
        className="mt-2 px-8 py-3 bg-[#915EFF] hover:bg-[#7a4fd6] text-white font-bold rounded-xl shadow-lg shadow-[#915EFF]/25 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#915EFF] text-lg"
        aria-label="Download Resume PDF"
      >
        Download Resume
      </a>
    </div>
  </div>
);

export default ResumeViewer;
