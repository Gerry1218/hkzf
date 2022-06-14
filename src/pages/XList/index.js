// import { Component } from "react"

// export default class List extends Component {
//     render() {
//         return (<div style={{ backgroundColor:'darkblue'}}>List列表</div>)
//     }
// }


import { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Done from "../Done";
import Todo from "../Todo";

export default class XList extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "lightpink" }}>
        XList组件内容
        <br></br>
        <Link to='/list/todo'>todo组件</Link>
        <br></br>
        <Link to='/list/done'>done组件</Link>
        <br></br>
        <Routes>
          <Route path="todo" element={<Todo></Todo>}></Route>
          <Route path="done" element={<Done></Done>}></Route>
        </Routes>
      </div>
    );
  }
}
