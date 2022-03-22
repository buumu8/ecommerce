import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import Homepage from "./Pages/Homepage/Homepage";
import Shoppage from "./Pages/Shoppage/Shoppage";
import { default as Header } from "./Components/Header/Header.containergql";
import CheckoutPage from "./Pages/Checkout/Checkout";

import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-boost";

import SigninAndSignuppage from "./Pages/SigninAndSignuppage/SigninAndSignuppage";
import { selectCurrentUser } from "./redux/user/user.selectors";

import { checkUserSession } from "./redux/user/user.action";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyle } from "./global.styles";
import { resolvers, typeDefs } from "./graphql/resolvers";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  const httpLink = createHttpLink({
    uri: "https://crwn-clothing.com",
  });

  const cache = new InMemoryCache();
  const client = new ApolloClient({
    link: httpLink,
    cache,
    typeDefs,
    resolvers,
  });

  client.writeData({
    data: {
      cartHidden: true,
      cartItems: [],
    },
  });

  return (
    <div>
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </div>
  );
};

export default App;
