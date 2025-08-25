import React from 'react';

interface Step {
  title: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <nav aria-label="Progress">
      <ol className="flex items-center">
        {steps.map((step, index) => (
          <li key={index} className="relative flex-1">
            <div className={`flex items-center ${index < steps.length - 1 ? 'pr-8' : ''}`}>
              <span className={`flex items-center justify-center w-8 h-8 rounded-full ${index <= currentStep ? 'bg-blue-600' : 'bg-gray-300'}`}>
                {index + 1}
              </span>
              <div className="ml-4 text-sm font-medium">
                <p className="text-gray-900">{step.title}</p>
                {step.description && <p className="text-gray-500">{step.description}</p>}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="absolute top-4 left-8 w-full border-t-2 border-gray-300"></div>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Stepper;