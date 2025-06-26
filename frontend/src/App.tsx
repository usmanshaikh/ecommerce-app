import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Footer, Header } from './components';
import { ROUTES } from './utils/constants';
import AppRoutes from './routes';
import './App.scss';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  const hideLayoutRoutes = [`/${ROUTES.ADD_PRODUCT}`];

  const shouldHideLayout = hideLayoutRoutes.includes(pathname);

  return (
    <>
      {!shouldHideLayout && <Header />}
      <AppRoutes />
      {!shouldHideLayout && <Footer />}
    </>
  );
};

export default App;
