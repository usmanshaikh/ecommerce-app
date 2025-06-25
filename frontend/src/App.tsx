import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Footer, Header } from './components';
import AppRoutes from './routes';
import './App.scss';

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;
