import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserData {
  _id: string;
  email: string;
}

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user: UserData | null;
  isLoggedIn: boolean;
}

// Load from localStorage on init
const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');

const initialState: AuthState = {
  accessToken,
  refreshToken,
  user: null,
  isLoggedIn: !!accessToken,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens(state, action: PayloadAction<{ accessToken: string; refreshToken: string }>) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isLoggedIn = true;

      localStorage.setItem('accessToken', action.payload.accessToken);
      localStorage.setItem('refreshToken', action.payload.refreshToken);
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

      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
  },
});

export const { setTokens, setUser, clearTokens } = authSlice.actions;
export default authSlice.reducer;
