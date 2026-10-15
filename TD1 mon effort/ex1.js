const destinations = [
{ id: 1, ville: "Santorin", pays: "Grèce", prix: 1200, duree: 7,
disponible: true },
{ id: 2, ville: "Bali", pays: "Indonésie", prix: 1800, duree: 10,
disponible: true },
{ id: 3, ville: "Istanbul", pays: "Turquie", prix: 750, duree: 5,
disponible: false },
{ id: 4, ville: "Rome", pays: "Italie", prix: 950, duree: 4,
disponible: true },
{ id: 5, ville: "Tokyo", pays: "Japon", prix: 2500, duree: 12,
disponible: true },
{ id: 6, ville: "Djerba", pays: "Tunisie", prix: 500, duree: 6,
disponible: false }
];
//1
destinations.forEach(dest=> {console.log(dest.ville)});
//2
const villes=destinations.map(dest=> dest.ville);
console.log(villes);
//3
let prixInf= destinations.filter(dest=> dest.prix<=1500 );
console.log(prixInf);
//4
let id3=destinations.find(dest=>dest.id==3 );
console.log(id3);
//5
let tokindex=destinations.findIndex(dest=>dest.ville=="Tokyo");
console.log(tokindex);
//6
let destAuMoins=destinations.some(dest=> dest.ville);
console.log(destAuMoins);
//7
let sup= destinations.every(dest=> dest.prix>0);
console.log(sup);
//8
let Budtotal =destinations.reduce((total, dest) => total + dest.prix ,0);
console.log(Budtotal);
