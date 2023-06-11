import { IMessagesProps } from '../../interfaces';

function Messages({ hideEmojiPicker }: IMessagesProps) {
  return (
    <div onClick={hideEmojiPicker}>
      Messages
    </div>
  )
}

export default Messages;