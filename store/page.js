import { action, useStrict, extendObservable } from "mobx"
import Dictionary from "../components/dictionary"
import ChargeForm from "../components/chargeForm"
import Homepage from '../components/homepage'
import Monthly from '../components/monthly'
import Profile from '../components/profile'

class Page {
  constructor() {
    let addtlProps = {
      currentPageComponent: Homepage,
      title: 'Budgeteer',
      dictionarySearch: '',
      financialTerms: [
        { term: "Taxes", descr: "Scary" },
        { term: "Loans", descr: "" }
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
    this.title = 'Budgeteer'
  }
  @action newCharge() {
    this.currentPageComponent = ChargeForm
    this.title = 'New Charge'
  }
  @action dictionary() {
    this.currentPageComponent = Dictionary
    this.title = 'Financial Terms'
  }
  @action monthly(){
    this.currentPageComponent = Monthly
    this.title = 'Monthly Breakdown'
  }
  @action profile() {
    this.currentPageComponent = Profile
    this.title = 'Profile'
  }
}

const page = new Page()
export default page
