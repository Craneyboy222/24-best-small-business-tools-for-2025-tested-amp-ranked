import React from 'react';

interface MetricProps {
  title: string;
  value: number | string;
  description?: string;
}

const Metric: React.FC<MetricProps> = ({ title, value, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="text-2xl font-semibold text-blue-600">{value}</p>
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  );
};

export default Metric;