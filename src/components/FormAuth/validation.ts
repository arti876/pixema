const REQUIRED_FIELD = 'Required field';
const MIN_CHAR_2 = 'Minimum 2 characters';
const MIN_CHAR_5 = 'Minimum 5 characters';
const CORRECT_NAME = 'Enter the correct name';

const firstNameValidation = {
  required: REQUIRED_FIELD,
  minLength: { value: 2, message: MIN_CHAR_2 },
};

const lastNameValidation = {
  required: REQUIRED_FIELD,
  minLength: { value: 2, message: MIN_CHAR_2 },
};

const emailValidation = {
  required: REQUIRED_FIELD,
  pattern: {
    value: /^[A-Za-z0-9+_.-]+@(.+)$/i,
    message: CORRECT_NAME,
  },
};

const passwordValidation = {
  required: REQUIRED_FIELD,
  minLength: { value: 5, message: MIN_CHAR_5 },
};

export {
  firstNameValidation,
  lastNameValidation,
  emailValidation,
  passwordValidation,
};
