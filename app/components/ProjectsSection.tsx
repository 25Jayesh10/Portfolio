"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaGithub,
  FaLock,
  FaUserGraduate,
  FaCalendarCheck,
  FaPaw,
} from "react-icons/fa";

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "Student Information System",
      description:
        "A comprehensive platform for educational institutions to manage student data, academic records, attendance, and communication between students, teachers, and parents.",
      icon: <FaUserGraduate size={40} />,
      githubUrl: "https://github.com/25Jayesh10/Student-Information-System",
      color: "from-green-500 to-teal-600",
      showGithub: true,
    },
    {
      title: "Smart Attendance System",
      description:
        "An automated attendance tracking system using facial recognition technology, designed to streamline the attendance process in educational institutions and corporate environments.",
      icon: <FaCalendarCheck size={40} />,
      githubUrl: "https://github.com/25Jayesh10/Smart-Attendance-System",
      color: "from-orange-500 to-red-600",
      showGithub: true,
    },
    {
      title: "Stray Animal Welfare System",
      description:
        "A platform connecting animal shelters, veterinarians, and volunteers to coordinate rescue operations, medical care, and adoption processes for stray animals.",
      icon: <FaPaw size={40} />,
      githubUrl: "https://github.com/25Jayesh10/Pawsnet",
      color: "from-pink-500 to-rose-600",
      showGithub: true,
    },
    {
      title: "Password Manager System",
      description:
        "A secure password management solution with end-to-end encryption, allowing users to store, generate, and manage their passwords across multiple devices.",
      icon: <FaLock size={40} />,
      color: "from-blue-500 to-purple-600",
      githubUrl: "https://github.com/25Jayesh10/PasswordManager",
      showGithub: true,
    },
  ];

  return (
    <section id="projects" className="section relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project
            represents a unique challenge and solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card rounded-xl overflow-hidden"
            >
              <div
                className={`h-40 bg-gradient-to-r ${project.color} flex items-center justify-center`}
              >
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                {project.showGithub && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#24292e] hover:bg-[#2c3137] text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    <FaGithub className="mr-2" /> View on GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;