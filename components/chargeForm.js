import React from "react";
import { StyleSheet, Text, View, Button, Form, Input } from "react-native";

export default class chargeForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Form className="chargeForm">
          <Input type="text" name="charge" placeholder="charge" />
          <Input type="number" name="charge-amt" placeholder="100.00" />
          <Button
            onPress={}
            title="Submit"
            color="#85bb65"
          />
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
