import { Types, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  isEmailVerified: boolean;
  passwordChangedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserJwtDetails {
  _id: Types.ObjectId;
  email: string;
  name: string;
  isEmailVerified: boolean;
}
