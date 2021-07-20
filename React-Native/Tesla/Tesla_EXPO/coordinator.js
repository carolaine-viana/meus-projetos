import React from 'react';
import {NativeRouter, Switch, Route} from 'react-router-native';
import CarItem from './components/CarItem';
import CarsList from './components/CarsList/index';
import CustomOrderPage from './view/CustomOrder/index';

const Coordinator = ()  => {
  return (
    <>
    <NativeRouter>
        <Switch>
            <Route exact path="/" component={CarsList}/>
            <Route exact path="/customOrder" component={CustomOrderPage}/>
            {/* <Route exact path="/header" component={Header}/> */}
        </Switch>
     </NativeRouter>
    </>
  );
};

export default Coordinator;