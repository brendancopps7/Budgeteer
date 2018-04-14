import React from 'react'
import Example from './components/example'
import config from './oauth2-config'

export default class App extends React.Component {
  constructor(){
    super()
    let scope = 'https://www.googleapis.com/auth/sqlservice.admin'
  }

  render() {
    return (
      <Example/>
    )
  }
}
