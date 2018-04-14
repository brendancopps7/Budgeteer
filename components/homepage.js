import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class homepage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Monthly Budget: </Text>
        <Text>What's Left: </Text>
        <Button title="Create Charge" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A2FFB1",
    alignItems: "center",
    justifyContent: "center"
  }
});
