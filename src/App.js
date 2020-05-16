import React from 'react';
import 'augmented-ui/augmented.css'
import './App.scss';
import { archi } from './settings/archi';
import Header from './Header/Header';

function App() {
  console.log(archi);
  return (
    <main className="App">
      <Header {...archi.header} />
    </main>
  );
}

export default App;