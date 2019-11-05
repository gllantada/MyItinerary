import React from 'react';
import '../App.css';
import Logo from "../img/MYtineraryLogo.png"
import Img1 from "../img/homeIcon.png"
import Circle from "../img/circled-right-2.png"
import {Link}  from "react-router-dom"
import Header from "./Header"
import Carousel from "./Carousel"
function Main() {
  return (
    <div className="App">

      <Header />
        <img className="logo" src={Logo} alt="logo de la empresa"></img>
        <div className="presentation">
          <h3>Find your perfect trip, designed by</h3>
          <h3>Insiders who know and love their cities</h3>
        </div>
        <div className="browsing">

        <img src={Circle} alt="img"></img>
        </div>

        <h5 >Popular Mytineraries</h5>
        <Carousel></Carousel>
        <footer>
        <img src={Img1}alt="hsjdjsd"></img>
        </footer>
    </div>
  );
}

export default Main;
