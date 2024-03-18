const REQUIRED_FIELD = 'Required field';
const MIN_CHAR_NAME = 'Minimum of 2 characters';
const MIN_CHAR_PAS = 'Minimum of 5 characters';
const MAX_CHAR_PAS = 'Maximum 15 characters';
const MIN_CHAR_EMAIL = 'Minimum of 8 characters';
const MAX_CHAR_EMAIL = 'Maximum 25 characters';
const CORRECT_NAME = 'Enter the correct name';

const NameValidation = {
  required: REQUIRED_FIELD,
  minLength: { value: 2, message: MIN_CHAR_NAME },
};

const emailValidation = {
  required: REQUIRED_FIELD,
  pattern: {
    value: /^[A-Za-z0-9+_.-]+@(.+)$/i,
    message: CORRECT_NAME,
  },
  minLength: { value: 8, message: MIN_CHAR_EMAIL },
  maxLength: { value: 25, message: MAX_CHAR_EMAIL },
};

const passwordValidation = {
  required: REQUIRED_FIELD,
  minLength: { value: 5, message: MIN_CHAR_PAS },
  maxLength: { value: 15, message: MAX_CHAR_PAS },
};

export { NameValidation, emailValidation, passwordValidation };
