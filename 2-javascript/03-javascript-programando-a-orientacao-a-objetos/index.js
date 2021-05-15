class Cliente {
  nome;
  cpf;
}

class ContaCorrente {
  agencia;
  // #saldo = 0; https://github.com/tc39/proposal-class-fields#private-fields
  _saldo = 0;

  sacar(valor) {
    if(this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if(valor > 0){
      return; // Early return
    }
    this._saldo += valor;
  }
}

const cliente1 = new Cliente();
cliente1.nome = "Gabriel";
cliente1.cpf = "11122233309";

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = "88822233309";

const contaCorrenteGabriel = new ContaCorrente();
contaCorrenteGabriel.agencia = 1001;

contaCorrenteGabriel.depositar(100);
contaCorrenteGabriel.depositar(100);
contaCorrenteGabriel.depositar(100);


const valorSacado = contaCorrenteGabriel.sacar(50);

console.log(valorSacado);
console.log(contaCorrenteGabriel);

