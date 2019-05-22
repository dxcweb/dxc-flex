import React from "react";
import { View, ScrollView, Text } from "react-native";
import Block from "dxc-flex";
export default class Layout extends React.PureComponent {
  render() {
    return (
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={{ marginTop: 20 }}>别在用尴尬的12栅格和24栅格，来使用flex布局，搞定一切。</Text>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>平分宽度</Text>
          <Block vertical="center" horizontal="center" style={{ width: 300, height: 300, borderColor: "#333", borderWidth: 1 }}>
            <Block
              horizontal="center"
              vertical="center"
              style={{ flex: 1, height: 80, backgroundColor: "#f1f1f1", borderColor: "#333", borderWidth: 1 }}
            >
              <Text>1</Text>
            </Block>
            <Block
              horizontal="center"
              vertical="center"
              style={{ flex: 1, height: 80, backgroundColor: "#f1f1f1", borderColor: "#333", borderWidth: 1 }}
            >
              <Text>2</Text>
            </Block>
            <Block
              horizontal="center"
              vertical="center"
              style={{ flex: 1, height: 80, backgroundColor: "#f1f1f1", borderColor: "#333", borderWidth: 1 }}
            >
              <Text>2</Text>
            </Block>
          </Block>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>固定宽度+剩余自动填满</Text>

          <Block vertical="center" horizontal="center" style={{ width: 300, height: 300, borderColor: "#333", borderWidth: 1 }}>
            <Block
              horizontal="center"
              vertical="center"
              style={{ width: 120, height: 80, backgroundColor: "#f1f1f1", borderColor: "#333", borderWidth: 1 }}
            >
              <Text>固定宽度120px</Text>
            </Block>
            <Block
              horizontal="center"
              vertical="center"
              style={{ flex: 1, height: 80, backgroundColor: "#f1f1f1", borderColor: "#333", borderWidth: 1 }}
            >
              <Text>自动填满剩余部分</Text>
            </Block>
          </Block>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>按比例：2:1:1</Text>
          <Block vertical="center" horizontal="center" style={{ width: 300, height: 300, borderColor: "#333", borderWidth: 1 }}>
            <Block
              horizontal="center"
              vertical="center"
              style={{ flex: 2, height: 80, backgroundColor: "#f1f1f1", borderColor: "#333", borderWidth: 1 }}
            >
              <Text>2</Text>
            </Block>
            <Block
              horizontal="center"
              vertical="center"
              style={{ flex: 1, height: 80, backgroundColor: "#f1f1f1", borderColor: "#333", borderWidth: 1 }}
            >
              <Text>1</Text>
            </Block>
            <Block
              horizontal="center"
              vertical="center"
              style={{ flex: 1, height: 80, backgroundColor: "#f1f1f1", borderColor: "#333", borderWidth: 1 }}
            >
              <Text>1</Text>
            </Block>
          </Block>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>垂直布局写法一样</Text>
          <Block layout="vertical" vertical="center" horizontal="center" style={{ width: 300, height: 300, borderColor: "#333", borderWidth: 1 }}>
            <Block
              horizontal="center"
              vertical="center"
              style={{ flex: 2, width: 80, backgroundColor: "#f1f1f1", borderColor: "#333", borderWidth: 1 }}
            >
              <Text>2</Text>
            </Block>
            <Block
              horizontal="center"
              vertical="center"
              style={{ flex: 1, width: 80, backgroundColor: "#f1f1f1", borderColor: "#333", borderWidth: 1 }}
            >
              <Text>1</Text>
            </Block>
            <Block
              horizontal="center"
              vertical="center"
              style={{ flex: 1, width: 80, backgroundColor: "#f1f1f1", borderColor: "#333", borderWidth: 1 }}
            >
              <Text>1</Text>
            </Block>
          </Block>
        </View>
      </ScrollView>
    );
  }
}
