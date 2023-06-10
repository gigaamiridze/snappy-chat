import { DefaultAvatar } from '../../assets';
import { IChatHeaderProps } from '../../interfaces';
import { Logout } from '../../layouts';
import { Header, UserDetails, AvatarImg, Username } from '../../components';

function ChatHeader({ currentChat }: IChatHeaderProps) {
  return (
    <Header>
      <UserDetails>
        <AvatarImg
          src={
            currentChat?.isAvatarImageSet
              ? `data:image/svg+xml;base64,${currentChat.avatarImage}`
              : DefaultAvatar
          }
          isChatContent={true}
          alt={`${currentChat?.username}'s avatar`}
        />
        <Username>{currentChat?.username}</Username>
      </UserDetails>
      <Logout />
    </Header>
  )
}

export default ChatHeader;