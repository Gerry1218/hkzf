import { React, Component, useState, useEffect } from "react";
import {
  Flex,
  SegmentedControl,
  ImagePicker,
  ListView,
} from "antd-mobile-v2";
import './index.scss'

const dataList = [
  {
    img: "https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",
    title: "Meet hotel",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",
    title: "McDonald's invites you",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
  {
    img: "https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png",
    title: "Eat the week",
    des: "不是所有的兼职汪都需要风吹日晒",
  },
];

const NUM_ROWS = 6;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataBlob = {};
  for (let i = 0; i < NUM_ROWS; i++) {
    const ii = pIndex * NUM_ROWS + i;
    dataBlob[`${ii}`] = `row - ${ii}`;
  }
  return dataBlob;
}

export default function Find() {

  const [files, setFiles] = useState([
    {
      url: "https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg",
      id: "2121",
    },
    {
      url: "https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg",
      id: "2122",
    },
  ]);

  const [multiple, setMultiple] = useState(0);

  const [dataSource, setDataSource] = useState(
    new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })
  );

  const [isLoading] = useState(false);

  
  let index = dataList.length - 1;
  const row = (rowData, sectionID, rowID) => {
    if (index < 0) {
      index = dataList.length - 1;
    }
    const obj = dataList[index--];
    return (
      <div key={rowID} style={{ padding: "0 15px" }}>
        <div
          style={{
            lineHeight: "50px",
            color: "#888",
            fontSize: 18,
            borderBottom: "1px solid #F6F6F6",
          }}
        >
          {obj.title}
        </div>
        <div
          style={{ display: "-webkit-box", display: "flex", padding: "15px 0" }}
        >
          <img
            style={{ height: "64px", marginRight: "15px" }}
            src={obj.img}
            alt=""
          />
          <div style={{ lineHeight: 1 }}>
            <div style={{ marginBottom: "8px", fontWeight: "bold" }}>
              {obj.des}
            </div>
            <div>
              <span style={{ fontSize: "30px", color: "#FF6E27" }}>35</span>¥{" "}
              {rowID}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const separator = (sectionID, rowID) => (
    <div
      key={`${sectionID}-${rowID}`}
      style={{
        backgroundColor: "#F5F5F9",
        height: 8,
        borderTop: "1px solid #ECECED",
        borderBottom: "1px solid #ECECED",
      }}
    />
  );

  useEffect(() => {
    console.log("useEffect...");
    setDataSource(dataSource.cloneWithRows(genData()));
    console.log("datasouce:", dataSource);
  }, [])

    return (
      <div className="page">
        Find组件内容

        <SegmentedControl
        values={["切换到单选", "切换到多选"]}
        selectedIndex={multiple ? 1 : 0}
        onChange={onSegChange()}
      />
      <ImagePicker
        files={files}
        onChange={onChange()}
        onImageClick={(index, fs) => console.log(index, fs)}
        selectable={files.length < 7}
        multiple={multiple}
      />
      <ListView
        // ref={el => this.lv = el}
        dataSource={dataSource}
        // renderHeader={() => <span>header</span>}
        // renderFooter={() => (
        //   <div style={{ padding: 30, textAlign: "center" }}>
        //     {isLoading ? "Loading..." : "Loaded"}
        //   </div>
        // )}
        // renderSectionHeader={sectionData => (
        //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
        // )}
        // renderBodyComponent={() => <MyBody />}

        renderRow={row}
        renderSeparator={separator}
        className="listview"
        pageSize={4}
        onScroll={() => {
          console.log("scroll");
        }}
        scrollRenderAheadDistance={500}
        // onEndReached={this.onEndReached}
        onEndReachedThreshold={10}
      />
      </div>)


  function onSegChange() {}
  function onChange() {}


}


function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      <span style={{ display: "none" }}>you can custom body wrap element</span>
      {props.children}
    </div>
  );
}