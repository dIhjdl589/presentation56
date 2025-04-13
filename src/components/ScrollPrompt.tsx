
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ScrollPromptProps {
  targetId: string;
  className?: string;
  text?: string;
  iconColor?: string;
}

const ScrollPrompt: React.FC<ScrollPromptProps> = ({ 
  targetId, 
  className = '', 
  text = 'Défiler pour explorer', 
  iconColor = 'text-blue-500' 
}) => {
  const scrollToTarget = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className={`flex flex-col items-center cursor-pointer ${className}`}
      onClick={scrollToTarget}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <span className="text-xs text-gray-500 mb-1">{text}</span>
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className={`${iconColor} w-5 h-5`} />
      </motion.div>
    </motion.div>
  );
};

export default ScrollPrompt;
