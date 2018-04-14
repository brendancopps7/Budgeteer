import React from 'react'
import Example1 from './example1'
import {inject, observer} from 'mobx-react'

@inject('page') @observer
export default class Context extends React.Component {
  render() {
    return (
      <Example1/>
    )
  }
}
