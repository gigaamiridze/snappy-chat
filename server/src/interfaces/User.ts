import { Document, Types } from 'mongoose';

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  isAvatarImageSet: boolean;
  avatarImage: string;
}

export interface IUserData {
  _id: Types.ObjectId;
  username: string;
  email: string;
  password: string;
  isAvatarImageSet: boolean;
  avatarImage: string;
  __v: number;
}