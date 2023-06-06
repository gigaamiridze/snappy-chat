import { Request, Response, NextFunction } from 'express';
import { User } from '../../models';
import { IUserData } from '../../interfaces';

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