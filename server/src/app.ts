import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { PORT } from './config';

const app: Application = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});