import { useState, FormEvent, ChangeEvent } from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { BsEmojiSmileFill } from 'react-icons/bs';
import Picker, { EmojiClickData } from 'emoji-picker-react';
import { Footer, EmojiWrapper, ChatForm, ChatInput, ChatButton } from '../../components';

function ChatFooter() {
  const [isPickerVisible, setIsPickerVisible] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('');
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  }

  const handlePickerVisible = () => {
    setIsPickerVisible(!isPickerVisible);
  }

  const handleEmojiClick = (data: EmojiClickData) => {
    setMessage((prevValue) => prevValue + data.emoji);
  }

  return (
    <Footer>
      <EmojiWrapper>
        <BsEmojiSmileFill onClick={handlePickerVisible}/>
        {isPickerVisible && <Picker onEmojiClick={handleEmojiClick} width={270} height={250} />}
      </EmojiWrapper>
      <ChatForm onSubmit={(e) => handleSubmit(e)}>
        <ChatInput
          type='text'
          name='message'
          id='message'
          placeholder='Type your message here...'
          value={message}
          onChange={(e) => handleChange(e)}
        />
        <ChatButton type='submit'>
          <AiOutlineSend />
        </ChatButton>
      </ChatForm>
    </Footer>
  )
}

export default ChatFooter;