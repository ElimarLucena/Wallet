import React from 'react';
import Provider from './Provider';
import Roads from './Routes/index'
import './App.css';

function App() {
  return (
    <Provider>
      <Roads />
    </Provider>
  );
}

export default App;
