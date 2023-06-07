import { IUser } from './User';

export interface ContactProps {
  contacts: IUser[];
  currentUser: IUser | undefined;
}