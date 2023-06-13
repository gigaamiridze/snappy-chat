import { IChatContentProps } from '.';

export interface IMessagesProps extends IChatContentProps {
  hideEmojiPicker: () => void;
}

export interface IMessage {
  id: string;
  fromSelf: boolean;
  message: string;
}

export interface IMessageType {
  isSended: boolean;
}