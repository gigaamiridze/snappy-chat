import { Router } from 'express';
import { getAllUsers } from '../controllers';

export const userRouter = Router();

userRouter.get('/users', getAllUsers);