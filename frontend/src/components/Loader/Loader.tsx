import { Backdrop, CircularProgress } from '@mui/material';
import { useAppSelector } from '@hooks/useReduxHooks';

const Loader = () => {
  const isLoading = useAppSelector((state) => state.loader.isLoading);

  return (
    <Backdrop open={isLoading} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.modal + 1 }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default Loader;
