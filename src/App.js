import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import RA from './components/ra.component';
import Login from "./components/login.component";
import navBar from "./components/admin";
class App extends Component {
  render() {
    return (
      <Router>
        <Login/>
      </Router>
    );
  }
}

export default App;
