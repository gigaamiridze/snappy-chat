import { IUser } from './User';

export interface IWelcomeProps {
  currentUser: IUser | undefined;
}

export interface IChatContentProps {
  currentChat: IUser | undefined;
}

export interface IChatHeaderProps {
  currentChat: IUser | undefined;
}

export interface IMessagesProps {
  hideEmojiPicker: () => void;
}

export interface IChatFooterProps {
  toggleEmojiPickerVisible: () => void;
  hideEmojiPicker: () => void;
  isPickerVisible: boolean;
}