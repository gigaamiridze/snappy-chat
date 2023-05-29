import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { PORT } from './config';
import { connectDB } from './database';

const app: Application = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

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