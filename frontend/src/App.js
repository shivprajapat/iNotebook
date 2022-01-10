import React from 'react';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; import { Home } from './Pages/Home';
import About from './Pages/About';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <NoteState>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </NoteState>
  );
}

export default App;
