import Images from './assets/img';
import { Footer, Header } from './components';
import './App.scss';

const App = () => {
  return (
    <>
      <Header />
      <div>
        <img src={Images.Banner} className="home-banner" alt="React logo" />
      </div>
      <Footer />
    </>
  );
};

export default App;
