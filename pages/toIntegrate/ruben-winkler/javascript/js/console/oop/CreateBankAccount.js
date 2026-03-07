"use strict";

const CustomerBerger = new Konto(
  "DE02120300000000202051",
  "Sven Oliver Berger",
  3000,
  true,
);

// const ownerRohleder = new Owner("Loveday Isa Rohleder", "Hünstetten", 25);
const CustomerRohleder = new Konto(
  "DE02500105170137075030",
  "Loveday Isa Rohleder",
  2000,
  true,
);

// const ownerHansFranz = new Owner("Hans Peter", "Hofheim am Taunus", 46);
const CustomerHansFranz = new Konto(
  "DE02100500000054540402",
  "Hans Franz",
  0,
  false,
);

const ChildrenCustomerSarah = new Kinderkonto(
  "DE02100100100006820101",
  "Sarah Wagner",
  250,
  true,
  100,
);
