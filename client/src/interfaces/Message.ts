import { IChatContentProps } from '.';

export interface IMessagesProps extends IChatContentProps {
  hideEmojiPicker: () => void;
}

export interface IMessage {
  fromSelf: boolean;
  message: string;
}