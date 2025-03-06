"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  // Replace with actual user data
  const contactInfo = {
    email: "pjayeshnaidu2510@gmail.com",
    phone: "+91 8010489653",
    location: "Borim-Ponda, Goa",
    whatsapp: "https://wa.me/+918010489653", // Replace with actual WhatsApp link
    github: "https://github.com/25Jayesh10",
    linkedin: "https://www.linkedin.com/in/p-jayesh-naidu-599648255/",
  };

  return (
    <footer id="contact" className="bg-[#000319] border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">Contact Me</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-400 transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-blue-400" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-blue-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="mr-3 text-blue-400" />
                <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-3 text-blue-400" />
                <span>{contactInfo.location}</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href={contactInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <FaGithub />
              </a>
              <a 
                href={contactInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a 
                href={contactInfo.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <FaWhatsapp />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-gray-400">
                Feel free to reach out for collaborations, opportunities, or just to say hello!
              </p>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;