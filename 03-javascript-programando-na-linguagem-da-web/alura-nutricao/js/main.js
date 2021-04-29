var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++) {

  paciente = pacientes[i];

  var tdPeso = paciente.querySelector('.info-peso');
  var peso = parseFloat((tdPeso.textContent));

  var tdAltura =  paciente.querySelector('.info-altura');
  var altura = parseFloat((tdAltura.textContent));

  var imc = peso / (altura * altura);

  var tdImc = paciente.querySelector('.info-imc');

  var pesoIsValid = true;
  var alturaIsValid = true;

  if(peso <= 0 || peso >= 1000){
    pesoIsValid = false;
    tdImc.textContent = 'Peso inválido!';
    paciente.classList.add('paciente-invalido');
  }

  if(altura <= 0 || altura >= 3.00) {
    alturaIsValid = false;
    tdImc.textContent = 'Altura inválida!';
    paciente.classList.add('paciente-invalido');
  }

  if(pesoIsValid && alturaIsValid) {
    var tdImc = paciente.querySelector('.info-imc');
    tdImc.textContent = imc.toFixed(2);
  }

}
