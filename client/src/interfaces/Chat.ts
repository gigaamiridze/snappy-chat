import { Socket } from 'socket.io-client';
import { IUser } from './User';

export interface IWelcomeProps {
  currentUser: IUser | undefined;
}

export interface IChatContentProps {
  currentChat: IUser | undefined;
  currentUser: IUser | undefined;
  socket: React.MutableRefObject<Socket | null>;
}

export interface IChatHeaderProps {
  currentChat: IUser | undefined;
}

export interface IChatFooterProps {
  handleSendMessage: (message: string) => void;
  toggleEmojiPickerVisible: () => void;
  hideEmojiPicker: () => void;
  isPickerVisible: boolean;
}