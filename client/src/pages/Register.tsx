import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IRegisterFormFields } from '../interfaces';
import { removeWhiteSpaces, registerRoute } from '../utils';
import { 
  usernameValidation, emailValidation, passwordValidation, confirmPassValidation,
  usernameValidate, emailValidate, passwordValidate, confirmPassValidate
} from "../validations";
import { AuthContainer, AuthForm, AuthInput, AuthButton, Loader } from '../components';
import { Brand, AccountQuestion } from '../layouts';

function Register() {
  const { register, handleSubmit, getValues, formState: { errors } } = useForm<IRegisterFormFields>();
  const [buttonText, setButtonText] = useState<string>('register');
  const [disabled, setDisabled] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('snappy-chat-user')) {
      navigate('/');
    }
  }, []);

  const onSubmit = handleSubmit((data) => {
    const { username, email, password } = data;
    const clearedUsername = removeWhiteSpaces(username);
  
    const response = axios.post(registerRoute, {
      username: clearedUsername,
      email,
      password,
    });

    response
      .then((result) => {
        const { user } = result.data;
        toast.success(`Congratulations ${user.username}! Your registration has been successful`);
        setButtonText('creating user...');
        setDisabled(true);
        localStorage.setItem('snappy-chat-user', JSON.stringify(user));
        const timerId = setTimeout(() => {
          navigate('/set-avatar');
        }, 3000);

        return () => clearTimeout(timerId);
      })
      .catch((error) => {
        const { message } = error.response.data;
        toast.error(message);
      });
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
      <Brand isAuthContent={true} />
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
        <AuthButton 
          disabled={disabled}
          onClick={handleValidation}
        >
          {buttonText} {disabled && <Loader />}
        </AuthButton>
      </AuthForm>
      <AccountQuestion question='already have an account?' address='login' />
    </AuthContainer>
  )
}

export default Register;