import React from 'react'
import Example1 from './components/example1'
import config from './oauth2-config'

export default class App extends React.Component {
  constructor(){
    super()
    let scope = 'https://www.googleapis.com/auth/sqlservice.admin'
  }

  render() {
    return (
      <Example1/>
    )
  }
}
