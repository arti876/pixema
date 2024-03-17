// const REQUIRED_FIELD = 'Required field';
const MIN_CHAR_2 = 'Minimum 2 characters';
const MIN_CHAR_5 = 'Minimum 5 characters';
const CORRECT_NAME = 'Enter the correct name';

const NameValidSettings = {
  required: false,
  minLength: { value: 2, message: MIN_CHAR_2 },
};

const emailValidSettings = {
  required: false,
  pattern: {
    value: /^[A-Za-z0-9+_.-]+@(.+)$/i,
    message: CORRECT_NAME,
  },
};

const passwordValidSettings = {
  required: false,
  minLength: { value: 5, message: MIN_CHAR_5 },
};

const passwordNewValidSettings = {
  required: false,
  minLength: { value: 5, message: MIN_CHAR_5 },
};

export { NameValidSettings, emailValidSettings, passwordValidSettings, passwordNewValidSettings };
