import { useState, useEffect } from 'react';
import axios from 'axios';
import { getMessagesRoute } from '../../utils';
import { IMessagesProps, IMessage } from '../../interfaces';

function Messages(props: IMessagesProps) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { hideEmojiPicker, currentChat, currentUser } = props;

  useEffect(() => {
    getAllMessage();
  }, [currentChat]);

  const getAllMessage = async () => {
    const { data } = await axios.post(getMessagesRoute, {
      from: currentUser?.id,
      to: currentChat?.id,
    });
    setMessages(data);
  }

  return (
    <div onClick={hideEmojiPicker}>
      {messages.map((item, index) => {
        const { fromSelf, message } = item;

        return (
          <p key={index}>{message}</p>
        )
      })}
    </div>
  )
}

export default Messages;