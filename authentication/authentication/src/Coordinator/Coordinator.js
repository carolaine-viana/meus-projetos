import React from 'react';
import HomePage from '../HomePage/HomePage';
import CreateUser from '../CreateUser/CreateUser';
import LoginPage from '../LoginPage/Login';
import {NativeRouter, Switch, Route} from 'react-router-native';

const Coordinator = ()  => {
  return (
    <>
    <NativeRouter>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/create" component={CreateUser}/>
        </Switch>
     </NativeRouter>
    </>
  );
};

export default Coordinator;
