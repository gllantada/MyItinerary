import React from 'react';
import './App.css';
import Logo from "./img/MYtineraryLogo.png"
import Img1 from "./img/homeIcon.png"
import Circle from "./img/circled-right-2.png"
import {Link, BrowserRouter ,Route} from "react-router-dom"
import Main from "./components/Main"
import Create from "./components/Create"
import Login from "./components/Login"
function App() {
  return (
  <BrowserRouter>
    <Route exact path="/"component={Main}></Route>
      <Route exact path="/create"component={Create}></Route>
  <Route exact path="/login"component={Login}></Route>
  </BrowserRouter>
  );
}

export default App;
