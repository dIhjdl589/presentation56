
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const initialData = [
  {
    name: 'Flexible Hours',
    productivity: 12,
    satisfaction: 22,
  },
  {
    name: 'Remote Work',
    productivity: 18,
    satisfaction: 27,
  },
  {
    name: 'Compressed Week',
    productivity: 15,
    satisfaction: 19,
  },
  {
    name: 'Job Sharing',
    productivity: 8,
    satisfaction: 14,
  },
];

interface ComparisonChartProps {
  className?: string;
}

const ComparisonChart: React.FC<ComparisonChartProps> = ({ className = '' }) => {
  const [data, setData] = useState(initialData);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 shadow-md rounded-md border border-gray-200">
          <p className="font-medium text-gray-800">{label}</p>
          <p className="text-blue-600">
            Productivity: <span className="font-semibold">{payload[0].value}%</span>
          </p>
          <p className="text-teal-600">
            Satisfaction: <span className="font-semibold">{payload[1].value}%</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={`w-full h-[400px] ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#4B5563', fontFamily: 'Open Sans' }}
            tickLine={false}
            axisLine={{ stroke: '#E5E7EB' }}
            angle={-45}
            textAnchor="end"
            height={70}
          />
          <YAxis 
            tick={{ fill: '#4B5563', fontFamily: 'Open Sans' }}
            tickLine={false}
            axisLine={{ stroke: '#E5E7EB' }}
            unit="%"
          />
          <Tooltip content={<CustomTooltip />} cursor={{ opacity: 0.2 }} />
          <Legend 
            wrapperStyle={{ 
              paddingTop: 20,
              fontFamily: 'Open Sans'
            }}
          />
          <Bar 
            dataKey="productivity" 
            name="Productivity Improvement" 
            fill="#0066cc" 
            radius={[4, 4, 0, 0]}
            onMouseEnter={(data, index) => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            animationDuration={2000}
          />
          <Bar 
            dataKey="satisfaction" 
            name="Employee Satisfaction" 
            fill="#00afaf" 
            radius={[4, 4, 0, 0]}
            onMouseEnter={(data, index) => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            animationDuration={2000}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComparisonChart;
