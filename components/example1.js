import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class Example1 extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Button
            title="Add New Charge"
          />
        </View>
      );
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9533FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
