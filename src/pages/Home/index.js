import { React, useState, useRef, useEffect } from "react";
import { TabBar } from "antd-mobile-v2";
import "./index.scss";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import News from "../News";
import Find from "../Find";
import Index from "../Index";
import My from "../My";

const tabItems = [
  {
    title: "首页",
    icon: "icon-home",
    path: "index",
  },
  {
    title: "找房",
    icon: "icon-search",
    path: "find",
  },
  {
    title: "资讯",
    icon: "icon-news_hot_light",
    path: "news",
  },
  {
    title: "我的",
    icon: "icon-my",
    path: "my",
  },
];

export default function Home() {
  const initTab = "tab_home";
  const [selectedTab, setSelectedTab] = useState(initTab);
  const navigate = useNavigate();

  const mounting = useRef(true);
  useEffect(() => {
    if (mounting.current) {
      console.log("初次");
      mounting.current = false;
      return;
    }

    console.log("DidUpdated:");
  });

  function renderTabItems() {
    return tabItems.map((item) => {
      return (
        <TabBar.Item
          title={item.title}
          key={item.title}
          icon={<i className={`iconfont ${item.icon}`}></i>}
          selectedIcon={<i className={`iconfont ${item.icon}`}></i>}
          selected={selectedTab === item.path}
          onPress={() => {
            setSelectedTab(item.path);
            navigate(item.path);
          }}
        ></TabBar.Item>
      );
    });
  }

  return (
    <div className="home">
      <div
        style={{
          // backgroundColor: "lightskyblue",
          // padding: 0,
          // width: "100%",
          // top: 0,
          // position: "fixed",
          // paddingBottom: 50
        }}
      >
        <Routes>
          <Route path="index" element={<Index name="gerry"/>}></Route>
          <Route path="find" element={<Find />}></Route>
          <Route path="news" element={<News />}></Route>
          <Route path="my" element={<My></My>}></Route>
        </Routes>
      </div>

      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        noRenderContent={true}
      >
        {renderTabItems()}
      </TabBar>
    </div>
  );
}
