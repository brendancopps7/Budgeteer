import React from 'react'
import {inject, observer} from 'mobx-react'
import { StyleSheet, Text, View } from "react-native"
import firebase from 'react-native-firebase'

@inject('page') @observer
export default class Context extends React.Component {
  constructor(){
    super()
    let ref = firebase.database().ref()
    ref.once('child_added', dataSnapshot => {
      console.log(dataSnapshot)
      console.log(dataSnapshot.key, dataSnapshot._value)
    })
    firebase.database().ref().push({
      title: 'Hello',
      author: 'Other'
    })
  }

  render() {
    let Component = this.props.page.currentPageComponent
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.page.title}</Text>
        </View>
        <Component/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    alignItems: "center"
  },
  title: {
    fontSize: 20
  }
})
