import { React, Component } from "react";
import './index.scss'

export default class My extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "springgreen", padding: 10 }}>
        My组件内容
        <div className="box">
        <div style={{ backgroundColor:"#f00", width: "40px", margin: "5px"}}>1</div>
        <div style={{ backgroundColor:"#ff0", width: "40px", height:"30px", margin: "5px", fontSize:"40px"}}>2</div>
        <div style={{ backgroundColor:"#f0f", width: "40px", height:"30px", margin: "5px"}}>3</div>
        <div style={{ backgroundColor:"#555", width: "40px", height:"30px", margin: "5px"}}>4</div>
        <div style={{ backgroundColor:"#AAA", width: "40px", height:"30px", margin: "5px"}}>5</div>
      </div>
      </div>
    );
  }
}
