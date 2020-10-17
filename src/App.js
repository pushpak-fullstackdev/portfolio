import React from 'react';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import HeaderPanel from './components/HeaderPanel';

function App() {
  return (
    <div className="flex-container-col">
    {/* <HeaderPanel /> */}
    <Header/>
    <Body />
    </div>
  );
}

export default App;
