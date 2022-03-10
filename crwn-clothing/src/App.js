import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import Homepage from './Pages/Homepage/Homepage';
import Shoppage from './Pages/Shoppage/Shoppage';
import Header from './Components/Header/Header';
import SigninAndSignuppage from './Pages/SigninAndSignuppage/SigninAndSignuppage';
import {auth,createUserProfileDocument} from './firebase/firebase.util'
import { setCurrentUser } from './redux/user/user.action';
import './App.css';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
        });
        console.log(this.state);
       });
      }
      setCurrentUser(userAuth);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shoppage} />
          <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to='/' />) : (<SigninAndSignuppage />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
