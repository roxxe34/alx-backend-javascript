export default class Currency {
  constructor(code, name){
    this.code = code
    this.name = name
  }

  get code() {
    return this._code
  }

  set code(val) {
    if (typeof val != "string") {
      throw new Error("Code must be a string")
    } else {
      this._code = val
    }
  }

  get name() {
    return this._name
  }

  set name(val) {
    if (typeof val != "string") {
      throw new Error("Name must be a string")
    } else {
      this._name = val
    }
  }
  displayFullCurrency() {
    return `${this._name} (${this._code})`
  }
}