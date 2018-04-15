import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {inject} from 'mobx-react'

@inject('page')
export default class Homepage extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <View style={{paddingBottom: 10}}>
            <Text style={{fontSize: 20}}>Budgeteer</Text>
          </View>
          <View style={{flex: 1,justifyContent: "center"}}>
            <Text>Monthly Budget: </Text>
            <Text>{"What's Left: "}</Text>
            <Button
              title="Create Charge"
              onPress={this.props.page.newCharge}
            />
          </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingTop: 20,
  }
});
