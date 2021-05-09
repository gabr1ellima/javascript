var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++) {

  paciente = pacientes[i];

  var tdPeso = paciente.querySelector('.info-peso');
  var peso = parseFloat((tdPeso.textContent));

  var tdAltura =  paciente.querySelector('.info-altura');
  var altura = parseFloat((tdAltura.textContent));

  var tdImc = paciente.querySelector('.info-imc');

  var pesoIsValid = validaPeso(peso); // true ou false
  var alturaIsValid = validaAltura(altura);

  if(!pesoIsValid){
    tdImc.textContent = 'Peso inválido!';
    paciente.classList.add('paciente-invalido');
  }

  if(!alturaIsValid) {
    tdImc.textContent = 'Altura inválida!';
    paciente.classList.add('paciente-invalido');
  }

  if(pesoIsValid && alturaIsValid) {
    var imc = calcImc(peso, altura);
    tdImc.textContent = imc;
  }

}

function validaPeso(peso) {
  if(peso > 0 && peso < 1000) {
    return true;
  }else {
    return false;
  }
}

function validaAltura(altura) {
  if(altura > 0 && altura < 3.0) {
    return true;
  }else {
    return false;
  }
}

function calcImc(peso, altura) {
  var imc = 0;

  imc = peso / (altura * altura);

  return imc.toFixed(2);
}
