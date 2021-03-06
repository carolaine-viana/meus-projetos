import React from 'react';
import HomePage from '../pages/HomePage/HomePage';
import SignUp from '../pages/signUp/signUp';
import LoginPage from '../pages/LoginPage/LoginPage';
import {NativeRouter, Switch, Route} from 'react-router-native';
import Loading from '../pages/Loading/Loading';

const Coordinator = ()  => {
  return (
    <>
    <NativeRouter>
        <Switch>
            <Route exact path="/" component={Loading}/>
            <Route exact path="/home" component={HomePage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/create" component={SignUp}/>
        </Switch>
     </NativeRouter>
    </>
  );
};

export default Coordinator;
