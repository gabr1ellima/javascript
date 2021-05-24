export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  sacar(valor) {
    if(this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if(valor <= 100){
      return; // Early return
    }
    this._saldo += valor;
  }

  transferir(valor, conta) {
    
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}