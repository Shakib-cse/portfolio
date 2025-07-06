import React from 'react';

const About = () => {
  return (
    <section
      id="xi"
      className="py-16 px-6 md:px-12 text-gray-200 max-w-7xl mx-auto"
      data-aos="fade-right"
      data-aos-delay="300"
    >
      <div className="bg-[#0f172a]/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-[#4300FF]">
        <h2 className="text-4xl font-bold text-center mb-6 text-[#4300FF]">
          About Me
        </h2>

        <p className="text-lg leading-relaxed text-gray-300 text-justify">
          I began my programming journey in <span className="text-white font-semibold">2022</span> and quickly discovered a passion for
          front-end development. Since then, I've focused on building
          responsive, accessible, and visually engaging web apps using modern tools like{' '}
          <span className="text-[#a5b4fc] font-medium">
            HTML, CSS, JavaScript, React, Tailwind CSS
          </span>{' '}
          and{' '}
          <span className="text-[#a5b4fc] font-medium">Firebase</span>.
          <br /><br />
          I enjoy turning ideas into clean, functional interfaces that provide intuitive
          user experiences. My development style focuses on reusability,
          performance, and thoughtful design patterns.
          <br /><br />
          Outside coding, I love <span className="text-white font-medium">sketching</span>, playing <span className="text-white font-medium">cricket</span>, and reading <span className="text-white font-medium">tech blogs</span> to stay sharp and inspired. I’m
          passionate about creating digital solutions that make a real impact.
        </p>
      </div>
    </section>
  );
};

export default About;
