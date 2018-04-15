import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import SearchInput, { createFilter } from 'react-native-search-filter'
import {inject, observer} from 'mobx-react'
import firebase from 'react-native-firebase'

const KEYS_TO_FILTERS = ['term', 'descr', 'related']

@inject('page') @observer
export default class Dictionary extends React.Component{
  constructor(){
    super()
    let list = []
    let ref = firebase.database().ref('tryingstuff-1279c/Dictionary').orderByValue('Term').limitToFirst(100)
    ref.on('child_added', dataSnapshot => {
      let i = 0
      let obj = {}
      dataSnapshot.forEach(item => {
        if (i == 2)
          obj.term = item.val()
        else if (i == 0)
          obj.descr = item.val()
        else
          obj.related = item.val()
        i++
      })
      list.push(obj)
      this.props.page.financialTerms = list
    })
  }

  searchUpdated(term) {
    this.props.page.dictionarySearch = term
  }

  render() {
    const filteredData = this.props.page.financialTerms.filter(createFilter(this.props.page.dictionarySearch, KEYS_TO_FILTERS))
    return (
      <View style={styles.container}>
        <SearchInput
          onChangeText={(term) => { this.searchUpdated(term) }}
          style={styles.searchInput}
          placeholder="Type a message to search"
          />
        <ScrollView>
          {filteredData.map((term, index) => {
            return (
              <TouchableOpacity onPress={()=>alert(term.term)} key={index} style={styles.termItem}>
                <View>
                  <Text>{term.term}</Text>
                  <Text style={styles.termSubject}>{term.descr}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  termItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  termSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
})
