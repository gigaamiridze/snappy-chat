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