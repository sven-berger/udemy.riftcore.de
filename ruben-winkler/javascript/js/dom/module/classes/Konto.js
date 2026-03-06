"use strict";

class Konto {
  constructor(iban, owner, deposit) {
    this._iban = iban;
    this._owner = [owner];
    this._balance = deposit;
    this._status = true;
  }

  deposit(deposit) {
    this._balance += deposit;
  }

  withDraw(withDraw) {
    this._balance -= withDraw;
  }

  checkBalance() {
    return this._balance;
  }
}

export { Konto };
