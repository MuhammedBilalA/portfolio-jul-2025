import React from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-black-100/55 text-white flex flex-col items-center gap-4">
      <div className="flex justify-center gap-6">
        <a
          href="https://www.instagram.com/black.__bee_?igsh=OGdjcnR0N2phNHo="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-secondary hover:text-[#915EFF] transition-colors duration-200"
        >
          <FaInstagram size={22} />
        </a>
        <a
          href="https://wa.me/918606708772"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-secondary hover:text-[#915EFF] transition-colors duration-200"
        >
          <FaWhatsapp size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammedbilala/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-secondary hover:text-[#915EFF] transition-colors duration-200"
        >
          <FaLinkedin size={22} />
        </a>
      </div>
      <p className="text-secondary text-sm tracking-wide">
        &copy; 2026 Muhammed Bilal A
      </p>
    </footer>
  );
};

export default Footer;
