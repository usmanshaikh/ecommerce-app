import { Types, Document } from 'mongoose';

export interface IAddress {
  street: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

export interface IProfile extends Document {
  user: Types.ObjectId;
  firstName: string;
  lastName: string;
  phone?: string;
  address: IAddress;
  profileImage?: string;
}
