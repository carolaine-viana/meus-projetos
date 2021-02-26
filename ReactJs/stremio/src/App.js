import React from "react";
import Router from "../src/Router/Router";
import Appcss from './App.css';
import logo from '../src/img/logo.jpg'

export default function App() {
  return (
    <div>
      <img src={logo}/>
      <Router/>
    </div>
  )
}
