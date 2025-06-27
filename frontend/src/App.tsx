import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Footer, Header, SnackbarAlert, Loader } from '@components';
import { ROUTES } from '@utils/constants';
import AppRoutes from '@routes';
import { Box } from '@mui/material';
import { useAxiosInterceptor } from '@hooks';
import './App.scss';

const App = () => {
  const isLoaded = useAxiosInterceptor();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  const hideLayoutRoutes = [`/${ROUTES.ADD_PRODUCT}`];

  const shouldHideLayout = hideLayoutRoutes.includes(pathname);

  if (!isLoaded) return <Box style={{ visibility: 'hidden' }}>Loading...</Box>;

  return (
    <>
      <Loader />
      <SnackbarAlert />
      {!shouldHideLayout && <Header />}
      <AppRoutes />
      {!shouldHideLayout && <Footer />}
    </>
  );
};

export default App;
