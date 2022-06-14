import { React, Component } from "react";
import { TabBar } from "antd-mobile";
import "./index.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";

import News from "../News";
import Find from "../Find";
import Index from "../Index";
import My from "../My";

import {createBrowserHistory} from 'history'

const history = createBrowserHistory()

export default class Home extends Component {
  state = {
    selectedTab: "tab_home",
  };

  render() {
    return (
      <div className="home">
        <div style={{ backgroundColor: "lightskyblue", padding: 20 }}>
          首页
          <Routes>
            <Route path="/home/index" element={<Index></Index>}></Route>
            <Route path="/home/find" element={<Find></Find>}></Route>
            <Route path="/home/news" element={<News></News>}></Route>
            <Route path="/home/my" element={<My></My>}></Route>
          </Routes>
        </div>

        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          noRenderContent={true}
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<i className="iconfont icon-home"></i>}
            selectedIcon={<i className="iconfont icon-home"></i>}
            selected={this.state.selectedTab === "tab_home"}
            // badge={1}
            onPress={() => {
              this.setState({
                selectedTab: "tab_home",
              });

              // 设置路由跳转
              history.push("/home/index", "tab_home");
            }}
            data-seed="logId"
          ></TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-search"></i>}
            selectedIcon={<i className="iconfont icon-search"></i>}
            title="找房"
            key="find"
            selected={this.state.selectedTab === "tab_find"}
            onPress={() => {
              this.setState({
                selectedTab: "tab_find",
              });

              history.push("/home/find", "tab_find");
            }}
            data-seed="logId1"
          ></TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-news_hot_light"></i>}
            selectedIcon={<i className="iconfont icon-news_hot_light"></i>}
            title="资讯"
            key="News"
            selected={this.state.selectedTab === "tab_news"}
            onPress={() => {
              this.setState({
                selectedTab: "tab_news",
              });

              history.push("/home/news");
            }}
          ></TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-my"></i>}
            selectedIcon={<i className="iconfont icon-my"></i>}
            title="我的"
            key="My"
            selected={this.state.selectedTab === "tab_my"}
            onPress={() => {
              this.setState({
                selectedTab: "tab_my",
              });

              history.push("/home/my");
            }}
          ></TabBar.Item>
        </TabBar>
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //          <Routes>
  //         <Route path="news" element={<News></News>}></Route>
  //       </Routes>
  //       Home组件
  //       <br></br>

  //     </div>
  //   );
  // }
}
