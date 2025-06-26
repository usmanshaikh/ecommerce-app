import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  count: number;
}

const initialState: CartState = {
  count: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    incrementCartCount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
    clearCartCount: (state) => {
      state.count = 0;
    },
  },
});

export const { setCartCount, incrementCartCount, clearCartCount } = cartSlice.actions;

export default cartSlice.reducer;
