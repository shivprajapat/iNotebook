import React, { useState } from 'react';
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
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <NoteState>
      <Router>
        <Header />
        <AlertPopup alert={alert} />
        <Switch>
          <Route exact path="/">
            <Home showAlert={showAlert} />
          </Route>
          <Route exact path="/about" component={About} />
          <Route exact path="/login">
            <Login showAlert={showAlert} />
          </Route>
          <Route exact path="/signup">
            <Signup showAlert={showAlert} />
          </Route>
        </Switch>
      </Router>
    </NoteState>
  );
}

export default App;
