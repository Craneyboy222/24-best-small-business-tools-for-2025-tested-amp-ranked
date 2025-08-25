import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

interface ReviewProps {
  username: string;
  rating: number;
  comment: string;
  date: string;
}

const Review: React.FC<ReviewProps> = ({ username, rating, comment, date }) => {
  return (
    <div className="p-4 bg-white shadow rounded-md">
      <div className="flex items-center">
        <p className="font-bold mr-2">{username}</p>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
      <div className="flex items-center mt-2">
        {[...Array(5)].map((_, index) => (
          <StarIcon
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="mt-2">{comment}</p>
    </div>
  );
};

export default Review;
