import { FieldError } from 'react-hook-form';
import { toast } from 'react-toastify';

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

export const usernameValidate = (username: FieldError | undefined) => {
  if (username?.type === 'required') {
    toast.error(username.message);
  } else if (username?.type === 'minLength') {
    toast.error(username?.message);
  } else if (username?.type === 'maxLength') {
    toast.error(username?.message);
  }
}