import { Robot } from '../../assets';
import { IWelcomeProps } from '../../interfaces';
import { WelcomeContainer } from '../../components';

function Welcome({ currentUser }: IWelcomeProps) {
  return (
    <WelcomeContainer>
      <img src={Robot} alt='Robot' />
      <div>
        <h1>
          Welcome, <span>{currentUser?.username}!</span>
        </h1>
        <p>Please select a chat to start messaging.</p>
      </div>
    </WelcomeContainer>
  )
}

export default Welcome;