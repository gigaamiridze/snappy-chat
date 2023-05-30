import { FieldError } from 'react-hook-form';
import { toast } from 'react-toastify';

export const confirmPassValidation = {
  required: {
    value: true,
    message: 'Confirm password field is required',
  }
}

export const confirmPassValidate = (confirmPassword: FieldError | undefined) => {
  if (confirmPassword?.type === 'required') {
    toast.error(confirmPassword.message);
  } else if (confirmPassword?.type === 'validate') {
    toast.error('Passwords do not match');
  }
}