import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserData {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  isEmailVerified: boolean;
}

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: UserData | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens(state, action: PayloadAction<{ accessToken: string; refreshToken: string }>) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;
    },
    setUser(state, action: PayloadAction<UserData>) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    clearTokens(state) {
      state.accessToken = null;
      state.refreshToken = null;
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setTokens, setUser, clearTokens } = authSlice.actions;
export default authSlice.reducer;
