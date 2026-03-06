// BankAcoount.js

"use strict";

// class Owner {
//   constructor(name, location, age) {
//     this.name = name;
//     this.location = location;
//     this.age = age;
//   }
// }

class Konto {
  constructor(iban, owner, balance, status) {
    this._iban = iban;
    this._owner = [owner];
    this._balance = balance;
    this._status = status;
  }

  deposit(deposit) {
    this._balance += deposit;
  }

  withdraw(payout) {
    this._balance -= payout;
  }

  getBalance() {
    return this._balance;
  }
}
