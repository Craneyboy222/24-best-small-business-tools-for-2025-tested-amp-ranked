import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => (
  <div className="flex items-center">
    <input 
      type="checkbox" 
      {...props} 
      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
    />
    <label htmlFor={props.id} className="ml-2 block text-sm text-gray-900">
      {label}
    </label>
  </div>
);

export default Checkbox;
