<<<<<<< HEAD
import { action, useStrict, extendObservable } from "mobx";
import Dictionary from "../components/dictionary";
import ChargeForm from "../components/chargeForm";
=======
import { action, useStrict, extendObservable } from 'mobx'
import Dictionary from '../components/dictionary'
import ChargeForm from '../components/chargeForm'
import Homepage from '../components/homepage'
import Monthly from '../components/monthly'
>>>>>>> 79c96da28e5ad8efb317427ba4cda5dd3282bb17

class Page {
  constructor() {
    let addtlProps = {
<<<<<<< HEAD
      currentPageComponent: null,
      dictionarySearch: "",
=======
      currentPageComponent: Homepage,
      dictionarySearch: '',
>>>>>>> 79c96da28e5ad8efb317427ba4cda5dd3282bb17
      financialTerms: [
        { term: "Taxes", descr: "Scary" },
        { term: "Loans", descr: "" }
      ]
<<<<<<< HEAD
    };
    extendObservable(this, addtlProps);
  }

  @action
  home() {
    this.currentPageComponent = null;
=======
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
>>>>>>> 79c96da28e5ad8efb317427ba4cda5dd3282bb17
  }
  @action
  newCharge() {
    this.currentPageComponent = ChargeForm;
  }
  @action
  dictionary() {
    this.currentPageComponent = Dictionary;
  }
<<<<<<< HEAD
  @action
  monthly() {
    this.currentPageComponent = null;
=======
  @action monthly(){
    this.currentPageComponent = Monthly
>>>>>>> 79c96da28e5ad8efb317427ba4cda5dd3282bb17
  }
  @action
  profile() {
    this.currentPageComponent = Profile;
  }
}

const page = new Page();
export default page;
