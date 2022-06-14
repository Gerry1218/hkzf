import "./index.css";
import "antd-mobile/dist/antd-mobile.css";
import { BrowserRouter as Router, Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";

function App(props) {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home/*"  element={<Home></Home>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

