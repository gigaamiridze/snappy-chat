import { IUser } from '.';

export interface IMessagesProps {
  hideEmojiPicker: () => void;
  currentChat: IUser | undefined;
  currentUser: IUser | undefined;
  setMessages: React.Dispatch<React.SetStateAction<IMessage[]>>;
  messages: IMessage[];
}

export interface IMessage {
  id?: string;
  fromSelf: boolean;
  message: string;
}

export interface IMessageType {
  isSended: boolean;
}