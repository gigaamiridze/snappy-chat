import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ILoginFormFields } from '../interfaces';
import { removeWhiteSpaces, loginRoute } from '../utils';
import { loginUsernameValidation, loginUsernameValidate, loginPassValidation, loginPassValidate } from '../validations';
import { AuthContainer, AuthForm, AuthInput, AuthButton } from '../components';
import { Brand, AccountQuestion, ToastNote } from '../layouts';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginFormFields>();

  const onSubmit = handleSubmit((data) => {
    const { username, password } = data;
    const clearedUsername = removeWhiteSpaces(username);

    const response = axios.post(loginRoute, {
      username: clearedUsername,
      password,
    });
  });

  const handleValidation = () => {
    const { username, password } = errors;

    loginPassValidate(password);
    loginUsernameValidate(username);
  }

  return (
    <AuthContainer>
      <Brand />
      <AuthForm onSubmit={onSubmit}>
        <AuthInput
          type='text'
          {...register('username', loginUsernameValidation)}
          id='username'
          placeholder='Username'
        />
        <AuthInput
          type='password'
          {...register('password', loginPassValidation)}
          id='password'
          placeholder='Password'
        />
        <AuthButton onClick={handleValidation}>login</AuthButton>
      </AuthForm>
      <AccountQuestion question="don't have an account?" address="register" />
      <ToastNote />
    </AuthContainer>
  )
}

export default Login;