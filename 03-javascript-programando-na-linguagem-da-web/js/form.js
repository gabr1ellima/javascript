var buttonAdd = document.querySelector('#adicionar-paciente');
  
buttonAdd.addEventListener('click', function(event) {
  event.preventDefault();
  
  var form = document.querySelector('#form-adicionar');
  var paciente = obtemPacienteDoFormulario(form);
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  form.reset();
});

function obtemPacienteDoFormulario (form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTr(paciente) {
  //Cria TR
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");
  //Cria as TD's e a adiciona dentro da TR
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
  // retorna a TR
  return pacienteTr;  
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;

  return td;
}
