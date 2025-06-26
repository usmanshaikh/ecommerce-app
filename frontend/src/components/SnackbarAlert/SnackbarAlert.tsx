import { Snackbar, Alert } from '@mui/material';
import { hideSnackbar } from '@store/slices/snackbarSlice';
import type { RootState } from '@store';
import { useAppDispatch, useAppSelector } from '@hooks';
import './SnackbarAlert.scss';

const SnackbarAlert = () => {
  const dispatch = useAppDispatch();
  const { open, message, type } = useAppSelector((state: RootState) => state.snackbar);

  const handleClose = () => {
    dispatch(hideSnackbar());
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
      <Alert className={`snackbar-alert-component ${type}`} onClose={handleClose} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
