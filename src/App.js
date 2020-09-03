import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from "./Data/Data.json"
import Header from './Component/Header/Header';

import Details from './Component/Details/Details';

function App() {
  

  return (
    <div >
      <Header></Header>
      <Details></Details>
      
    </div>
  );
}

export default App;
