import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Introduction = () => {
  return (
    <section
      id="home"
      className="py-10 pt-30 flex flex-col justify-center items-center text-center px-4 text-[#111827]"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="bg-gray-50 shadow-xl rounded-2xl p-8 max-w-2xl w-full border border-gray-200">
        <img
          src="/profile.jpg"
          alt="Your Name"
          className="w-32 h-32 rounded-full shadow-md mx-auto mb-4 border-4 border-[#4300FF] object-cover object-[100%]"
        />

        <h1 className="text-4xl font-bold mb-2 text-[#111827]">
          Hi, I'm{" "}
          <span className="text-[#4300FF]">Md. Abu Rayhan (Shakib)</span>
        </h1>
        <p className="text-xl text-gray-600 font-medium mb-4">
          Front-End Developer | Full-Stack MERN Developer
        </p>

        <a
          href="https://drive.google.com/file/d/1Q6CnAECiaKQuKe-POCCLzJ-zwlkLd5VJ/view?usp=sharing"
          download
          className="inline-block bg-[#4300FF] hover:bg-[#2E00CC] text-white px-6 py-2 rounded-full shadow-md transition-transform hover:scale-105"
          target="_blank"
        >
          Download Resume
        </a>

        <div className="mt-6 flex justify-center gap-6 text-2xl text-gray-500">
          <a
            href="https://github.com/shakib-cse"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/md-abu-rayhan-357251232/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0A66C2] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:shakibcse333@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
