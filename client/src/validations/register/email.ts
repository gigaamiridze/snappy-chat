export const emailValidation = {
  required: {
    value: true,
    message: 'Email field is required',
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Please enter a valid email address',
  }
}