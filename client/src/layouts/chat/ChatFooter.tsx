import { AiOutlineSend } from 'react-icons/ai';
import { BsEmojiSmileFill } from 'react-icons/bs';
import { Footer, EmojiWrapper, ChatForm, ChatInput, ChatButton } from '../../components';

function ChatFooter() {
  return (
    <Footer>
      <EmojiWrapper>
        <BsEmojiSmileFill />
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