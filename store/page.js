import { action, useStrict, extendObservable, computed } from "mobx"
import Dictionary from "../components/dictionary"
import ChargeForm from "../components/chargeForm"
import Homepage from '../components/homepage'
import Monthly from '../components/monthly'
import Profile from '../components/profile'
import Lookahead from '../components/lookahead'

class Page {
  constructor() {
    let addtlProps = {
      currentPageComponent: Homepage,
      title: 'Budgeteer',
      dictionarySearch: '',
      financialTerms: [
        { term: "Taxes", descr: "Scary" },
        { term: "Loans", descr: "" }
      ],
      incomeSliderVal: 0.33,
      rentSliderVal: 0.33,
      foodSliderVal: 0.2,
      travelSliderVal: 0.1,
      entertainmentSliderVal: 0.2,
      otherSliderVal: 0.17
    }
    extendObservable(this, addtlProps)
    this.home = this.home.bind(this)
    this.newCharge = this.newCharge.bind(this)
    this.dictionary = this.dictionary.bind(this)
    this.monthly = this.monthly.bind(this)
    this.profile = this.profile.bind(this)
    this.lookahead = this.lookahead.bind(this)
  }

  @computed get sliderTotal(){
    return parseFloat(Math.round((this.rentSliderVal + this.foodSliderVal + this.travelSliderVal + this.entertainmentSliderVal + this.otherSliderVal) * 10000) / 100).toFixed(2)
  }

  @computed get sliderIsAbove(){
    return this.sliderTotal > 100
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
  @action lookahead() {
    console.log('lookahead')
    this.currentPageComponent = Lookahead
    this.title = 'What If?'
  }
}

const page = new Page()
export default page
