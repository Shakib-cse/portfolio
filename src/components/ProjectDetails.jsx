import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projectDetails = {
0: {
  title: 'MessMaster',
  stack: [
    'React.js',
    'Tailwind CSS',
    'DaisyUI',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Firebase Auth',
    'React Router',
    'ImageBB',
    'React Hook Form',
    'Chart.js'
  ],
  description:
    'MessMaster is a modern hostel meal and member management platform built for students and hostel admins. It allows meal tracking, user reviews, membership upgrades, admin meal control, and full dashboard systems for users and admins.',
  live: 'https://messmaster-b48cf.firebaseapp.com/',
  github: 'https://github.com/Shakib-cse/MassMaster_Client',
  github_server: 'https://github.com/Shakib-cse/MassMaster_Server',
  challenges: [
    'Designing separate admin and user dashboards with role-based access control.',
    'Managing state and user sessions for meal interactions and review systems.',
    'Handling secure image uploads and real-time status updates for meals and users.'
  ],
  improvements: [
    'Implement Stripe or SSLCOMMERZ for secure membership payments.',
    'Add analytics for daily/weekly/monthly meal tracking and reports.',
    'Enable notifications for upcoming meals or membership expiry.',
    'Introduce dark/light theme toggle for improved accessibility.'
  ]
},

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
    github_server: 'https://github.com/Shakib-cse/roommate-search-server',
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
    github_server: 'https://github.com/Shakib-cse/E-Bikolpo-server',
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
  const project = projectDetails[id];

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-red-500">Project Not Found</h2>
        <Link to="/" className="text-[#4300FF] hover:underline mt-4 inline-block">
          ← Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 px-6 bg-[#F9FAFB] text-[#111827] min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-xl border border-gray-200">
        <h1 className="text-4xl font-bold text-center text-[#4300FF] mb-8">{project.title}</h1>

        {/* Tech Stack */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-[#111827]">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <span
                key={index}
                className="bg-[#4300FF] text-white px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-[#111827]">Description</h2>
          <p className="text-gray-700 leading-relaxed">{project.description}</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#4300FF] text-white px-5 py-2 rounded-md shadow hover:bg-[#2E00CC] transition"
          >
            🔗 Live Site
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-5 py-2 rounded-md shadow hover:bg-gray-700 transition"
          >
            💻 GitHub Client Repository
          </a>
          {project.github_server && (
             <a
            href={project.github_server}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-5 py-2 rounded-md shadow hover:bg-gray-700 transition"
          >
            💻 GitHub Server Repository
          </a>
          )}
        </div>

        {/* Challenges */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-[#111827]">Challenges Faced</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {project.challenges.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Improvements */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-[#111827]">Potential Improvements</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {project.improvements.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Back Link */}
        <div className="mt-10 text-center">
          <Link
            to="/#projects"
            className="text-[#4300FF] hover:underline font-medium transition"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
