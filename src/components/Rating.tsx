import React, { useState } from 'react';

interface RatingProps {
  initialRating: number;
  maxRating: number;
  onRatingChange: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ initialRating, maxRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRating = (rate: number) => {
    setRating(rate);
    onRatingChange(rate);
  };

  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, index) => (
        <button
          key={index}
          onClick={() => handleRating(index + 1)}
          className={`p-1 ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}
          aria-label={`Rate ${index + 1}`}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default Rating;
