import React from 'react'
import Context from './components/context'
import Menu from './components/menu'
import SideMenu from 'react-native-side-menu'
import Page from './store/page'
import { Provider } from 'mobx-react'

export default class App extends React.Component {
  constructor(){
    super()
    let scope = 'https://www.googleapis.com/auth/sqlservice.admin'
  }

  render() {
    let menu = <Menu/>
    return (
      <Provider page={Page}>
        <SideMenu menu={menu}>
          <Context/>
        </SideMenu>
      </Provider>
    )
  }
}
