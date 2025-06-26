import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface SnackbarState {
  open: boolean;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

const initialState: SnackbarState = {
  open: false,
  message: '',
  type: 'info',
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showSnackbar: (state, action: PayloadAction<{ message: string; type?: SnackbarState['type'] }>) => {
      state.open = true;
      state.message = action.payload.message;
      state.type = action.payload.type || 'error';
    },
    hideSnackbar: (state) => {
      state.open = false;
      state.message = '';
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;

export default snackbarSlice.reducer;
