import React, { Component, createElement } from "react";

export default class Block extends Component {
  render() {
    const { el = "div", className, children, layout = "horizontal", horizontal, vertical, ...props } = this.props;
    const classArr = className ? className.split(" ") : [];
    if (layout === "horizontal") {
      classArr.push("block-horizontal-layout");
    } else if (layout === "vertical") {
      classArr.push("block-vertical-layout");
    } else if (layout === "flow") {
      classArr.push("block-flow-layout");
    }
    let justify, align;
    if (layout === "horizontal" || layout === "flow") {
      justify = horizontal;
      align = vertical;
    } else if (layout === "vertical") {
      justify = vertical;
      align = horizontal;
    }

    switch (justify) {
      case "start":
        classArr.push("block-justify-start");
        break;
      case "center":
        classArr.push("block-justify-center");
        break;
      case "end":
        classArr.push("block-justify-end");
        break;
      case "around":
        classArr.push("block-justify-around");
        break;
      case "between":
        classArr.push("block-justify-between");
        break;
      default:
    }
    switch (align) {
      case "start":
        classArr.push("block-align-start");
        break;
      case "center":
        classArr.push("block-align-center");
        break;
      case "end":
        classArr.push("block-align-end");
        break;
      default:
    }
    const newProps = { ...props, className: classArr.join(" ") };
    return createElement(el, newProps, children);
  }
}
