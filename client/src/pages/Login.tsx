import { useForm } from 'react-hook-form';
import { ILoginFormFields } from '../interfaces';
import { AuthContainer, AuthForm, AuthInput, AuthButton } from '../components';
import { Brand, AccountQuestion, ToastNote } from '../layouts';

function Login() {
  const { register, handleSubmit } = useForm<ILoginFormFields>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <AuthContainer>
      <Brand />
      <AuthForm onSubmit={onSubmit}>
        <AuthInput
          type='text'
          {...register('username')}
          id='username'
          placeholder='Username'
        />
        <AuthInput
          type='password'
          {...register('password')}
          id='password'
          placeholder='Password'
        />
        <AuthButton>login</AuthButton>
      </AuthForm>
      <AccountQuestion question="don't have an account?" address="register" />
      <ToastNote />
    </AuthContainer>
  )
}

export default Login;