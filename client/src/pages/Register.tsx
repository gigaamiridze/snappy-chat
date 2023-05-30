import { useForm } from 'react-hook-form';
import { IRegisterFormFields } from '../interfaces';
import { AuthContainer, AuthForm, AuthInput, AuthButton } from '../components';
import { Brand } from '../layouts';

function Register() {
  const { register, handleSubmit } = useForm<IRegisterFormFields>();

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
          type='email'
          {...register('email')}
          id='email'
          placeholder='E-mail'
        />
        <AuthInput
          type='password'
          {...register('password')}
          id='password'
          placeholder='Password'
        />
        <AuthInput
          type='password'
          {...register('confirmPassword')}
          id='confirmPassword'
          placeholder='Confirm Password'
        />
        <AuthButton>register</AuthButton>
      </AuthForm>
    </AuthContainer>
  )
}

export default Register;