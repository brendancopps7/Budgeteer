import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'


export default class Example1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Header</Text>
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Press Me"
        />
        <Text>Footer</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9533FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: 
  {


  }
})
