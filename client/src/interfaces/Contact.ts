import { IUser } from './User';

export interface IContactsProps {
  contacts: IUser[];
  currentUser: IUser | undefined;
  changeChat: (chat: any) => void;
}

export interface IContactProps {
  isSelectedContact: boolean;
}