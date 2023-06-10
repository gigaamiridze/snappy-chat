import { IChatContentProps } from '../../interfaces';
import { ChatHeader } from '../../layouts';
import { ChatContentContainer } from '../../components';

function ChatContent(props: IChatContentProps) {
  const { currentChat } = props;

  return (
    <ChatContentContainer>
      <ChatHeader currentChat={currentChat} />
    </ChatContentContainer>
  )
}

export default ChatContent;