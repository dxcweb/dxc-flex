/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
class Block extends React.PureComponent {
  render() {
    const { children, layout = "horizontal", horizontal, vertical, ...props } = this.props;
    const css = {};
    if (layout === "horizontal") {
      css.display = "flex";
      css.flexFlow = "row";
    } else if (layout === "vertical") {
      css.display = "flex";
      css.flexFlow = "column";
    } else if (layout === "flow") {
      css.display = "flex";
      css.flexFlow = "wrap";
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
        css.justifyContent = "flex-start";
        break;
      case "center":
        css.justifyContent = "center";
        break;
      case "end":
        css.justifyContent = "flex-end";
        break;
      case "around":
        css.justifyContent = "space-around";
        break;
      case "between":
        css.justifyContent = "space-between";
        break;
      default:
    }
    switch (align) {
      case "start":
        css.alignItems = "flex-start";
        break;
      case "center":
        css.alignItems = "center";
        break;
      case "end":
        css.alignItems = "flex-end";
        break;
      default:
    }
    return (
      <div css={css} {...props}>
        {children}
      </div>
    );
  }
}
export default Block;
