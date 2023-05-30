import { FieldError } from 'react-hook-form';
import { toast } from 'react-toastify';

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

export const passwordValidate = (password: FieldError | undefined) => {
  if (password?.type === 'required') {
    toast.error(password.message);
  } else if (password?.type === 'pattern') {
    toast.error(password?.message);
  }
}