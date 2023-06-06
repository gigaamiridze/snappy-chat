import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../models';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({
        status: 'fail',
        message: 'Incorrect username or password',
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        status: 'fail',
        message: 'Incorrect username or password',
      });
    }

    return res.status(200).json({ status: 'success', user });
  } catch (error) {
    next(error);
  }
}