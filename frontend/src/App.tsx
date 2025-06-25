import { useState } from 'react';
import Images from './assets/img';
import './App.scss';

const App = () => {
  return (
    <>
      <div>
        <img src={Images.Logo} className="" alt="React logo" />
        <h1>What your pet needs, when they need it.</h1>
        <p style={{ fontFamily: 'Baloo 2', fontWeight: 'bold', fontStyle: 'normal' }}>
          What your pet needs, when they need it.
        </p>
      </div>
    </>
  );
};

export default App;
