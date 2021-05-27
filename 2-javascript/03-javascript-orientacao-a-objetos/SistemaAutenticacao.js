/**
 * Ser autenticavel significa ter um método autenticar
 */

export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    return autenticavel.autenticar(senha);
  }
}