import { Router } from 'express';
import { register, login, setAvatar } from '../controllers';

export const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/set-avatar/:id', setAvatar);