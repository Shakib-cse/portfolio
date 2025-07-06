import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Introduction = () => {
  return (
    <section
      id="home"
      className="py-10 pt-30 flex flex-col justify-center items-center text-center px-4 text-gray-100"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="max-w-2xl w-full bg-[#0f172a]/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-[#4300FF] hover:shadow-purple-600/40 transition-shadow duration-300">
        <img
          src="/profile.jpg"
          alt="Md. Abu Rayhan (Shakib)"
          className="w-32 h-32 rounded-full shadow-md mx-auto mb-4 border-4 border-[#4300FF] object-cover object-[100%]"
        />

        <h1 className="text-4xl font-bold mb-2 text-white">
          Hi, I'm{" "}
          <span className="text-[#4300FF]">Md. Abu Rayhan (Shakib)</span>
        </h1>
        <p className="text-xl text-[#a5b4fc] font-medium mb-4">
          Front-End Developer | Full-Stack MERN Developer
        </p>

        <a
          href="https://drive.google.com/file/d/1pU3nSsnWu0nCWKxXK-wd5UertsoiecOX/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#4300FF] hover:bg-[#2E00CC] text-white px-6 py-2 rounded-full shadow-md transition-transform hover:scale-105"
        >
          Download Resume
        </a>

        <div className="mt-6 flex justify-center gap-6 text-3xl text-[#a5b4fc]">
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
            href="https://www.linkedin.com/in/md-abu-rayhan-shakib/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2] transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:shakibcse333@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
