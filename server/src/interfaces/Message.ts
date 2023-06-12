import { Types, Document } from 'mongoose';

export interface IMessage extends Document {
  message: string;
  sender: Types.ObjectId;
  users: any[];
}