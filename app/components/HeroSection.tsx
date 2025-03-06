"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";


const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="home" className="section relative flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="bg-dots"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block">Hello, I&apos;m</span>
              <span className="block text-blue-400">P Jayesh Naidu</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Full Stack Developer & Computer Engineering Student
            </p>
            <p className="text-gray-400 mb-8 max-w-lg">
            I&apos;m passionate about creating innovative solutions through code. With expertise in multiple programming languages and platforms, I build responsive and user-friendly applications that solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Image Wrapper */}
              <Image
                src="/DSC_8982.JPG"
                alt="User Avatar"
                width={320} 
  height={320}
                className="w-full h-full rounded-full object-cover"
              />

              {/* Gradient Glow Effect */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-50 blur-md -z-10"></div>
            </div>


          </motion.div>
        </div>
      </div >
    </section >
  );
};

export default HeroSection;