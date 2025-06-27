import { Types, Document } from 'mongoose';

export interface IUser extends Document {
  _id: Types.ObjectId;
  email: string;
  password: string;
  isEmailVerified: boolean;
  passwordChangedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  comparePassword: (candidatePassword: string) => Promise<boolean>;
}

export interface UserJwtDetails {
  userId: Types.ObjectId;
  email: string;
  isEmailVerified: boolean;
}
