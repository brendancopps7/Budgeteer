import React from 'react'
import { View, Text,Button } from 'react-native'
import Example1 from './components/example1'
import Menu from './components/menu'
import config from './oauth2-config'
import SideMenu from 'react-native-side-menu'

export default class App extends React.Component {
  constructor(){
    super()
    let scope = 'https://www.googleapis.com/auth/sqlservice.admin'
  }



  render() {
    let menu = <Menu/>
    return (
      <SideMenu menu={menu}>
        <Example1/>
      </SideMenu>
    )
  }
}
