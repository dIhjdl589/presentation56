
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavItem {
  id: string;
  title: string;
  icon?: React.ReactNode;
}

interface TimelineNavProps {
  sections: NavItem[];
}

const TimelineNav: React.FC<TimelineNavProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Find the section that is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="fixed right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <div className="relative flex flex-col items-center">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2 z-0" />
        
        {sections.map((section, index) => (
          <div key={section.id} className="relative z-10 my-2">
            <motion.button
              className={`flex items-center justify-center relative transition-all duration-300 rounded-full ${
                activeSection === section.id 
                  ? 'bg-blue-600 w-4 h-4 border-2 border-blue-600'
                  : 'bg-white w-3 h-3 border-2 border-blue-400 hover:border-blue-500'
              }`}
              onClick={() => scrollToSection(section.id)}
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="sr-only">{section.title}</span>
              
              {activeSection === section.id && (
                <span className="absolute right-full mr-3 whitespace-nowrap bg-blue-600 text-white text-xs py-1 px-2 rounded opacity-100 transition-opacity">
                  {section.title}
                </span>
              )}
            </motion.button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineNav;
