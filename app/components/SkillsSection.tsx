"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaTools, FaCloud } from "react-icons/fa";

const SkillsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillBlocks = [
    {
      title: "Programming Languages",
      icon: <FaCode size={30} />,
      skills: ["C", "C++", "Python", "R"],
      size: "sm",
    },
    {
      title: "Frontend Development",
      icon: <FaMobileAlt size={30} />,
      skills: ["React", "Next.js", "XML", "HTML", "Tailwind CSS"],
      size: "md",
    },
    {
      title: "Backend Development",
      icon: <FaServer size={30} />,
      skills: ["PHP", "Flask"],
      size: "sm",
    },
    {
      title: "Databases",
      icon: <FaDatabase size={30} />,
      skills: ["MongoDB", "MySQL"],
      size: "sm",
    },
    {
      title: "DevOps & Tools",
      icon: <FaTools size={30} />,
      skills: ["Git", "Github", "Blender", "Unity", "Figma", "Postman"],
      size: "lg",
    },
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "lg":
        return "col-span-12 md:col-span-6 lg:col-span-4 h-80";
      case "md":
        return "col-span-12 md:col-span-6 lg:col-span-4 h-64";
      case "sm":
        return "col-span-12 md:col-span-6 lg:col-span-4 h-56";
      default:
        return "col-span-12 md:col-span-6 lg:col-span-4 h-64";
    }
  };

  return (
    <section id="skills" className="section relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I&apos;ve worked with a variety of technologies and platforms throughout my career.
            Here&apos;s a glimpse of my technical expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-6">
          {skillBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`skill-block rounded-xl p-6 ${getSizeClasses(block.size)}`}
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 text-blue-400">{block.icon}</div>
                <h3 className="text-xl font-bold">{block.title}</h3>
              </div>
              <ul className="space-y-2">
                {block.skills.map((skill, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;