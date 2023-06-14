import { useState, useEffect } from 'react';
import axios from 'axios';
import { ApiRoutes } from '../../constants';
import { IMessagesProps, IMessage } from '../../interfaces';
import { MessagesContainer, MessageWrapper, Message } from '../../components';

function Messages(props: IMessagesProps) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { hideEmojiPicker, currentChat, currentUser } = props;

  useEffect(() => {
    getAllMessage();
  }, [currentChat]);

  const getAllMessage = async () => {
    const { data } = await axios.post(ApiRoutes.GET_MESSAGES, {
      from: currentUser?.id,
      to: currentChat?.id,
    });
    setMessages(data);
  }

  return (
    <MessagesContainer onClick={hideEmojiPicker}>
      {messages.map((item) => {
        const { id, fromSelf, message } = item;

        return (
          <MessageWrapper key={id} isSended={fromSelf}>
            <Message isSended={fromSelf}>
              {message}
            </Message>
          </MessageWrapper>
        )
      })}
    </MessagesContainer>
  )
}

export default Messages;