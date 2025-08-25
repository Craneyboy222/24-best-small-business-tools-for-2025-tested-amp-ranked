import { useState } from 'react';

interface ValidationRules {
  [key: string]: (value: string) => string | null;
}

export const useValidation = (rules: ValidationRules) => {
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});

  const validate = (name: string, value: string) => {
    const error = rules[name] ? rules[name](value) : null;
    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  return { errors, validate };
};