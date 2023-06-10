import { DefaultAvatar } from '../../assets';
import { IChatContentProps } from '../../interfaces';
import { Logout } from '../../layouts';
import { ChatContentContainer, Header, UserDetails, AvatarImg, Username } from '../../components';

function ChatContent(props: IChatContentProps) {
  const { currentChat } = props;

  return (
    <ChatContentContainer>
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
    </ChatContentContainer>
  )
}

export default ChatContent;