import { useState, useEffect } from 'react';
import axios from 'axios';
import { opacityAnimation } from '../../animations';
import { IChatContentProps, IMessage } from '../../interfaces';
import { ApiRoutes, ChatEvent } from '../../constants';
import { ChatHeader, Messages, ChatFooter } from '../../layouts';
import { ChatContentContainer } from '../../components';

function ChatContent(props: IChatContentProps) {
  const [isPickerVisible, setIsPickerVisible] = useState<boolean>(false);
  const [arrivalMessage, setArrivalMessage] = useState<IMessage | null>(null);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { currentChat, currentUser, socket } = props;

  useEffect(() => {
    socket.current?.on(ChatEvent.RECEIVE, (message: string) => {
      setArrivalMessage({ fromSelf: false, message });
    });
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  const hideEmojiPicker = () => {
    setIsPickerVisible(false);
  }

  const toggleEmojiPickerVisible = () => {
    setIsPickerVisible(!isPickerVisible);
  }

  const handleSendMessage = async (message: string) => {
    await axios.post(ApiRoutes.ADD_MESSAGE, {
      from: currentUser?.id,
      to: currentChat?.id,
      message,
    });

    socket.current?.emit(ChatEvent.MESSAGE, {
      from: currentUser?.id,
      to: currentChat?.id,
      message,
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message });
    setMessages(msgs);
  }

  return (
    <ChatContentContainer
      variants={opacityAnimation}
      initial='initial'
      animate='animate'
    >
      <ChatHeader currentChat={currentChat} />
      <Messages 
        hideEmojiPicker={hideEmojiPicker} 
        currentChat={currentChat}
        currentUser={currentUser}
        setMessages={setMessages}
        messages={messages}
      />
      <ChatFooter 
        handleSendMessage={handleSendMessage}
        toggleEmojiPickerVisible={toggleEmojiPickerVisible}
        hideEmojiPicker={hideEmojiPicker}
        isPickerVisible={isPickerVisible}
      />
    </ChatContentContainer>
  )
}

export default ChatContent;