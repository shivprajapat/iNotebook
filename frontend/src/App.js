import React from 'react';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; import { Home } from './Pages/Home';
import About from './Pages/About';
import NoteState from './context/notes/NoteState';
import AlertPopup from './components/AlertPopup';
import Login from './Pages/Login'
import Signup from './Pages/Signup'

function App() {
  return (
    <NoteState>
      <Router>
        <Header />
        <AlertPopup message="This is amazing React Course" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </NoteState>
  );
}

export default App;
