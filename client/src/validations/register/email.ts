import { FieldError } from 'react-hook-form';
import { toast } from 'react-toastify';

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

export const emailValidate = (email: FieldError | undefined) => {
  if (email?.type === 'required') {
    toast.error(email.message);
  } else if (email?.type === 'pattern') {
    toast.error(email?.message);
  }
}