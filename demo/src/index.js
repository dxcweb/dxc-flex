import React, { Component } from "react";
import { render } from "react-dom";

import Block from "../../src";

export default class Demo extends Component {
  render() {
    return (
      <div>
        <h1>my-component Demo</h1>
        <Block style={{ width: 100, height: 100, border: "1px solid red" }} horizontal='center'>
          111
        </Block>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
