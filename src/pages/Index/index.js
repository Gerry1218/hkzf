import { React, Component, useState, useEffect } from "react";
import {
  Carousel,
  Flex,
  SegmentedControl,
  ImagePicker,
  ListView,
  Grid,
  WingBlank,
} from "antd-mobile-v2";

import axios from "axios";

import home_icon from "../../assets/images/home.png";
import house_user_icon from "../../assets/images/house-user.png";
import map_icon from "../../assets/images/map.png";
import rent_icon from "../../assets/images/rent.png";
import "./index.scss";
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
export default function Index(props) {
  const [data, setData] = useState([
    "AiyWuByWklrrUDlFignR",
    "TekJlZRVCjLFexlOCuWn",
    "IJOtIlfsYdTyaDTRVrLI",
  ]);

  const gridDatas = [
    {
      icon: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F1214%252F3329ce69j00r433h0002ic000hs00vmc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660634299&t=c22c495c5971defbbb1c2bf558aac6d6",
      text: "家住回龙观",
      desc: "归属的感觉",
    },
    {
      icon: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F1107%252F89da264fj00r271wr001ic000hs00vjc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660635379&t=a4f305977e1ae437877fad7c370ac308",
      text: "宜居四五环",
      desc: "大都市生活",
    },
    {
      icon: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F14148915155%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660642341&t=59c99c150ada7b7d2f2b0c2de67a72aa",
      text: "喧嚣三里屯",
      desc: "繁华的背后",
    },
    {
      icon: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F1214%252F3329ce69j00r433h0002ic000hs00vmc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660634299&t=c22c495c5971defbbb1c2bf558aac6d6",
      text: "毗邻十号线",
      desc: "地铁心连心",
    },
  ];

  const newsDatas = [
    {
      id: 1,
      icon: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F13519544642%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660641299&t=4eb331d754d741117b5b17ccd7f847d8",
      text: "置业选择|安贞西里 三室一厅 河间的典雅别墅",
      desc: "新华网",
      date: "2022-05-04",
    },
    {
      id: 2,
      icon: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202108%2F07%2F20210807154919_e1cc8.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660641381&t=d2b1c8a7903984eb9c5759d466848818",
      text: "置业佳选|大理王宫 苍山洱海间的古雅别院",
      desc: "幸福里",
      date: "2022-06-11",
    },
    {
      id: 3,
      icon: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F14274494048%2F1000.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660912451&t=1509430ea450e32b6ed98007f1379a52",
      text: "置业选择|书香名苑 两室两厅 家具电器全 临近天印山农贸市场",
      desc: "新闻网",
      date: "2022-07-18",
    },
    {
      id: 4,
      icon: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202004%2F01%2F20200401150708_bqcok.thumb.400_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660641490&t=a4a565936abcaa23fe14bf1d8153ed1d",
      text: "置业选择|龙湖春江郦城 三室两厅两卫 网红打卡点",
      desc: "头条新闻",
      date: "2022-07-13",
    },
  ];

  // Array.from(new Array(4)).map((_val, i) => ({
  //   icon: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F1214%252F3329ce69j00r433h0002ic000hs00vmc.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1660634299&t=c22c495c5971defbbb1c2bf558aac6d6",
  //   text: `name${i}`,
  //   desc: `desc${i}`,
  // }));

  const [rooms, setRooms] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect...");
    setData([
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg-pre.ivsky.com%2Fimg%2Ftupian%2Fpre%2F201911%2F15%2Fhaian_fengjing-005.jpg&refer=http%3A%2F%2Fimg-pre.ivsky.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659235353&t=e2c4c4ed975f3ff2901c522a9d7fe909",
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdesk-fd.zol-img.com.cn%2Ft_s960x600c5%2Fg5%2FM00%2F01%2F0F%2FChMkJ1bKwumIGQeoAAlO4qHc2PsAALGvAHSE_gACU76711.jpg&refer=http%3A%2F%2Fdesk-fd.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659235353&t=5294656077a75a6691246fc07f62b470",
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fdesk-fd.zol-img.com.cn%2Ft_s960x600c5%2Fg5%2FM00%2F02%2F01%2FChMkJ1bKxEeIAnJkAAWDRtK9IMIAALHEQDS2dEABYNe681.jpg&refer=http%3A%2F%2Fdesk-fd.zol-img.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659235353&t=48f9e9aacf165cca67edd31b48f4abf6",
    ]);

    requestData();

    // 函数组件传参
    console.log("props:", props);

    parseJson();

    myFunction(16).then(
      function (v) {
        console.log("SUCC:", v);
      },
      function (err) {
        console.log("ERR:", err);
      }
    );
  }, []);

  async function myFunction(val) {
    const res = new Promise(function (resolve, reject) {
      if (val > 10) {
        resolve("success...");
      } else {
        reject("error....");
      }
    });

    // return "Hello";
  }

  function parseJson() {
    var obj =
      '{"firstName":"Bill", "lastName":"Gates", "datas":[{"id:":1}, {"id":2}]}     ';

    const a = JSON.parse(obj);

    console.log("parse:", a.firstName, a.lastName, a.datas[0]);
  }

  async function getSwipers() {
    const res = await axios.get("https://httpbin.org?name=gerry");
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
        console.log("requestData:", res);
        const datas = res.data.data;
        setRooms(datas);
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
        style={{ backgroundColor: "#FFF" }}
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

  function renderNews() {
    return newsDatas.map((item) => (
      <div className="new-items">
        <div className="imgWrap">
          <img src={item.icon} width="60px" alt=""></img>
        </div>

        <Flex className="content" direction="column" justify="between">
          <h3 className="content-title">{item.text}</h3>
          <Flex className="content-info" justify="between">
            <span className="gray_title">{item.desc}</span>
            <span className="gray_title">{item.date}</span>
          </Flex>
        </Flex>
      </div>
    ));
  }

  function handleClickItem(item) {
    console.log("handleClickItem ...", item);
    navigate(item.path);
  }

  return (
    <div style={{ overflow: "auto", height: 700}} >
      <Carousel autoplay infinite>
        {renderSwiper()}
      </Carousel>
      <Flex className="nav">{renderNavs()}</Flex>
      <div className="group">
        <h3 className="group-title">
          租房小组
          <span className="more">更多</span>
        </h3>
      </div>
      <Grid
        data={gridDatas}
        columnNum={2}
        square={false}
        hasLine={false}
        renderItem={(dataItem) => (
          <Flex className="group-item" justify="center" align="center">
            <div className="desc">
              <h3 className="title">{dataItem.text}</h3>
              <span className="info">{dataItem.desc}</span>
            </div>

            <img src={dataItem.icon} style={{ width: "60px" }} alt="" />
          </Flex>
        )}
      />

      <div className="group-news">
        <h3 className="group-title">最新资讯</h3>
        <WingBlank size="md">{renderNews()}</WingBlank>
      </div>

      {/* 布局测试 */}
      <Flex
        direction="column"
        align="start"
        style={{ width: "150px", margin: 10 }}
      >
        <img
          width="150px"
          src="https://t7.baidu.com/it/u=2168645659,3174029352&fm=193&f=GIF"
          alt=""
        ></img>
        <Flex align="end">
          <span style={{ fontSize: "20px", padding: "5px" }}>皮影戏</span>
          <b style={{ fontSize: "16px", color: "#F00" }}>29</b>
          <span>.99</span>
        </Flex>
      </Flex>

      <Flex className="test" direction="column" justify="between">
        <h3>测试</h3>
        <Flex className="test1" justify="between">
          <span>日期</span>
          <span>2021-09-10</span>
          </Flex>
        </Flex>
    </div>
  );
}
