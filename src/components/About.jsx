import React from 'react';

const About = () => {
  return (
    <div
      id='xp'
      className="py-10 px-6 md:px-12 text-[#111827] mx-auto shadow-sm"
      data-aos="fade-right" data-aos-delay="300"
    >
      <h2 className="text-4xl font-bold text-center mb-6 text-[#4300FF]">
        About Me
      </h2>

      <p className="text-lg leading-relaxed text-gray-700 text-justify">
        I started my programming journey in 2022 and quickly fell in love with
        front-end development. Since then, I’ve dedicated myself to building
        responsive, accessible, and visually engaging web applications using
        modern tools like{' '}
        <span className="text-[#4300FF] font-semibold">
          HTML, CSS, JavaScript, React, Tailwind CSS
        </span>{' '}
        and{' '}
        <span className="text-[#4300FF] font-semibold">Firebase</span>.
        <br />
        <br />
        I enjoy translating ideas into interactive user interfaces, ensuring
        that the user experience is both intuitive and polished. My coding
        philosophy is rooted in clean structure, reusable components, and
        performance optimization.
        <br />
        <br />
        Outside of tech, I love sketching, playing cricket, and reading tech
        blogs to stay updated with the latest trends. My goal is to build
        meaningful digital products that solve real-world problems and leave a
        positive impact.
      </p>
    </div>
  );
};

export default About;
