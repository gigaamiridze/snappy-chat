import { FieldError } from 'react-hook-form';
import { toast } from 'react-toastify';

export const loginPassValidation = {
  required: {
    value: true,
    message: 'Password field is required',
  }
}

export const loginPassValidate = (password: FieldError | undefined) => {
  if (password?.type === 'required') {
    toast.error(password.message);
  }
}