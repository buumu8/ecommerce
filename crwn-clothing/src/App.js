import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import Shoppage from './Pages/Shoppage/Shoppage';
import Header from './Components/Header/Header';
import SigninAndSignuppage from './Pages/SigninAndSignuppage/SigninAndSignuppage';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shoppage} />
        <Route path='/signin' component={SigninAndSignuppage} />
      </Switch>
    </div>
  );
}

export default App;
