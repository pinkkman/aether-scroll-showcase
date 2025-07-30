import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader";
import CustomCursor from "../components/CustomCursor";
import BackgroundAnimation from "../components/BackgroundAnimation";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Disable scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <div className="relative">
      <AnimatePresence>
        {isLoading && <Preloader onLoadComplete={handleLoadComplete} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          <BackgroundAnimation />
          
          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
          </main>
        </>
      )}
    </div>
  );
};

export default Index;
