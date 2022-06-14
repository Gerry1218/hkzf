import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import React from "react";
import XList from "./pages/XList";
import Index from "./pages/Index";

function Head() {
  return (
    <Router>
      <div>
        
        <Link to="/list">list组件</Link>
        <br />
        <Link to="/city_list">城市列表</Link>

        <Routes>
          <Route path="/list/*" element={<XList></XList>}></Route>
          <Route path="/city_list" element={<Index></Index>}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default Head;
