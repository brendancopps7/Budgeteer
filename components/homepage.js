import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {inject} from 'mobx-react'

@inject('page')
export default class Homepage extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text>Monthly Budget: </Text>
          <Text>{"What's Left: "}</Text>
          <Button
            title="Create Charge"
            onPress={this.props.page.newCharge}
          />
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  }
});
