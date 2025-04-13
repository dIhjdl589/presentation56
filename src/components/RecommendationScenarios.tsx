
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, 
  Users, 
  Clock, 
  Compass, 
  User, 
  Home, 
  BarChart, 
  Calendar, 
  Clock3
} from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  steps: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

const scenarios: Scenario[] = [
  {
    id: 'large-company',
    title: 'Large Corporation',
    description: 'Strategic implementation for enterprises with 250+ employees',
    icon: <Building className="w-5 h-5" />,
    steps: [
      {
        title: 'Pilot Program',
        description: 'Start with a 3-month pilot in one department to evaluate effectiveness and gather feedback.',
        icon: <Compass className="w-5 h-5" />
      },
      {
        title: 'Hybrid Model',
        description: 'Implement a 3-2 office/remote split with core hours of 10am-3pm for synchronous work.',
        icon: <Home className="w-5 h-5" />
      },
      {
        title: 'Digital Infrastructure',
        description: 'Deploy enterprise collaboration tools with formal training and support channels.',
        icon: <BarChart className="w-5 h-5" />
      }
    ]
  },
  {
    id: 'sme',
    title: 'Small & Medium Enterprises',
    description: 'Adaptable solutions for businesses with 10-249 employees',
    icon: <Users className="w-5 h-5" />,
    steps: [
      {
        title: 'Team Assessment',
        description: 'Conduct role suitability analysis and employee preference surveys before implementation.',
        icon: <User className="w-5 h-5" />
      },
      {
        title: 'Flexible Hours',
        description: 'Implement staggered shifts and flexible start/end times while maintaining coverage.',
        icon: <Clock className="w-5 h-5" />
      },
      {
        title: 'Outcome Focus',
        description: 'Shift to results-based performance metrics rather than hours-based evaluation.',
        icon: <BarChart className="w-5 h-5" />
      }
    ]
  },
  {
    id: 'public-sector',
    title: 'Public Sector',
    description: 'Compatible frameworks for government agencies and public services',
    icon: <Clock3 className="w-5 h-5" />,
    steps: [
      {
        title: 'Service Continuity',
        description: 'Ensure citizen service availability with rotating schedules and digital appointments.',
        icon: <Calendar className="w-5 h-5" />
      },
      {
        title: 'Policy Framework',
        description: 'Develop clear protocols for remote work eligibility, security requirements, and accountability.',
        icon: <Clock className="w-5 h-5" />
      },
      {
        title: 'Phased Rollout',
        description: 'Implement changes gradually over 12 months with regular evaluation checkpoints.',
        icon: <BarChart className="w-5 h-5" />
      }
    ]
  }
];

const RecommendationScenarios: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<string>(scenarios[0].id);

  const currentScenario = scenarios.find(s => s.id === activeScenario) || scenarios[0];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {scenarios.map(scenario => (
          <button
            key={scenario.id}
            className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 ${
              activeScenario === scenario.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-blue-50'
            }`}
            onClick={() => setActiveScenario(scenario.id)}
          >
            <span className="mr-2">{scenario.icon}</span>
            <span className="font-medium">{scenario.title}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeScenario}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-6 bg-blue-50 border-b border-blue-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg text-white">
                {currentScenario.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800">{currentScenario.title}</h3>
                <p className="text-blue-600">{currentScenario.description}</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="relative pl-8 before:content-[''] before:absolute before:left-3 before:top-0 before:bottom-0 before:w-0.5 before:bg-blue-200">
              {currentScenario.steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="mb-8 last:mb-0 relative"
                >
                  <div className="absolute left-[-32px] bg-white rounded-full p-1.5 border-2 border-blue-400">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RecommendationScenarios;
