import { AuthContainer, AuthForm, AuthInput, AuthButton } from '../components';
import { Brand, ToastNote } from '../layouts';

function Login() {
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
          type='password'
          name='password'
          id='password'
          placeholder='Password'
        />
        <AuthButton>login</AuthButton>
      </AuthForm>
      <ToastNote />
    </AuthContainer>
  )
}

export default Login;