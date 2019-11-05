import React,{Component}from "react"
import Burger from "../img/burger.svg"
import {Link}  from "react-router-dom"




class Rigthhead extends Component {
  constructor() {
    super();
  }
  render(){
    return(
      <div className="float-right pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <ul>
            <li><Link className="" to="/login">Log in</Link></li>
            <li><Link className="right" to="/create">Create Account</Link></li>
          </ul>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

      </div>
    )
  }
}
export default Rigthhead
