import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { profileService, userService } from '../services';
import { catchAsync } from '../middlewares';
import { sendResponse } from '../helpers';
import { MESSAGES } from '../constants';

export const getProfile = catchAsync(async (req: Request, res: Response) => {
  const userId = res.locals.user.userId;
  const profile = await profileService.getProfileById(userId);
  sendResponse({
    res,
    statusCode: StatusCodes.OK,
    message: MESSAGES.PROFILE_DATA_RETRIEVED,
    data: profile,
  });
});

export const updateProfile = catchAsync(async (req: Request, res: Response) => {
  const userId = res.locals.user.userId;
  const updatedProfile = await profileService.updateProfileById(userId, req.body);
  sendResponse({
    res,
    statusCode: StatusCodes.OK,
    message: MESSAGES.PROFILE_UPDATED,
    data: updatedProfile,
  });
});

export const deleteProfile = catchAsync(async (req: Request, res: Response) => {
  const userId = res.locals.user.userId;
  await profileService.deleteProfileById(userId);
  await userService.deleteUserById(userId);
  sendResponse({
    res,
    statusCode: StatusCodes.OK,
    message: MESSAGES.PROFILE_DELETED,
  });
});
