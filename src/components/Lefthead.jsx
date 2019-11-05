import React,{Component}from "react"
import img from "../img/empty.jpg"



class Lefthead extends Component {
  constructor() {
    super();
  }
  render(){
    return(
      <div className="float-left">
      <img className="profileimg" src={img} alt="profile"></img>
      </div>
    )
  }
}
export default Lefthead
