import React from "react";
import t from "tcomb-form-native";
import { StyleSheet, Text, View, FlatList, Form } from "react-native";

var Form = t.form.Form;
const incomeFreq = t.enums({
  W: "Weekly",
  BW: "Bi-Weekly",
  M: "Monthly"
});
const savingsContrib = t.enums({
  P: "%",
  F: "Flat Amount"
});

const income = t.struct({
  Income: t.Number
});

const Percent = t.refinement(t.Number, function(n) {
  return n >= 0 && n <= 100;
});

export default class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Form type={incomeFreq} />
        <Form type={income} />
        <Form type={savingsContrib} />
        <FlatList
          data={[
            { key: "Rent" },
            { key: "Gym Membership" },
            { key: "Cat Food" },
            { key: "Diapers" },
            { key: "PECO" },
            { key: "Health Insurance" },
            { key: "Water" },
            { key: "Netflix" }
          ]}
          renderItem={({ item }) => (
            <Text style={styles.item}>{item.key}:</Text>
          )}
        />
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
