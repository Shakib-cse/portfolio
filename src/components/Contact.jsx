import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-10 px-6 text-[#111827] mx-auto shadow-sm"
      data-aos="flip-right" data-aos-delay="300"
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-[#4300FF]">
        Contact Me
      </h2>

      <div className="text-center text-lg text-gray-700 space-y-4">
        <p className="flex items-center justify-center gap-2">
          <FaEnvelope className="text-[#4300FF]" />
          <a
            href="mailto:your.email@example.com"
            className="hover:underline text-[#111827]"
          >
            your.email@example.com
          </a>
        </p>
        <p className="flex items-center justify-center gap-2">
          <FaPhoneAlt className="text-[#4300FF]" /> {'/'} <FaWhatsapp className="text-[#25D366]" />
          <span>+8801775584107</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
