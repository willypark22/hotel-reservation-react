import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rooms/">
          <Rooms />
        </Route>
        <Route exact path="/rooms/:slug">
          <SingleRoom />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </>
  );
}

export default App;
