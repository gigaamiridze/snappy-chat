import { Router } from 'express';
import { getAllMessage, addMessage } from '../controllers';

export const messageRouter = Router();

messageRouter.get('/get', getAllMessage);
messageRouter.post('/add', addMessage);