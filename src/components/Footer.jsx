import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-12 px-6 mt-16 border-t border-[#4300FF]/30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Logo and Intro */}
        <div>
          <h3 className="text-4xl font-extrabold mb-3 text-[#4300FF]">{'</>'}</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Full-Stack MERN Developer
            <br /><br />
            Passionate Front-End Developer skilled in React, Tailwind CSS, Firebase, and more. I focus on clean code, performance, and intuitive UI/UX.
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Connect with Me</h4>
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            <a
              href="https://github.com/shakib-cse"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/md-abu-rayhan-357251232/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A66C2] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:shakibcse333@gmail.com"
              className="hover:text-red-400 transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="xp"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:underline hover:text-white cursor-pointer"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:underline hover:text-white cursor-pointer"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-70}
                className="hover:underline hover:text-white cursor-pointer"
              >
                Go to Top
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 text-center text-xs text-gray-500 border-t border-gray-700 pt-5">
        © {new Date().getFullYear()} — All rights reserved. Md. Abu Rayhan (Shakib)
      </div>
    </footer>
  );
};

export default Footer;
