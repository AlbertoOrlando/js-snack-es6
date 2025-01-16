const bici = [
    { "nome" : "Pinariello", "peso" : 5},
    { "nome" : "Canion", "peso" : 6},
    { "nome" : "Triban", "peso" : 7}
];

const biciLegera = bici[0];

for (let i = 0; i < bici.length; i++) {
    if ( bici[i].peso < biciLegera.peso){
        biciLegera = bici[i]
    }
}

console.log(biciLegera.peso);
