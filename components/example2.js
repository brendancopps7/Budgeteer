import React from "react";
import { StyleSheet, Text, Button } from "react-native";

export default class Example2 extends React.Component {
  render() {
    return (
      <Button style={styles.container}>
        onPress={() => {
          Alert.alert("Your charge has been added.");
        }}
        title="Add New Charge"
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#85bb65",
    alignItems: "center",
    justifyContent: "center"
  }
});
