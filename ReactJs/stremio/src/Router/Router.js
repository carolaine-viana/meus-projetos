import React from "react";
import HomePage from "../Pages/HomePage/HomePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Movies from '../Pages/Movies/Movies';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/movies">
          <Movies/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
