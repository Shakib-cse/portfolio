import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 md:px-12" data-aos="fade-left" data-aos-delay="300">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#4300FF]">Skills</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <SkillCard title="Frontend" skills={["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstrap"]} />
        <SkillCard title="Backend" skills={["Node.js", "Express.js", "MongoDB"]} />
        <SkillCard title="Tools & Services" skills={["Git", "GitHub", "Firebase", "VS Code", "Netlify", "Vercel", "Surge", "Vite"]} />
      </div>
    </section>
  );
};

const SkillCard = ({ title, skills }) => (
  <div className="bg-[#0f172a]/90 backdrop-blur-md text-gray-200 rounded-2xl border border-[#4300FF] p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-purple-700/40 duration-300">
    <h3 className="text-2xl font-semibold mb-4 text-[#a5b4fc]">{title}</h3>
    <ul className="list-disc list-inside space-y-1 text-base text-gray-300">
      {skills.map((skill) => (
        <li key={skill} className="hover:text-white transition">{skill}</li>
      ))}
    </ul>
  </div>
);

export default Skills;
