import { Request, Response, NextFunction } from 'express';
import { Message } from '../models';

export const getAllMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send('All Message');
  } catch (error) {
    next(error);
  }
}

export const addMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { from, to, message } = req.body;
    const user = await Message.create({
      message: message,
      sender: from,
      users: [from, to],
    });

    if (user) {
      return res.status(200).json({
        status: 'success',
        message: 'Data added successfully',
      });
    }

    res.status(500).json({
      status: 'fail',
      message: 'Could not add data to database',
    });
  } catch (error) {
    next(error);
  }
}