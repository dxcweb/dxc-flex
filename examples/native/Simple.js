import React from "react";
import Block from "dxc-flex";
import { ScrollView, Text, View } from "react-native";
export default class index extends React.PureComponent {
  render() {
    return (
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>垂直居中</Text>
          <Block vertical="center" style={{ width: 300, height: 300, borderColor: "#333", borderWidth: 1 }}>
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, backgroundColor: "#f1f1f1" }}>
              <Text>1</Text>
            </Block>
          </Block>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>水平居中</Text>
          <Block horizontal="center" style={{ width: 300, height: 300, borderColor: "#333", borderWidth: 1 }}>
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, backgroundColor: "#f1f1f1" }}>
              <Text>1</Text>
            </Block>
          </Block>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>垂直水平居中</Text>
          <Block horizontal="center" vertical="center" style={{ width: 300, height: 300, borderColor: "#333", borderWidth: 1 }}>
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, backgroundColor: "#f1f1f1" }}>
              <Text>1</Text>
            </Block>
          </Block>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>子元素两侧的间隔相等</Text>
          <Block horizontal="around" vertical="center" style={{ width: 300, height: 300, borderColor: "#333", borderWidth: 1 }}>
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, backgroundColor: "#f1f1f1" }}>
              <Text>1</Text>
            </Block>
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, backgroundColor: "#f1f1f1" }}>
              <Text>2</Text>
            </Block>
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, backgroundColor: "#f1f1f1" }}>
              <Text>3</Text>
            </Block>
          </Block>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>子元素两端对齐，项目之间的间隔都相等</Text>
          <Block horizontal="between" vertical="center" style={{ width: 300, height: 300, borderColor: "#333", borderWidth: 1 }}>
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, backgroundColor: "#f1f1f1" }}>
              <Text>1</Text>
            </Block>
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, backgroundColor: "#f1f1f1" }}>
              <Text>2</Text>
            </Block>
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, backgroundColor: "#f1f1f1" }}>
              <Text>3</Text>
            </Block>
          </Block>
        </View>
      </ScrollView>
    );
  }
}
