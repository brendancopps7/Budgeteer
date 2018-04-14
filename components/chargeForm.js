import React from "react"
import t from "tcomb-form-native"
import { StyleSheet, Text, View, Button } from "react-native"

var Form = t.form.Form

const chargeForm = t.struct({
  charge: t.String,
  chargeAmt: t.Number
})

export default class ChargeForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Form type={chargeForm}/>
        <Button
          title="Submit"
          color="#85bb65"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})
