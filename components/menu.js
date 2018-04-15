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
        <Button title="What If" onPress={this.props.page.lookahead}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingTop: 20,
    marginTop: 20
  },
})
