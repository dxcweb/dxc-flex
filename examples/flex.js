import React, { Component } from "react";
import ReactDOM from "react-dom";
import Block from "dxc-flex";

class Flex extends Component {
  render() {
    return (
      <div style={{ margin: 50 }}>
        <h2>Flex 布局</h2>
        <div>别在用尴尬的12栅格和24栅格，来使用flex布局，搞定一切。</div>

        <h3>平分宽度</h3>
        <Block vertical="center" style={{ width: 300, height: 300, borderWidth: 1, border: "1px solid #333" }}>
          <Block horizontal="center" vertical="center" style={{ flex: 1, height: 80, background: "#f1f1f1", border: "1px solid #333" }}>
            1
          </Block>
          <Block horizontal="center" vertical="center" style={{ flex: 1, height: 80, background: "#f1f1f1", border: "1px solid #333" }}>
            2
          </Block>
          <Block horizontal="center" vertical="center" style={{ flex: 1, height: 80, background: "#f1f1f1", border: "1px solid #333" }}>
            3
          </Block>
        </Block>
        <h3>固定宽度+剩余自动填满</h3>
        <Block vertical="center" style={{ width: 300, height: 300, borderWidth: 1, border: "1px solid #333" }}>
          <Block horizontal="center" vertical="center" style={{ width: 120, height: 80, background: "#f1f1f1", border: "1px solid #333" }}>
            固定宽度120px
          </Block>
          <Block horizontal="center" vertical="center" style={{ flex: 1, height: 80, background: "#f1f1f1", border: "1px solid #333" }}>
            自动填满剩余部分
          </Block>
        </Block>
        <h3>按比例：2:1:1</h3>
        <Block vertical="center" style={{ width: 300, height: 300, borderWidth: 1, border: "1px solid #333" }}>
          <Block horizontal="center" vertical="center" style={{ flex: 2, height: 80, background: "#f1f1f1", border: "1px solid #333" }}>
            2
          </Block>
          <Block horizontal="center" vertical="center" style={{ flex: 1, height: 80, background: "#f1f1f1", border: "1px solid #333" }}>
            1
          </Block>
          <Block horizontal="center" vertical="center" style={{ flex: 1, height: 80, background: "#f1f1f1", border: "1px solid #333" }}>
            1
          </Block>
        </Block>
        <h3>垂直布局写法一样</h3>

        <Block layout="vertical" horizontal="center" style={{ width: 300, height: 300, borderWidth: 1, border: "1px solid #333" }}>
          <Block horizontal="center" vertical="center" style={{ flex: 2, width: 80, background: "#f1f1f1", border: "1px solid #333" }}>
            2
          </Block>
          <Block horizontal="center" vertical="center" style={{ flex: 1, width: 80, background: "#f1f1f1", border: "1px solid #333" }}>
            1
          </Block>
          <Block horizontal="center" vertical="center" style={{ flex: 1, width: 80, background: "#f1f1f1", border: "1px solid #333" }}>
            1
          </Block>
        </Block>
      </div>
    );
  }
}
ReactDOM.render(<Flex />, document.getElementById("__react-content"));
