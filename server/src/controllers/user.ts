import { Request, Response, NextFunction } from 'express';
import { IUser } from '../interfaces';
import { User } from '../models';

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.id;
    const users: IUser[] = await User.find({ _id : { $ne: userId }});

    res.status(200).json({
      status: 'success',
      quantity: users.length,
      users,
    });
  } catch (error) {
    next(error);
  }
}