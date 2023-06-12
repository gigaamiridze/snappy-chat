import { IUser } from './User';

export interface IWelcomeProps {
  currentUser: IUser | undefined;
}

export interface IChatContentProps {
  currentChat: IUser | undefined;
  currentUser: IUser | undefined;
}

export interface IChatHeaderProps {
  currentChat: IUser | undefined;
}

export interface IMessagesProps {
  hideEmojiPicker: () => void;
}

export interface IChatFooterProps {
  handleSendMessage: (message: string) => void;
  toggleEmojiPickerVisible: () => void;
  hideEmojiPicker: () => void;
  isPickerVisible: boolean;
}