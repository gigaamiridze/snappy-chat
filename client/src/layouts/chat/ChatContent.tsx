import { IChatContentProps } from '../../interfaces';
import { ChatHeader, Messages, ChatFooter } from '../../layouts';
import { ChatContentContainer } from '../../components';

function ChatContent(props: IChatContentProps) {
  const { currentChat } = props;

  return (
    <ChatContentContainer>
      <ChatHeader currentChat={currentChat} />
      <Messages />
      <ChatFooter />
    </ChatContentContainer>
  )
}

export default ChatContent;