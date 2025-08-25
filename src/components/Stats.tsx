import React from 'react';

interface StatsProps {
  stats: { label: string; value: number | string }[];
}

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div key={index} className="p-4 bg-white shadow rounded-lg">
          <p className="text-sm font-medium text-gray-500">{stat.label}</p>
          <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Stats;