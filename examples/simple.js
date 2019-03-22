import React, { Component } from "react";
import ReactDOM from "react-dom";
import Block from "dxc-flex";

class Simple extends Component {
  render() {
    return (
      <div style={{ margin: 50 }}>
        <h3>垂直居中</h3>
        <Block vertical="center" style={{ width: 300, height: 300, borderWidth: 1, border: "1px solid #333" }}>
          <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, background: "#f1f1f1" }}>
            1
          </Block>
        </Block>
        <h3>水平居中</h3>
        <Block horizontal="center" style={{ width: 300, height: 300, borderWidth: 1, border: "1px solid #333" }}>
          <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, background: "#f1f1f1" }}>
            1
          </Block>
        </Block>
        <h3>垂直水平居中</h3>
        <Block horizontal="center" vertical="center" style={{ width: 300, height: 300, borderWidth: 1, border: "1px solid #333" }}>
          <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, background: "#f1f1f1" }}>
            1
          </Block>
        </Block>


        <h3>子元素两侧的间隔相等</h3>
        <Block horizontal="around" vertical="center" style={{ width: 300, height: 300, borderWidth: 1, border: "1px solid #333" }}>
          <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, background: "#f1f1f1" }}>
            1
          </Block>
          <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, background: "#f1f1f1" }}>
            2
          </Block>
          <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, background: "#f1f1f1" }}>
            3
          </Block>
        </Block>
        <h3>子元素两端对齐，项目之间的间隔都相等</h3>
        <Block horizontal="between" vertical="center" style={{ width: 300, height: 300, borderWidth: 1, border: "1px solid #333" }}>
          <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, background: "#f1f1f1" }}>
            1
          </Block>
          <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, background: "#f1f1f1" }}>
            2
          </Block>
          <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, background: "#f1f1f1" }}>
            3
          </Block>
        </Block>
      </div>
    );
  }
}
ReactDOM.render(<Simple />, document.getElementById("__react-content"));
