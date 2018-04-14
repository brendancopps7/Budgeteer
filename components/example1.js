import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Example1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>WOW THIS WORKED</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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
