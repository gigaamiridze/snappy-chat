import { useState, FormEvent, ChangeEvent } from 'react';
import { toast } from 'react-toastify';
import { AiOutlineSend } from 'react-icons/ai';
import { BsEmojiSmileFill } from 'react-icons/bs';
import Picker, { EmojiClickData } from 'emoji-picker-react';
import { IChatFooterProps } from '../../interfaces';
import { Footer, EmojiWrapper, ChatForm, ChatInput, ChatButton } from '../../components';

function ChatFooter(props: IChatFooterProps) {
  const [message, setMessage] = useState<string>('');
  const { handleSendMessage, toggleEmojiPickerVisible, hideEmojiPicker, isPickerVisible } = props;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (message.length > 0) {
      handleSendMessage(message);
      setMessage('');
    } else {
      toast.error('Please fill in the field');
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  }

  const handleEmojiClick = (data: EmojiClickData) => {
    setMessage((prevValue) => prevValue + data.emoji);
  }

  return (
    <Footer>
      <EmojiWrapper>
        <BsEmojiSmileFill onClick={toggleEmojiPickerVisible}/>
        {isPickerVisible && <Picker onEmojiClick={handleEmojiClick} width={270} height={250} />}
      </EmojiWrapper>
      <ChatForm 
        onSubmit={(e) => handleSubmit(e)}
        onClick={hideEmojiPicker}
      >
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