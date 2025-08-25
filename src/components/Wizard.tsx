import React, { useState } from 'react';
import Stepper from './Stepper';

interface WizardProps {
  steps: React.ReactNode[];
  titles: { title: string; description?: string }[];
  onComplete: () => void;
}

const Wizard: React.FC<WizardProps> = ({ steps, titles, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      onComplete();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div>
      <Stepper steps={titles} currentStep={currentStep} />
      <div className="mt-4">
        {steps[currentStep]}
      </div>
      <div className="flex justify-between mt-4">
        <button onClick={prevStep} disabled={currentStep === 0} className="btn btn-secondary">
          Previous
        </button>
        <button onClick={nextStep} className="btn btn-primary">
          {currentStep < steps.length - 1 ? 'Next' : 'Finish'}
        </button>
      </div>
    </div>
  );
};

export default Wizard;