import { useState } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { BsEmojiSmileFill } from 'react-icons/bs';
import Picker from 'emoji-picker-react';
import { Footer, EmojiWrapper, ChatForm, ChatInput, ChatButton } from '../../components';

function ChatFooter() {
  const [isShowEmojiPicker, setIsShowEmojiPicker] = useState<boolean>(false);

  const handleEmojiPickerHideShow = () => {
    setIsShowEmojiPicker(!isShowEmojiPicker);
  }

  return (
    <Footer>
      <EmojiWrapper>
        <BsEmojiSmileFill onClick={handleEmojiPickerHideShow}/>
        {isShowEmojiPicker && <Picker />}
      </EmojiWrapper>
      <ChatForm>
        <ChatInput
          type='text'
          name='message'
          id='message'
          placeholder='Type your message here...'
        />
        <ChatButton type='submit'>
          <AiOutlineSend />
        </ChatButton>
      </ChatForm>
    </Footer>
  )
}

export default ChatFooter;