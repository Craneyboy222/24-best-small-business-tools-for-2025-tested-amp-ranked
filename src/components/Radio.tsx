import React from 'react';

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Radio: React.FC<RadioProps> = ({ label, ...props }) => (
  <div className="flex items-center">
    <input 
      type="radio" 
      {...props} 
      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
    />
    <label htmlFor={props.id} className="ml-2 block text-sm text-gray-900">
      {label}
    </label>
  </div>
);

export default Radio;
