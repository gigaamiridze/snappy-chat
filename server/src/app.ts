import express, { Application, Request, Response } from 'express';
import { PORT } from './config';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});