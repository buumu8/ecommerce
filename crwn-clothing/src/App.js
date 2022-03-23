import React, { useEffect, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary.component";

// import Homepage from "./Pages/Homepage/Homepage";
// import Shoppage from "./Pages/Shoppage/Shoppage";
import Header from "./Components/Header/Header";
// import CheckoutPage from "./Pages/Checkout/Checkout";
// import SigninAndSignuppage from "./Pages/SigninAndSignuppage/SigninAndSignuppage";

import { Spinner } from "./Components/Spinner/Spinner.component";
import { selectCurrentUser } from "./redux/user/user.selectors";

import { checkUserSession } from "./redux/user/user.action";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const Homepage = lazy(() => import("./Pages/Homepage/Homepage"));
const Shoppage = lazy(() => import("./Pages/Shoppage/Shoppage"));
const SigninAndSignuppage = lazy(() =>
  import("./Pages/SigninAndSignuppage/SigninAndSignuppage")
);
const CheckoutPage = lazy(() => import("./Pages/Checkout/Checkout"));

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </ErrorBoundary>
      </Switch>
      <ToastContainer />
    </div>
  );
};

export default App;
