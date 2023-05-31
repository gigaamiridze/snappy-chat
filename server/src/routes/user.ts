import { Router } from 'express';
import { register, login } from '../controllers';

export const userRouter = Router();

userRouter.post('/register', register);
userRouter.post('/login', login);