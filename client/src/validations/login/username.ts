import { FieldError } from 'react-hook-form';
import { toast } from 'react-toastify';

export const loginUsernameValidation = {
  required: {
    value: true,
    message: 'Username field is required',
  }
}

export const loginUsernameValidate = (username: FieldError | undefined) => {
  if (username?.type === 'required') {
    toast.error(username.message);
  }
}