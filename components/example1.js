import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class Example1 extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <Text></Text>
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
    backgroundColor: '#FFE5B4',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
