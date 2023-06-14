import { useState } from 'react';
import axios from 'axios';
import { ApiRoutes } from '../../constants';
import { IChatContentProps } from '../../interfaces';
import { ChatHeader, Messages, ChatFooter } from '../../layouts';
import { ChatContentContainer } from '../../components';

function ChatContent(props: IChatContentProps) {
  const [isPickerVisible, setIsPickerVisible] = useState<boolean>(false);
  const { currentChat, currentUser } = props;

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
      message: message,
    });
  }

  return (
    <ChatContentContainer>
      <ChatHeader currentChat={currentChat} />
      <Messages 
        hideEmojiPicker={hideEmojiPicker} 
        currentChat={currentChat}
        currentUser={currentUser}
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