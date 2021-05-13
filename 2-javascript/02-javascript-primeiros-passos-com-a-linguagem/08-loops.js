console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\nDestinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador < listaDeDestinos.length){
  if(listaDeDestinos[contador] == destino) {
    destinoExiste = true;
    break;
  }
  contador++;
}

console.log("Destino existe:", destinoExiste);

if(podeComprar && destinoExiste) {
  console.log("Boa viagem");
} else {
  console.log("Desculpe, ocorreu um erro!");
}

for(let i = 0 ; i < listaDeDestinos.length ; i++){
  if(listaDeDestinos[contador] == destino) {
    destinoExiste = true;
  }
}
