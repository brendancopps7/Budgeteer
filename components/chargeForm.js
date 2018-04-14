import React from "react";
import t from "tcomb-form-native";
import { StyleSheet, Text, View, Button, Form } from "react-native";

const chargeForm = t.struct({
  charge: t.String,
  chargeAmt: t.Number
});

export default class chargeForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Form type={chargeForm }/>
        <Button
          onPress={}
          title="Submit"
          color="#85bb65"
        />
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
