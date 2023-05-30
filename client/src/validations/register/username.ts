export const usernameValidation = {
  required: {
    value: true,
    message: 'Username field is required',
  },
  minLength: {
    value: 4,
    message: 'Username must be at least 4 characters long',
  },
  maxLength: {
    value: 20,
    message: 'Username must be no more than 20 characters',
  }
}