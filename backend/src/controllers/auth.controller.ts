import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { authService, profileService, userService } from '../services';
import { catchAsync } from '../middlewares';
import { sendResponse, jwtHelper } from '../helpers';
import { MESSAGES } from '../constants';

export const register = catchAsync(async (req: Request, res: Response) => {
  const { firstName, lastName, email, password } = req.body;
  const user = await userService.createUser({ email, password });
  const profile = await profileService.createProfile(user._id, { firstName, lastName });
  sendResponse({
    res,
    statusCode: StatusCodes.CREATED,
    message: MESSAGES.USER_REGISTERED,
    data: user,
  });
});

export const login = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const userDetails = {
    _id: user._id,
    email: user.email,
    isEmailVerified: user.isEmailVerified,
  };
  const tokens = await jwtHelper.generateAuthTokens(userDetails);
  sendResponse({
    res,
    statusCode: StatusCodes.OK,
    message: MESSAGES.LOGIN_SUCCESS,
    data: { user, tokens },
  });
});

export const logout = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.body;
  await authService.logoutUser(refreshToken);
  sendResponse({
    res,
    statusCode: StatusCodes.OK,
    message: MESSAGES.LOGOUT_SUCCESS,
  });
});

export const refreshTokens = catchAsync(async (req: Request, res: Response) => {
  const { refreshToken } = req.body;
  const tokens = await authService.refreshAuth(refreshToken);
  sendResponse({
    res,
    statusCode: StatusCodes.OK,
    message: MESSAGES.TOKENS_REFRESHED_SUCCESS,
    data: tokens,
  });
});
