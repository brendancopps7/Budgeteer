import { action, useStrict, extendObservable } from 'mobx'
import Dictionary from '../components/dictionary'
import ChargeForm from '../components/chargeForm'
import Homepage from '../components/homepage'
import Monthly from '../components/monthly'

class Page {
  constructor(){
    let addtlProps = {
      currentPageComponent: Homepage,
      dictionarySearch: '',
      financialTerms: [
        {term: 'Taxes', descr: 'Scary'},
        {term: 'Loans', descr: ''},
      ]
    }
    extendObservable(this, addtlProps)
    this.home = this.home.bind(this)
    this.newCharge = this.newCharge.bind(this)
    this.dictionary = this.dictionary.bind(this)
    this.monthly = this.monthly.bind(this)
    this.profile = this.profile.bind(this)
  }

  @action home(){
    this.currentPageComponent = Homepage
  }
  @action newCharge(){
    this.currentPageComponent = ChargeForm
  }
  @action dictionary(){
    this.currentPageComponent = Dictionary
  }
  @action monthly(){
    this.currentPageComponent = Monthly
  }
  @action profile(){
    this.currentPageComponent = null
  }
}

const page = new Page()
export default page
