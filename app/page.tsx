import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import InteractiveBackground from "./components/InteractiveBackground";

export default function Home() {
  return (
    <>
      <InteractiveBackground />
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <Footer />
    </>
  );
}