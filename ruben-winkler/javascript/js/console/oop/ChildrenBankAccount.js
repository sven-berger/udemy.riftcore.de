"use strict";

class Kinderkonto extends Konto {
  constructor(iban, owner, balance, status, limit) {
    super(iban, owner, balance, status);
    this._limit = limit * -1;
  }

  _checkSaldo(payout) {
    // if (this._balance <= payout) {
    //   return false;
    // } else {
    //   return true;
    // }

    return this._balance <= payout ? false : true;
  }

  withdraw(payout) {
    // if (this._checkSaldo(payout)) {
    //   super.withdraw(payout);
    //   alert("Auszahlung erfolgreich");
    // } else {
    //   alert("Auszahlung nicht möglich.");
    // }

    this._checkSaldo(payout)
      ? alert("Auszahlung erfolgreich")
      : alert("Auszahlung nicht möglich.");
  }
}
