import React,{Component}from "react"

import {Link}  from "react-router-dom"
import img from "../img/empty.jpg"


class Header extends Component {
  constructor() {
    super()
  }
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light ">
      <img className="profileimg img-responsive" src={img} alt="profile"></img>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse hide navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">

        <Link  to="/login"><li className="nav-item">Log In </li></Link>
        <Link  to="/Create"><li className="nav-item">Create Account </li></Link>


      </ul>

    </div>
  </nav>

    )
  }
}




export default Header
