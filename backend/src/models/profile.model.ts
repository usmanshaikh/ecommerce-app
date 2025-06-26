import mongoose, { Schema, Model } from 'mongoose';
import { profileInterface } from '../interfaces';

const addressSchema = new Schema<profileInterface.IAddress>(
  {
    street: String,
    city: String,
    state: String,
    country: String,
    pincode: String,
  },
  { _id: false }, // don't generate an _id for each item
);

const profileSchema = new Schema<profileInterface.IProfile>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: String,
    address: addressSchema,
    profileImage: String,
  },
  { timestamps: true },
);

const Profile: Model<profileInterface.IProfile> = mongoose.model<profileInterface.IProfile>('Profile', profileSchema);

export default Profile;
