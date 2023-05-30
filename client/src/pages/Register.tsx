import { useForm } from 'react-hook-form';
import { IRegisterFormFields } from '../interfaces';
import { 
  usernameValidation, emailValidation, passwordValidation, confirmPassValidation,
  usernameValidate, emailValidate, passwordValidate, confirmPassValidate
} from "../validations";
import { AuthContainer, AuthForm, AuthInput, AuthButton } from '../components';
import { Brand, ToastNote } from '../layouts';

function Register() {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm<IRegisterFormFields>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const handleValidation = () => {
    const { username, email, password, confirmPassword } = errors;

    confirmPassValidate(confirmPassword);
    passwordValidate(password);
    emailValidate(email);
    usernameValidate(username);
  }

  return (
    <AuthContainer>
      <Brand />
      <AuthForm onSubmit={onSubmit}>
        <AuthInput
          type='text'
          {...register('username', usernameValidation)}
          id='username'
          placeholder='Username'
        />
        <AuthInput
          type='email'
          {...register('email', emailValidation)}
          id='email'
          placeholder='E-mail'
        />
        <AuthInput
          type='password'
          {...register('password', passwordValidation)}
          id='password'
          placeholder='Password'
        />
        <AuthInput
          type='password'
          {...register('confirmPassword', {
            ...confirmPassValidation,
            validate: (value) => value === getValues('password'),
          })}
          id='confirmPassword'
          placeholder='Confirm Password'
        />
        <AuthButton onClick={handleValidation}>register</AuthButton>
      </AuthForm>
      <ToastNote />
    </AuthContainer>
  )
}

export default Register;