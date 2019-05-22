import React from "react";
import { View } from "react-native";
export default class Block extends React.PureComponent {
  render() {
    const { style, el = View, layout = "horizontal", horizontal, vertical } = this.props;
    const El = el;
    const newStyle = {};
    if (layout === "horizontal") {
      newStyle.flexDirection = "row";
    } else if (layout === "vertical") {
      newStyle.flexDirection = "column";
    } else if (layout === "flow") {
      newStyle.flexDirection = "row";
      newStyle.flexWrap = "wrap";
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
        newStyle.justifyContent = "flex-start";
        break;
      case "center":
        newStyle.justifyContent = "center";
        break;
      case "end":
        newStyle.justifyContent = "flex-end";
        break;
      case "around":
        newStyle.justifyContent = "space-around";
        break;
      case "between":
        newStyle.justifyContent = "space-between";
        break;
    }
    switch (align) {
      case "start":
        newStyle.alignItems = "flex-start";
        break;
      case "center":
        newStyle.alignItems = "center";
        break;
      case "end":
        newStyle.alignItems = "flex-end";
        break;
      case "around":
        newStyle.alignItems = "space-around";
        break;
      case "between":
        newStyle.alignItems = "space-between";
        break;
    }
    return <El style={[newStyle, style]}>{this.props.children}</El>;
  }
}
