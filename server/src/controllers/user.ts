import { Request, Response, NextFunction } from 'express';

export const register = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  res.send('Register route');
}