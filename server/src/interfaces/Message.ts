import { Document, Types, Date } from 'mongoose';

export interface IMessage extends Document {
  message: string;
  sender: Types.ObjectId;
  users: string[];
}

export interface IMessageData {
  _id: Types.ObjectId;
  message: string;
  sender: Types.ObjectId;
  users: string[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}