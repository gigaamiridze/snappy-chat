import { Router } from 'express';
import { register } from '../controllers';

export const userRouter = Router();

userRouter.post('/register', register);