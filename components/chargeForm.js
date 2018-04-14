import React from "react";
import t from "tcomb-form-native";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

var Form = t.form.Form;

const chargeForm = t.struct({
  charge: t.String,
  chargeAmt: t.Number
});

export default class ChargeForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Form type={chargeForm} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.onPress}
          underlayColor="#99d9f4"
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableHighlight>
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
  },

  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center"
  },

  button: {
    height: 36,
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  }
});
