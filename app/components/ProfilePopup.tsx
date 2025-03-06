"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaTimes } from "react-icons/fa";
import Image from "next/image";

const ProfilePopup = ({ onClose }: { onClose: () => void }) => {
  // Replace with actual user data
  const userData = {
    name: "P Jayesh Naidu",
    title: "Computer Engineer",
    email: "pjayeshnaidu2510@gmail.com",
    phone: "+91 8010489653",
    location: "Borim-Ponda, Goa",
    whatsapp: "https://wa.me/+918010489653", // Replace with actual WhatsApp link
    bio: "Passionate developer with expertise in web development and software engineering. Currently pursuing a degree in Computer Science with a focus on modern web technologies and AI applications."
  };

  return (
    <section id="profile" className="mt-4">
      <div className="fixed inset-0 z-50 flex items-center justify-center popup-overlay">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="popup-content relative w-full max-w-md p-8 rounded-xl shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <FaTimes size={24} />
          </button>

          <div className="text-center mb-6">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold mb-4">
              <Image
                src="/DSC_8982.JPG"
                alt="User Avatar"
                width={200} height={200}
                className="w-full h-full rounded-full object-cover bg-gradient-to-r from-blue-400 to-purple-500"
              />

            </div>
            <h2 className="text-2xl font-bold">{userData.name}</h2>
            <p className="text-blue-400">{userData.title}</p>
          </div>

          <div className="space-y-4 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-1 text-center">About Me</h3>
              <p className="text-gray-300">{userData.bio}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-1 text-center">Contact Information</h3>
              <p className="text-gray-300">Email: {userData.email}</p>
              <p className="text-gray-300">Phone: {userData.phone}</p>
              <p className="text-gray-300">Location: {userData.location}</p>
            </div>
          </div>

          <div className="flex space-x-4">
            <a
              href={userData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg flex items-center justify-center"
            >
              <FaWhatsapp className="mr-2" /> Contact via WhatsApp
            </a>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${userData.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg flex items-center justify-center"
            >
              <FaEnvelope className="mr-2" /> Contact via Email
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfilePopup;