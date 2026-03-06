"use stricts";

const ourSupermarket = [
  ["Müsli", "Staubsauger", "Nudeln", "Kartoffelpüree", "Tomatenmark"],
  ["Frische Milch", "Joghurt", "Sahne", "Salami", "Pudding"],
  ["Cola", "Orangensaft", "Energydrink", "Wasser", "Apfelschorle"],
];

for (let i = 0; i < ourSupermarket.length; i++) {
  for (let j = 0; j < ourSupermarket[i].length; j++) {
    console.log(ourSupermarket[i][j]);
  }
}
