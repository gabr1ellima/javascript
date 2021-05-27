import { Cliente } from './Cliente.js'
import { Gerente } from './Funcionario/Gerente.js'
import { Diretor } from './Funcionario/Diretor.js'
import { SistemaAutenticacao } from './SistemaAutenticacao.js';


const diretor = new Diretor('Rodrigo', 10000, 12345678900);
const gerente = new Gerente('Ricardo', 5000, 12378945601);
const cliente = new Cliente('Lais', 789542344112, '456');

diretor.cadastrarSenha('123456')
gerente.cadastrarSenha('123');

const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456');
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123');
const clienteEstaLogado = SistemaAutenticacao.login(cliente, '4565');

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);


