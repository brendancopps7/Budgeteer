import { action, useStrict, extendObservable } from 'mobx'

export default class Page {
  constructor(){
    let addtlProps = {
      currentPageComponent: null
    }
    extendObservable(this, addtlProps)
  }

  @action home(){
    this.currentPageComponent = null
  }
  @action newCharge(){
    this.currentPageComponent = null
  }
  @action dictionary(){
    this.currentPageComponent = null
  }
  @action monthly(){
    this.currentPageComponent = null
  }
  @action profile(){
    this.currentPageComponent = null
  }
}
