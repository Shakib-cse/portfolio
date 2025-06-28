import React from 'react';
import { Link } from 'react-router-dom';

const projectData = [
  {
    id: 1,
    title: 'Roommate Search',
    image: '/project1.png',
    description: 'A modern web app to find roommates using React, Tailwind, and Firebase. Includes user auth, listing system, and real-time updates.',
    link: '/project1'
  },
  {
    id: 2,
    title: 'E-Bikolpo',
    image: '/project2.png',
    description: 'A product recommendation platform built with MERN stack. Features include user queries, real-time recommendations, and JWT-based auth.',
    link: '/project2'
  },
  {
    id: 3,
    title: 'SBox Subscription App',
    image: '/project3.png',
    description: 'A full-stack subscription service platform for buying digital products. Built with React, Node.js, and Stripe integration.',
    link: '/project3'
  }
];
console.log(projectData.id);
const Projects = () => {
    
  return (
    <section id="projects" className="py-10 px-6" data-aos="fade-down-right" data-aos-delay="300">
      <h2 className="text-4xl font-bold text-center mb-12 text-[#4300FF]">Projects</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.02] transition-transform duration-300 border border-gray-200"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-[#111827] mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <Link to={`/project/${project.id}`} className="text-[#4300FF] hover:underline font-medium">
  View More →
</Link>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
