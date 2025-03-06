"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaUserTie, FaCalendarAlt, FaLaptopCode } from "react-icons/fa";
import { RiCodeBoxFill } from "react-icons/ri";

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Chairman of Student Council of Computer Department",
      period: "2024 - 2025",
      description: "Led the student council in organizing academic and extracurricular activities, representing student interests to faculty, and fostering a collaborative learning environment.",
      icon: <FaUserTie size={30} />,
    },
    {
      title: "Organized a National Level Event – Inspirus",
      period: "October 2024",
      description: "Coordinated a large-scale technical symposium featuring workshops, competitions, and guest lectures from industry experts, attracting participants from across the country.",
      icon: <FaCalendarAlt size={30} />,
    },
    {
      title: "Organized a National Level Workshop – DBCE DreamBig",
      period: "Ongoing",
      description: "Currently leading the organization of a comprehensive workshop series aimed at bridging the gap between academic learning and industry requirements, featuring hands-on sessions on cutting-edge technologies.",
      icon: <FaLaptopCode size={30} />,
    },
    {
      title: "Participated in a State Level Hackathon – Technothon, InternSpirit Hackathon",
      period: "February-March 2025",
      description: "Developed a Smart Attendance System in Technothon, which automates the process of the traditional attendance system."
,
      icon: <RiCodeBoxFill size={30}/>,
    },
  ];

  return (
    <section id="experience" className="section relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Experience</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Here&apos;s a glimpse of my professional journey and leadership roles.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="experience-card rounded-xl p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                    {exp.icon}
                  </div>
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-2">
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <div className="text-blue-400 font-semibold">
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;