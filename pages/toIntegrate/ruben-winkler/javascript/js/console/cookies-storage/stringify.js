"use strict";

class Konto {
  constructor(iban, owner, balance) {
    this._iban = iban;
    this._owner = owner;
    this._balance = balance;
  }

  deposit(deposit) {
    this._balance += deposit;
  }

  withdraw(withdraw) {
    this._balance -= withdraw;
  }

  getBalance() {
    return this._balance;
  }
}

let bankAccount = new Konto(
  "DE02120300000000202051",
  "Sven Oliver Berger",
  5000,
);

console.log(bankAccount.getBalance());
console.log(bankAccount);

console.log("------");

const myStrinify = JSON.stringify(bankAccount);
console.log(myStrinify);

console.log("------");

const myParse = JSON.parse(myStrinify);
console.log(myParse);

console.log("------");

let newClass = new Konto(myParse._iban, myParse._owner, myParse._balance);
console.log(newClass);
