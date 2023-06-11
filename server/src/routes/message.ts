import { Router } from 'express';
import { getAllMessage, addMessage } from '../controllers';

export const messageRouter = Router();

messageRouter.get('/messages', getAllMessage);
messageRouter.post('/add-message', addMessage);