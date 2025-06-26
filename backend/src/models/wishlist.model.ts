import mongoose, { Schema, Model } from 'mongoose';
import { wishlistInterface } from '../interfaces';

const wishlistSchema = new Schema<wishlistInterface.IWishlist>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
  },
  { timestamps: true },
);

const Wishlist: Model<wishlistInterface.IWishlist> = mongoose.model<wishlistInterface.IWishlist>('Wishlist', wishlistSchema);

export default Wishlist;
