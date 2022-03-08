import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import './App.css';

const HatsPage = (props) => {
  console.log(props);
  return (
    <div><h1>HATS PAGE</h1></div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
