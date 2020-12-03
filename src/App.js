import './App.css';
import NavigationBar from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'


function App() {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path='/' extact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
