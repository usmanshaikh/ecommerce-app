import { StatusCodes } from 'http-status-codes';
import { Profile } from '../models';
import { ApiError } from '../helpers';
import { MESSAGES } from '../constants';
import { Types } from 'mongoose';
import { profileInterface } from '../interfaces';

export const createProfile = async (
  userId: Types.ObjectId,
  data: {
    firstName: string;
    lastName: string;
  },
) => {
  const profile = new Profile({
    user: userId,
    firstName: data.firstName,
    lastName: data.lastName,
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      country: '',
      pincode: '',
    },
  });
  await profile.save();
  return profile;
};

export const getProfileById = async (id: string) => {
  const user = Profile.findOne({ user: id });
  if (!user) {
    throw new ApiError(StatusCodes.NOT_FOUND, MESSAGES.USER_NOT_FOUND);
  }
  return user;
};

export const updateProfileById = async (userId: string, updateData: Partial<profileInterface.IProfile>) => {
  const profile = await Profile.findOne({ user: userId });
  if (!profile) {
    throw new ApiError(StatusCodes.NOT_FOUND, MESSAGES.USER_NOT_FOUND);
  }
  Object.assign(profile, updateData);
  await profile.save();
  return profile;
};

export const deleteProfileById = async (id: string) => {
  const user = await Profile.findOneAndDelete({ user: id });
  if (!user) {
    throw new ApiError(StatusCodes.NOT_FOUND, MESSAGES.USER_NOT_FOUND);
  }
  return user;
};
