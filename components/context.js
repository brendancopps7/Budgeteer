import React from 'react'
import Monthly from './monthly'
import {inject, observer} from 'mobx-react'

@inject('page') @observer
export default class Context extends React.Component {
  render() {
    let Component = this.props.page.currentPageComponent
    return (
      <Monthly/>
    )
  }
}
