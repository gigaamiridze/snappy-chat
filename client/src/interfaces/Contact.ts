import { IUser } from './User';

export interface IContactsProps {
  contacts: IUser[];
  currentUser: IUser | undefined;
  changeChat: (chat: IUser) => void;
}

export interface IContactProps {
  isSelectedContact: boolean;
}