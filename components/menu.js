import React from 'react'
import { StyleSheet, Button, View } from 'react-native'
import {inject} from 'mobx-react'

@inject ('page')
export default class Menu extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title="Home" onPress={this.props.page.home}/>
        <Button title="Dictionary" onPress={this.props.page.dictionary}/>
        <Button title="Monthly Breakdown" onPress={this.props.page.monthly}/>
        <Button title="Profile" onPress={this.props.page.profile}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'top',
    justifyContent: 'top',
    marginTop: 20
  },
})
