import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';
import { archi } from './settings/archi';
import Header from './Header/Header';
import Annex from './Annex/Annex';
import Nav from './Nav/Nav';
import Modal from './Modal/Modal';

function App() {
  console.log('archi')
  console.log(archi)
  return (
    <main className="App">
      <Header {...archi.header} />
      <Annex {...archi.annex} />
      <Router>
        <Switch>
          <Route
            path="/:currentKey/:currentCategory"
            render={(props) => (
              <>
                <Nav
                  {...props}
                  main={archi.main}
                />
                <Modal
                  {...props}
                  block={archi.main[props.match.params.currentKey]}
                />
              </>
            )}
          />
          <Route
            path="/:currentKey"
            render={(props) => (
              <>
                <Nav
                  {...props}
                  main={archi.main}
                />
                <Modal
                  {...props}
                  block={archi.main[props.match.params.currentKey]}
                />
              </>
            )}
          />
          <Route
            path="/"
            render={(props) => (
              <>
                <Nav
                  {...props}
                  main={archi.main}
                />
                <Modal
                  {...props}
                  block={null}
                />
              </>
            )}
          />
        </Switch>
      </Router>
      <footer>
        {archi.footer.content}
      </footer>
    </main>
  );
}

export default App;