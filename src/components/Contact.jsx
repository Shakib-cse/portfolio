import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 px-6 md:px-12 text-gray-200 max-w-4xl mx-auto"
      data-aos="flip-right"
      data-aos-delay="300"
    >
      <div className="bg-[#0f172a]/90 backdrop-blur-md rounded-2xl border border-[#4300FF] p-10 shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#4300FF]">
          Contact Me
        </h2>

        <div className="text-center text-lg space-y-6">
          <p className="flex items-center justify-center gap-3 text-gray-300">
            <FaEnvelope className="text-[#4300FF]" />
            <a
              href="mailto:shakibcse333@gmail.com"
              className="hover:underline hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              shakibcse333@gmail.com
            </a>
          </p>

          <p className="flex items-center justify-center gap-3 text-gray-300">
            <FaPhoneAlt className="text-[#4300FF]" /> / <FaWhatsapp className="text-[#25D366]" />
            <span>+8801775584107</span>
          </p>

          <p className="flex items-center justify-center gap-3 text-gray-300">
            <FaWhatsapp className="text-[#25D366]" />
            <a
              href="https://wa.me/8801775584107"
              className="hover:underline hover:text-white transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Me
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
