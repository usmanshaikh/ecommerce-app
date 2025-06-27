import mongoose, { Schema, Model } from 'mongoose';
import { wishlistInterface } from '../interfaces';
import { removeFieldsPlugin } from './plugins';

const wishlistSchema = new Schema<wishlistInterface.IWishlist>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  },
  { timestamps: true },
);

wishlistSchema.plugin(removeFieldsPlugin, ['__v', 'createdAt', 'updatedAt']);

const Wishlist: Model<wishlistInterface.IWishlist> = mongoose.model<wishlistInterface.IWishlist>('Wishlist', wishlistSchema);

export default Wishlist;
