import React from "react"
import t from "tcomb-form-native"
import { StyleSheet, Text, View, TouchableHighlight } from "react-native"
import { inject } from 'mobx-react'

var Form = t.form.Form

const chargeForm = t.struct({
  description: t.String,
  amount: t.Number
})

@inject('page')
export default class ChargeForm extends React.Component {
  constructor() {
    super()
    this.onPress = this.onPress.bind(this)
  }

  onPress() {
    this.props.page.home()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Form type={chargeForm} />
          <TouchableHighlight
            style={styles.button}
            onPress={this.onPress}
            underlayColor="#99d9f4"
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: "#fff",
    padding: 20,
  },

  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center"
  },

  button: {
    flex: 0.8;
    height: 36,
    flex: 0.8,
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  }
})
