import './App.css';
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' extact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
