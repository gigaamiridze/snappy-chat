import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { authRouter, userRouter, messageRouter } from './routes';

export const app: Application = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Route middlewares
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/messages', messageRouter);