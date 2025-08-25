/* Form configuration */

export const FORM_CONFIG = {
  validation: {
    username: {
      minLength: 3,
      maxLength: 20,
      pattern: /^[a-zA-Z0-9_]+$/
    },
    password: {
      minLength: 8,
      requireDigit: true,
      requireSpecialCharacter: true
    },
    email: {
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    }
  },
  submissionTimeout: 10000 // Timeout for form submissions in ms
};