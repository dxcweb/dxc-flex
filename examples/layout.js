import React, { Component } from "react";
import ReactDOM from "react-dom";
import Block from "dxc-flex";

class Layout extends Component {
  render() {
    return (
      <div style={{ margin: 50 }}>
        <h2>布局方式</h2>
        <h3>水平布局</h3>
        <Block vertical="center" horizontal="center" style={{ width: 300, height: 300, borderWidth: 1, border: "1px solid #333" }}>
          <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, background: "#f1f1f1", margin: 10 }}>
            1
          </Block>
          <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, background: "#f1f1f1", margin: 10 }}>
            2
          </Block>
        </Block>

        <h3>垂直布局</h3>
        <Block
          layout="vertical"
          vertical="center"
          horizontal="center"
          style={{ width: 300, height: 300, borderWidth: 1, border: "1px solid #333" }}
        >
          <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, background: "#f1f1f1", margin: 10 }}>
            1
          </Block>
          <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, background: "#f1f1f1", margin: 10 }}>
            2
          </Block>
        </Block>

        <h3>流布局（自动换行）</h3>
        <div style={{ width: 300, height: 300, borderWidth: 1, border: "1px solid #333" }}>
          <Block layout="flow">
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, background: "#f1f1f1", margin: 10 }}>
              1
            </Block>
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, background: "#f1f1f1", margin: 10 }}>
              2
            </Block>
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, background: "#f1f1f1", margin: 10 }}>
              3
            </Block>
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, background: "#f1f1f1", margin: 10 }}>
              4
            </Block>
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, background: "#f1f1f1", margin: 10 }}>
              5
            </Block>
          </Block>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Layout />, document.getElementById("__react-content"));
