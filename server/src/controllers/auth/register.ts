import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../models';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, email, password } = req.body;

    const isUsername = await User.findOne({ username });
    if (isUsername) {
      return res.status(409).json({
        status: 'fail',
        message: 'Username already taken',
      });
    }

    const isEmail = await User.findOne({ email });
    if (isEmail) {
      return res.status(409).json({
        status: 'fail',
        message: 'Email already taken',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({ status: 'success', user });
  } catch (error) {
    next(error);
  }
}