import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models';
import { IUserData } from '../interfaces';

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

export const setAvatar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.params.id;
    const avatarImage = req.body.image;
    await User.findByIdAndUpdate(userId, {
      isAvatarImageSet: true,
      avatarImage,
    });
    const userData: IUserData | null = await User.findById(userId);
  
    res.status(200).json({
      status: 'success',
      message: 'Username data was updated successfully',
      isSet: userData?.isAvatarImageSet,
      image: userData?.avatarImage,
    });
  } catch (error) {
    next(error);
  }
}