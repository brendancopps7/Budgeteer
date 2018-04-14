import React from 'react'
import Homepage from './homepage'
import {inject, observer} from 'mobx-react'

@inject('page') @observer
export default class Context extends React.Component {
  render() {
    return (
      <Homepage/>
    )
  }
}
