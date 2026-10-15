const reservations = [
{ numero: 101, client: "Nadia", destination: "Bali", montant: 1800,
statut: "Confirmée" },
{ numero: 102, client: "Karim", destination: "Rome", montant: 950,
statut: "En attente" },
{ numero: 103, client: "Leila", destination: "Tokyo", montant: 2500,
statut: "Confirmée" },
{ numero: 104, client: "Sami", destination: "Santorin", montant: 1200,
statut: "Annulée" },
{ numero: 105, client: "Amira", destination: "Djerba", montant: 500,
statut: "Confirmée" }
];

const reserva=reservations.filter(res=> res.statut==="Confirmée" );
console.log(reserva);
//2
const nomsC= reservations.map(res=> res.client);
console.log(nomsC);
//3
const recher=reservations.find(res=>res.numero===103);
console.log(recher);
//4
const totalR=reserva.reduce((total,res)=> total+ res.montant,0);
console.log(totalR);
//5
const verif=reservations.every(res=> res.statut==="Confirmée");
console.log(verif);
//6
const nouveauTab=reservations.map(res=>({client:res.client,
    voyage:res.destination}
));
console.log(nouveauTab);
