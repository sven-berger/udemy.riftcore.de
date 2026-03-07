import { Konto } from "./Konten.js";

class Kinderkonto extends Konto {
  constructor(iban, owner, deposit, limit) {
    super(iban, owner, deposit);
    this._limit = limit * -1;
  }

  _checkBalance(withdraw) {
    return this.balance - withdraw < this._limit ? true : false;
  }

  withdraw(withdraw) {
    !this._checkBalance(withdraw)
      ? super.withDraw(withdraw)
      : console.log("Auszahlung nicht möglich: Limit überschritten.");
  }
}

export { Kinderkonto as ChildAccount };
