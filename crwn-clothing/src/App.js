import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import Homepage from "./Pages/Homepage/Homepage";
import Shoppage from "./Pages/Shoppage/Shoppage";
import Header from "./Components/Header/Header";
import CheckoutPage from "./Pages/Checkout/Checkout";

import SigninAndSignuppage from "./Pages/SigninAndSignuppage/SigninAndSignuppage";
import { selectCurrentUser } from "./redux/user/user.selectors";

import { checkUserSession } from "./redux/user/user.action";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { GlobalStyle } from "./global.styles";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shoppage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SigninAndSignuppage />
          }
        />
      </Switch>
      <ToastContainer />
    </div>
  );
};

export default App;
