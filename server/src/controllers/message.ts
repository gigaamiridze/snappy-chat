import { Request, Response, NextFunction } from 'express';
import { Message } from '../models';

export const getAllMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { from, to } = req.body;

    const messages = await Message.find({
      users: {
        $all: [from, to],
      },
    }).sort({ updatedAt: 1 });

    const projectedMessages = messages.map((item) => {
      return {
        id: item._id,
        fromSelf: item.sender.toString() === from,
        message: item.message,
      }
    });

    res.status(200).json(projectedMessages);
  } catch (error) {
    next(error);
  }
}

export const addMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { from, to, message } = req.body;
    const data = await Message.create({
      message: message,
      sender: from,
      users: [from, to],
    });

    if (data) {
      return res.status(201).json({
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