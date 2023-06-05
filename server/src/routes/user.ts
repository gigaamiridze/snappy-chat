import { Router } from 'express';
import { register, login, setAvatar } from '../controllers';

export const userRouter = Router();

userRouter.post('/register', register);
userRouter.post('/login', login);
userRouter.post('/set-avatar/:id', setAvatar);