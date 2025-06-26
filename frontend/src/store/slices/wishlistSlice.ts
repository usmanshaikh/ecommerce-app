import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface WishlistState {
  count: number;
}

const initialState: WishlistState = {
  count: 0,
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    setWishlistCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    incrementWishlistCount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    decrementWishlistCount: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
    clearWishlistCount: (state) => {
      state.count = 0;
    },
  },
});

export const { setWishlistCount, incrementWishlistCount, decrementWishlistCount, clearWishlistCount } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
