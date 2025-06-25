import { Footer, Header } from './components';
import AppRoutes from './routes';
import './App.scss';

const App = () => {
  return (
    <>
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
};

export default App;
