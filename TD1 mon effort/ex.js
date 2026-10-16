const pays=["italie","japan", "grece","Espagne","Canada"];
const[p1,...reste]=pays;
//console.log(pays);
const[p11,p2]=pays;
console.log(p2);
reste[0]="Tunisien";
console.log(reste);
console.log(pays);
const p22=pays.map(p=>p);
p22[0]="tunisie";
console.log(p22)
console.log(pays);

const personne=[{nom:"Ahmed",
    ville:"Bizerte",
    age:18},
    {nom:"Samir",
    ville:"Tunisie",
    age:19},
    {nom:"Nermine",
    ville:"Nabeul",
    age:20
}];
const{nom}=personne[0];
const{nom:identifiant}=personne[0];
console.log(nom);
console.log(identifiant);
const noms=personne.map(({nom})=>nom);
console.log(noms);
const nom_age=personne.map(({nom,age})=>({nom,age}));
console.log(nom_age);
const nouvelleP={nom:"Hela",ville:"Bizerte",age:43};
const personne2=[...personne,nouvelleP];
console.log(personne2);