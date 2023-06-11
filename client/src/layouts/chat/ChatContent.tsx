import { useState } from 'react';
import { IChatContentProps } from '../../interfaces';
import { ChatHeader, Messages, ChatFooter } from '../../layouts';
import { ChatContentContainer } from '../../components';

function ChatContent(props: IChatContentProps) {
  const [isPickerVisible, setIsPickerVisible] = useState<boolean>(false);
  const { currentChat } = props;

  const hideEmojiPicker = () => {
    setIsPickerVisible(false);
  }

  const toggleEmojiPickerVisible = () => {
    setIsPickerVisible(!isPickerVisible);
  }

  return (
    <ChatContentContainer>
      <ChatHeader currentChat={currentChat} />
      <Messages hideEmojiPicker={hideEmojiPicker} />
      <ChatFooter 
        toggleEmojiPickerVisible={toggleEmojiPickerVisible}
        hideEmojiPicker={hideEmojiPicker}
        isPickerVisible={isPickerVisible}
      />
    </ChatContentContainer>
  )
}

export default ChatContent;