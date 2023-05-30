import { AuthContainer, AuthForm, AuthInput } from '../components';
import { Brand } from '../layouts';

function Register() {
  return (
    <AuthContainer>
      <Brand />
      <AuthForm>
        <AuthInput
          type='text'
          name='username'
          id='username'
          placeholder='Username'
        />
        <AuthInput
          type='email'
          name='email'
          id='email'
          placeholder='E-mail'
        />
        <AuthInput
          type='password'
          name='password'
          id='password'
          placeholder='Password'
        />
        <AuthInput
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          placeholder='Confirm Password'
        />
      </AuthForm>
    </AuthContainer>
  )
}

export default Register;