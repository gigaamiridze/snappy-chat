import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { PORT } from './config';
import { userRouter } from './routes';
import { connectDB } from './database';

const app: Application = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Route middleware
app.use('/api/auth', userRouter);

const startApp = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start app', error);
    process.exit(1);
  }
}

startApp();