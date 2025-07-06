import React from 'react';
import { Link } from 'react-router-dom';

const projectData = [
  {
    id: 1,
    title: 'Roommate Search',
    image: '/project1.png',
    description:
      'A modern web app to find roommates using React, Tailwind, and Firebase. Includes user auth, listing system, and real-time updates.',
  },
  {
    id: 2,
    title: 'E-Bikolpo',
    image: '/project2.png',
    description:
      'A product recommendation platform built with the MERN stack. Features user queries, real-time recommendations, and JWT-based authentication.',
  },
  {
    id: 3,
    title: 'SBox Subscription App',
    image: '/project3.png',
    description:
      'A full-stack subscription service for buying digital products. Built with React, Node.js, and integrated Stripe payments.',
  },
];

const Projects = () => {
  return (
    <section
    id='xp'
      className="py-16 px-6 md:px-12 text-gray-200"
      data-aos="fade-down-right"
      data-aos-delay="300"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-[#4300FF]">
        Projects
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projectData.map((project) => (
          <div
            key={project.id}
            className="bg-[#0f172a]/90 backdrop-blur-md rounded-2xl border border-[#4300FF] shadow-lg hover:shadow-purple-700/40 transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-[#a5b4fc] mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                {project.description}
              </p>
              <Link
                to={`/project/${project.id}`}
                className="text-[#4300FF] hover:underline font-medium"
              >
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
