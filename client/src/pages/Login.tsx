import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ApiRoutes } from '../constants';
import { ILoginFormFields } from '../interfaces';
import { removeWhiteSpaces } from '../utils';
import { loginUsernameValidation, loginUsernameValidate, loginPassValidation, loginPassValidate } from '../validations';
import { AuthContainer, AuthForm, AuthInput, AuthButton, Loader } from '../components';
import { Brand, AccountQuestion } from '../layouts';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginFormFields>();
  const [buttonText, setButtonText] = useState<string>('register');
  const [disabled, setDisabled] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('snappy-chat-user')) {
      navigate('/');
    }
  }, []);

  const onSubmit = handleSubmit((data) => {
    const { username, password } = data;
    const clearedUsername = removeWhiteSpaces(username);

    const response = axios.post(ApiRoutes.LOGIN, {
      username: clearedUsername,
      password,
    });

    response
      .then((result) => {
        const { user } = result.data;
        toast.success(`Congratulations ${user.username}, you're now logged in!`);
        setButtonText('logging in...');
        setDisabled(true);
        localStorage.setItem('snappy-chat-user', JSON.stringify(user));
        const timerId = setTimeout(() => {
          navigate('/');
        }, 3000);

        return () => clearTimeout(timerId);
      })
      .catch((error) => {
        const { message } = error.response.data;
        toast.error(message);
      });
  });

  const handleValidation = () => {
    const { username, password } = errors;

    loginPassValidate(password);
    loginUsernameValidate(username);
  }

  return (
    <AuthContainer>
      <Brand isAuthContent={true} />
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
        <AuthButton 
          disabled={disabled}
          onClick={handleValidation}
        >
          {buttonText} {disabled && <Loader />}
        </AuthButton>
      </AuthForm>
      <AccountQuestion question="don't have an account?" address="register" />
    </AuthContainer>
  )
}

export default Login;