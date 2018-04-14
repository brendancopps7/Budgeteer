import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class Menu extends React.Component {
  render() {
    return (
      <View>
        <Text>Menu</Text>
        <Text>Menu</Text>
        <Text>Menu</Text>
        <Text>Menu</Text>
        <Text>Menu</Text>
        <Text>Menu</Text>
        <Text>Menu</Text>
        <Text>Menu</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
