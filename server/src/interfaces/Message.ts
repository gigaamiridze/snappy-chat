import { Types } from 'mongoose';

export interface IMessage {
  message: string;
  sender: Types.ObjectId;
  users: any[];
}