
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Shield, AlertTriangle } from 'lucide-react';

interface SwotItemProps {
  title: string;
  items: string[];
  icon: React.ReactNode;
  color: string;
  hoverColor: string;
}

const SwotItem: React.FC<SwotItemProps> = ({ title, items, icon, color, hoverColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`rounded-lg p-6 transition-all duration-300 ${color} hover:${hoverColor}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="mr-3 text-2xl">{icon}</div>
          <h3 className="text-lg font-montserrat font-semibold">{title}</h3>
        </div>
        
        <motion.ul 
          className="mt-2 space-y-2 list-disc pl-5"
          animate={{ height: isHovered ? 'auto' : '60px', overflow: isHovered ? 'visible' : 'hidden' }}
          transition={{ duration: 0.3 }}
        >
          {items.map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered || index < 2 ? 1 : 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
        
        {!isHovered && items.length > 2 && (
          <div className="mt-2 text-sm font-medium text-right">
            {items.length - 2} more items...
          </div>
        )}
      </div>
    </motion.div>
  );
};

const SwotAnalysis: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <SwotItem
        title="Strengths"
        items={[
          "Increased employee autonomy",
          "Better work-life balance",
          "Reduced commuting time",
          "Lower office space costs",
          "Access to broader talent pool"
        ]}
        icon={<TrendingUp className="text-emerald-700" />}
        color="bg-emerald-50"
        hoverColor="bg-emerald-100"
      />
      
      <SwotItem
        title="Weaknesses"
        items={[
          "Potential communication barriers",
          "Harder to monitor performance",
          "Team cohesion challenges",
          "Technological infrastructure requirements",
          "Data security concerns"
        ]}
        icon={<TrendingDown className="text-red-700" />}
        color="bg-red-50"
        hoverColor="bg-red-100"
      />
      
      <SwotItem
        title="Opportunities"
        items={[
          "Talent retention improvement",
          "Environmental impact reduction",
          "Innovation through diverse teams",
          "Business continuity enhancement",
          "Organizational culture modernization"
        ]}
        icon={<Shield className="text-blue-700" />}
        color="bg-blue-50"
        hoverColor="bg-blue-100"
      />
      
      <SwotItem
        title="Threats"
        items={[
          "Digital inequality",
          "Legal and regulatory compliance",
          "Workforce disconnection",
          "Productivity monitoring challenges",
          "Work-home boundary erosion"
        ]}
        icon={<AlertTriangle className="text-amber-700" />}
        color="bg-amber-50"
        hoverColor="bg-amber-100"
      />
    </div>
  );
};

export default SwotAnalysis;
