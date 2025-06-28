import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-[#4300FF] text-white py-10 px-5r">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
        {/* Logo and Intro */}
        <div>
          <h3 className="text-4xl font-extrabold mb-2">{'</>'}</h3>
          <p className="font-semibold text-sm leading-relaxed">
            Full-Stack MERN Developer
            <br />
            <br />
            A passionate Front-End Developer skilled in HTML, CSS, JavaScript, React, Tailwind CSS, and Firebase.
            I build responsive, user-friendly web applications with a focus on clean code, performance, and modern UI/UX.
          </p>
        </div>

 

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-bold mb-3">Connect with Me</h4>
          <div className="flex justify-center gap-4 text-2xl">
            <a
              href="https://github.com/shakib-cse"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/md-abu-rayhan-357251232/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:shakibcse333@example.com"
              className="hover:text-gray-300 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

               {/* Quick Links (Optional if you have sections in your site) */}
        <div>
          <h4 className="text-lg font-bold mb-3">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="xp" smooth={true}
          duration={500}
          offset={-70} className="hover:underline hover:text-gray-300 cursor-pointer">About</Link></li>
            <li><Link to="project" smooth={true}
          duration={500}
          offset={-70} className="hover:underline hover:text-gray-300 cursor-pointer">Project</Link></li>
            <li><Link to="home" smooth={true}
          duration={500}
          offset={-70} className="hover:underline hover:text-gray-300 cursor-pointer">Go to Top</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-8 text-center text-sm text-gray-200">
        © {new Date().getFullYear()} — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
