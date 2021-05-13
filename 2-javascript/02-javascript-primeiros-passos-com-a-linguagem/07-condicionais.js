console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if(idadeComprador >= 18) {
//   console.log("Comprador maior de idade");
//   listaDeDestinos.splice(1, 1); // Removendo item
// }else if(estaAcompanhada) {
//   console.log("Comprador está acompanhado");
//   listaDeDestinos.splice(1, 1);
// }else{
//   console.log("Comprador menor de idade e não pode vender");
// }

if(idadeComprador >= 18 || estaAcompanhada == true) {
  console.log("Boa viagem!");
  listaDeDestinos.splice(1, 1); // Removendo item
} else {
  console.log("Comprador menor de idade e não pode vender\n");
}

console.log("Embarque: \n");

if(idadeComprador >= 18 && temPassagemComprada) {
  console("Pode embarcar");
} else {
  console.log("Não pode embarcar");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
