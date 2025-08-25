import React from 'react';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <ul className="timeline">
      {events.map((event, index) => (
        <li key={index} className="mb-8">
          <div className="flex items-center mb-1">
            <span className="text-sm font-semibold text-blue-600">{event.date}</span>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{event.title}</h3>
            <p className="text-gray-600">{event.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Timeline;