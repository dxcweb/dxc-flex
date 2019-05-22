import React from "react";
import { View, ScrollView, Text } from "react-native";
import Block from "dxc-flex";
export default class Layout extends React.PureComponent {
  render() {
    return (
      <ScrollView>
        <View style={{ margin: 20 }}>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>水平布局(默认)</Text>
          <Block vertical="center" horizontal="center" style={{ width: 300, height: 300, borderColor: "#333", borderWidth: 1 }}>
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, backgroundColor: "#f1f1f1" }}>
              <Text>1</Text>
            </Block>
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, backgroundColor: "#f1f1f1" }}>
              <Text>2</Text>
            </Block>
          </Block>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>垂直布局</Text>
          <Block
            layout="vertical"
            vertical="center"
            horizontal="center"
            style={{ width: 300, height: 300, borderColor: "#333", borderWidth: 1 }}
          >
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, backgroundColor: "#f1f1f1" }}>
              <Text>1</Text>
            </Block>
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, backgroundColor: "#f1f1f1" }}>
              <Text>2</Text>
            </Block>
          </Block>
          <Text style={{ marginTop: 20, marginBottom: 20 }}>流布局（自动换行）</Text>
          <Block
            layout="flow"
            style={{ width: 300, height: 300, borderColor: "#333", borderWidth: 1 }}
          >
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, backgroundColor: "#f1f1f1" }}>
              <Text>1</Text>
            </Block>
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, backgroundColor: "#f1f1f1" }}>
              <Text>2</Text>
            </Block>
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, backgroundColor: "#f1f1f1" }}>
              <Text>3</Text>
            </Block>
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, backgroundColor: "#f1f1f1" }}>
              <Text>4</Text>
            </Block>
            <Block horizontal="center" vertical="center" style={{ width: 80, height: 80, backgroundColor: "#f1f1f1" }}>
              <Text>5</Text>
            </Block>
          </Block>
        </View>
      </ScrollView>
    );
  }
}
