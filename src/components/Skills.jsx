import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-10 px-6" data-aos="fade-left" data-aos-delay="300">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#4300FF]">Skills</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <SkillCard title="Frontend" skills={["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Bootstarp"]} />
        <SkillCard title="Backend" skills={["Node.js", "Express.js","MongoDB"]} />
        <SkillCard title="Tools & Services" skills={["Git", "GitHub", "Firebase", "VS Code", "Netlify", "vercel", "Surge", "Vite"]} />
      </div>
    </section>
  );
};

const SkillCard = ({ title, skills }) => (
  <div className="bg-gray-50 rounded-xl shadow-md p-6 transition-transform hover:scale-105 duration-300 border border-gray-200">
    <h3 className="text-2xl font-semibold mb-4 text-[#4300FF]">{title}</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-1 text-[17px]">
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </div>
);

export default Skills;
