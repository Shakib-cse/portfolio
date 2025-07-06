import React from 'react';

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 px-6 md:px-12 text-gray-200 max-w-4xl mx-auto"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-[#4300FF]">Education</h2>

      <div className="bg-[#0f172a]/90 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-[#4300FF] hover:shadow-purple-600/40 transition-shadow duration-300">
        <h3 className="text-2xl font-semibold text-[#a5b4fc] mb-2">
          BSc in Computer Science and Engineering
        </h3>
        <p className="text-gray-300 text-lg mb-1">
          Daffodil International University
        </p>
        <p className="text-gray-400 italic">Graduated: 2024</p>
      </div>
    </section>
  );
};

export default Education;
