import { action, useStrict, extendObservable } from "mobx";
import Dictionary from "../components/dictionary";
import ChargeForm from "../components/chargeForm";

class Page {
  constructor() {
    let addtlProps = {
      currentPageComponent: null,
      dictionarySearch: "",
      financialTerms: [
        { term: "Taxes", descr: "Scary" },
        { term: "Loans", descr: "" }
      ]
    };
    extendObservable(this, addtlProps);
  }

  @action
  home() {
    this.currentPageComponent = null;
  }
  @action
  newCharge() {
    this.currentPageComponent = ChargeForm;
  }
  @action
  dictionary() {
    this.currentPageComponent = Dictionary;
  }
  @action
  monthly() {
    this.currentPageComponent = null;
  }
  @action
  profile() {
    this.currentPageComponent = Profile;
  }
}

const page = new Page();
export default page;
