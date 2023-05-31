import { Avatar } from '../assets';
import { SetAvatarContainer, PickAvatarTitle, Avatars, AvatarWrapper, AvatarImg, AvatarButton } from '../components';

function SetAvatar() {
  return (
    <SetAvatarContainer>
      <PickAvatarTitle>Pick an avatar as your profile picture</PickAvatarTitle>
      <Avatars>
        <AvatarWrapper>
          <AvatarImg src={Avatar} alt="Avatar" />
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarImg src={Avatar} alt="Avatar" />
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarImg src={Avatar} alt="Avatar" />
        </AvatarWrapper>
        <AvatarWrapper>
          <AvatarImg src={Avatar} alt="Avatar" />
        </AvatarWrapper>
      </Avatars>
      <AvatarButton>set as profile picture</AvatarButton>
    </SetAvatarContainer>
  )
}

export default SetAvatar;