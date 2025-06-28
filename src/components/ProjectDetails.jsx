import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projectDetails = {
  1: {
    title: 'Roommate Search',
    stack: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'DaisyUI',
      'Firebase Auth',
      'Firebase Firestore',
      'React Router',
      'Swiper.js',
      'Lottie Animations'
    ],
    description:
      'A responsive and user-friendly roommate-finding platform designed for students and working professionals. It allows users to post and search for roommate listings with real-time updates, secure authentication, and modern UI components.',
    live: 'https://roommate-search-cea35.web.app/',
    github: 'https://github.com/Shakib-cse/roommate-search-client',
    challenges: [
      'Implementing real-time data synchronization using Firebase Firestore.',
      'Managing form validation and update modals with dynamic user feedback.',
      'Handling route protection and maintaining user sessions using Firebase Auth.'
    ],
    improvements: [
      'Integrate real-time chat or messaging between users.',
      'Add location-based filtering and map integration.',
      'Enable user profile customization with image uploads and bio sections.',
      'Implement bookmarking or favorite listings feature for better user experience.'
    ]
  },

  2: {
    title: 'E-Bikolpo - Product Boycott & Recommendation Platform',
    stack: [
      'React.js',
      'Tailwind CSS',
      'DaisyUI',
      'Firebase Auth',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'React Router',
      'Lottie Animations',
      'Swiper.js'
    ],
    description:
      'E-Bikolpo is a community-driven platform where users can share product boycott queries and recommend ethical or alternative products. The platform includes real-time updates, authentication, query tracking, and user-based recommendations to promote informed purchasing decisions.',
    live: 'https://e-bikolpo.web.app/',
    github: 'https://github.com/Shakib-cse/E-Bikolpo-client',
    challenges: [
      'Designing a scalable query-recommendation structure with nested data.',
      'Implementing JWT authentication and protecting private API routes.',
      'Synchronizing real-time user-specific data between frontend and backend.',
      'Maintaining a clean UI while handling multiple user flows (queries, recommendations, comments).'
    ],
    improvements: [
      'Add upvote/downvote and reporting features for queries and recommendations.',
      'Enable search and filtering by product type, category, or user tags.',
      'Integrate social sharing and user badges for contribution levels.',
      'Improve analytics/dashboard for query performance and recommendation engagement.'
    ]
  },

  3: {
    title: 'SBox - Digital Subscription Service Platform',
    stack: [
      'React.js',
      'Tailwind CSS',
      'Firebase Auth',
      'React Router',
      'DaisyUI'
    ],
    description:
      'SBox is a full-stack web application that allows users to subscribe to and manage access to various digital services and tools. It features user authentication, role-based access (admin/user), product listings, and secure payment integration using Stripe.',
    live: 'https://roommate-search-cea35.web.app/', 
    github: 'https://github.com/Shakib-cse/SBox',
    challenges: [
      'Integrating Stripe payment gateway for secure subscription handling.',
      'Managing admin and user roles with protected routes and JWT auth.',
      'Building a dynamic dashboard with separate logic for users and admins.',
      'Ensuring secure communication between frontend and backend with proper token handling.'
    ],
    improvements: [
      'Add subscription history and invoice download features.',
      'Enable trial plans and limited-time promotions for services.',
      'Integrate email notifications for renewals and status changes.',
      'Improve UX for managing multiple active subscriptions and billing info.'
    ]
  }
};


const ProjectDetails = () => {
  const { id } = useParams();
  console.log(id);
  const project = projectDetails[id];

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-red-500">Project Not Found</h2>
        <Link to="/" className="text-[#4300FF] hover:underline mt-4 block">
          ← Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 px-6 mx-auto bg-[#F9FAFB] shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-[#4300FF] text-center">{project.title}</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#111827] mb-2">Tech Stack</h2>
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech, index) => (
            <li
              key={index}
              className="bg-[#4300FF] text-white px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#111827] mb-2">Description</h2>
        <p className="text-gray-700">{project.description}</p>
      </div>

      <div className="mb-6 space-x-4">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#4300FF] text-white px-4 py-2 rounded hover:bg-[#2e00cc] transition mb-1"
        >
          🔗 Live Site
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition mb-1"
        >
          💻 GitHub (Client)
        </a>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#111827] mb-2">Challenges Faced</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {project.challenges.map((challenge, idx) => (
            <li key={idx}>{challenge}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-[#111827] mb-2">Potential Improvements</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {project.improvements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectDetails;
