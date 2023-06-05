import { Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  isAvatarImageSet: boolean;
  avatarImage: string;
}

export interface IUserData {
  _id: string;
  username: string;
  email: string;
  password: string;
  isAvatarImageSet: boolean;
  avatarImage: string;
  __v: number;
}