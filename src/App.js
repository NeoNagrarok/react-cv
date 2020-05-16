import React from 'react';
// import 'augmented-ui/augmented.css'
import './App.scss';
import { archi } from './settings/archi';
import Header from './Header/Header';
import Annex from './Annex/Annex';

function App() {
  console.log(archi);
  return (
    <main className="App">
      <Header {...archi.header} />
      <Annex {...archi.annex}/>
    </main>
  );
}

export default App;