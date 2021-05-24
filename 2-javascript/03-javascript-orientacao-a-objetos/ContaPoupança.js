export class ContaPoupanca {
  constructor(saldoInicial, cliente, agencia) {
    this._saldoInicial = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }
  sacar(valor) {
    taxa = 1.1 * valor;
    if(this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor) {
    if(valor <= 0){
      return; // Early return
    }
    this._saldo += valor;
  }

  transferir(valor, conta) {
    
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}