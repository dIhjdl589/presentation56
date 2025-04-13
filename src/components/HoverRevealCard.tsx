
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HoverRevealCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

const HoverRevealCard: React.FC<HoverRevealCardProps> = ({
  title,
  description,
  icon,
  className = '',
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' }}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center mb-4">
          {icon && <div className="text-blue-500 mr-3 text-2xl">{icon}</div>}
          <h3 className="text-lg font-montserrat font-semibold text-gray-800">{title}</h3>
        </div>
        
        <motion.div 
          className="mt-2 text-gray-600"
          initial={{ opacity: 0, height: 0 }}
          animate={isHovered ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p>{description}</p>
        </motion.div>
        
        <div className="mt-auto pt-4 flex justify-end">
          <span className="text-blue-500 text-sm font-medium">
            {isHovered ? "Less" : "Learn more"}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default HoverRevealCard;
