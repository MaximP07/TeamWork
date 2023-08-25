import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxInput from './components/input/ReduxInput';
import Mult from './components/Mult/Mult';
import Subt from './components/Subt/Subt';

function App() {
  return (
    <div className="App">
      <ReduxInput/>
      <Mult />
      <Subt/>
    </div>
  );
}

export default App;
