export const passwordValidation = {
  required: {
    value: true,
    message: 'Password field is required',
  },
  pattern: {
    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message: 'Password must be at least 8 characters and contain at least one letter and one number',
  }
}