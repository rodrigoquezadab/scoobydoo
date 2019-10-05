import React from 'react';
import Input from './components/Input'
import Conuter from './components/Conuter'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input scooby="scooby" />
        <Conuter number={22} holi="holi"/>
      </header>
    </div>
  );
}

export default App;
