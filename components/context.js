import React from 'react'
import {inject, observer} from 'mobx-react'
import { StyleSheet, Text, View } from "react-native"

@inject('page') @observer
export default class Context extends React.Component {
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
