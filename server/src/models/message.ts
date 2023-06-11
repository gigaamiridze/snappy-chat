import { Schema, Types, model } from 'mongoose';
import { IMessage } from '../interfaces';

const MessageSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    sender: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
    users: Array,
  },
  {
    timestamps: true,
  }  
);

export const Message = model<IMessage>('Message', MessageSchema);