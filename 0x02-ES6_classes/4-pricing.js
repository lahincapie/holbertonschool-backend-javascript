/* eslint-disable */
import Currency from './3-currency'

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }
  set amount(value) {
    if (value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }
  get currency() {
    return this._currency;
  }
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw TypeError('Currency must be a type of Currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return (`${this._amount} ${this._currency.displayFullCurrency()}`)
  }
  static convertPrice(amount, conversionRate) {
    if (amount !== 'number' || conversionRate !== 'number') {
      throw new TypeError('Amount and conversionRate must be a number');
    }
    this._amount = value;
    return (amount * conversionRate);
  }
}