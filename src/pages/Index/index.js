import { React, Component, useState, useEffect } from "react";
import { Carousel, Flex } from "antd-mobile-v2";

import axios from "axios";

import home_icon from "../../assets/images/home.png";
import house_user_icon from "../../assets/images/house-user.png";
import map_icon from "../../assets/images/map.png";
import rent_icon from "../../assets/images/rent.png";
import "./index.css";
import { useNavigate } from "react-router-dom";

const navs = [
  {
    id: 1,
    icon: home_icon,
    title: "整租",
    path: "/home/list",
  },
  {
    id: 2,
    icon: house_user_icon,
    title: "找房",
    path: "/home/find",
  },
  {
    id: 3,
    icon: map_icon,
    title: "地图",
    path: "/home/map",
  },
  {
    id: 4,
    icon: rent_icon,
    title: "租房",
    path: "/home/rent",
  },
];

const imgHeight = 200;
export default function Index() {
  useEffect(() => {
    console.log("useEffect...");
    setData([
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg-pre.ivsky.com%2Fimg%2Ftupian%2Fpre%2F201911%2F15%2Fhaian_fengjing-005.jpg&refer=http%3A%2F%2Fimg-pre.ivsky.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659235353&t=e2c4c4ed975f3ff2901c522a9d7fe909",
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdesk-fd.zol-img.com.cn%2Ft_s960x600c5%2Fg5%2FM00%2F01%2F0F%2FChMkJ1bKwumIGQeoAAlO4qHc2PsAALGvAHSE_gACU76711.jpg&refer=http%3A%2F%2Fdesk-fd.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659235353&t=5294656077a75a6691246fc07f62b470",
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdesk-fd.zol-img.com.cn%2Ft_s960x600c5%2Fg5%2FM00%2F02%2F01%2FChMkJ1bKxEeIAnJkAAWDRtK9IMIAALHEQDS2dEABYNe681.jpg&refer=http%3A%2F%2Fdesk-fd.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659235353&t=48f9e9aacf165cca67edd31b48f4abf6",
    ]);

    // requestData();
  }, []);

  const [data, setData] = useState([
    "AiyWuByWklrrUDlFignR",
    "TekJlZRVCjLFexlOCuWn",
    "IJOtIlfsYdTyaDTRVrLI",
  ]);

  const navigate = useNavigate();

  // getSwipers()

  function getSwipers() {
    const res = axios.get("https://httpbin.org?name=gerry");
    console.log("getSwipers:", res);
  }

  // 访问斗鱼接口
  function requestData() {
    axios
      .get("/api/v1/live", {
        params: {
          limit: 20,
          offset: 0,
        },
      })
      .then((res) => {
        console.log(res);
        const datas = res.data.data
        setData(datas)
      })
      .catch((ret) => {
        console.log(ret);
      });
  }

  function renderSwiper() {
    return data.map((val) => (
      <a
        key={val}
        href="http://www.alipay.com"
        style={{
          display: "inline-block",
          width: "100%",
          height: imgHeight,
        }}
      >
        <img
          src={val}
          alt=""
          style={{ width: "100%", verticalAlign: "top" }}
          onLoad={() => {
            // fire window resize event to change height
            window.dispatchEvent(new Event("resize"));
            // this.setState({ imgHeight: "auto" });
          }}
        />
      </a>
    ));
  }

  function renderNavs() {
    return navs.map((item) => (
      <Flex.Item
        key={item.id}
        onClick={() => {
          handleClickItem(item);
        }}
      >
        <img src={item.icon} alt=""></img>
        <h2>{item.title}</h2>
      </Flex.Item>
    ));
  }

  function handleClickItem(item) {
    console.log("handleClickItem ...", item);
    navigate(item.path);
  }

  return (
    <div>
      <Carousel autoplay infinite>
        {renderSwiper()}
      </Carousel>
      <Flex className="nav">{renderNavs()}</Flex>
    </div>
  );
}
