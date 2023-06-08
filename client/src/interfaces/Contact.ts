import { IUser } from './User';

export interface IContactProps {
  contacts: IUser[];
  currentUser: IUser | undefined;
}