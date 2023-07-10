const botonNumeros = document.getElementsByName('data-numbre');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonBorrar = document.getElementsByName('data-borrar')[0];
const botonCorregir = document.getElementsByName('data-corregir')[0];
const btnSwtich = document.getElementById('toggle');
var result = document.getElementById("resultado");
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

btnSwtich.addEventListener('click',() =>{
  document.body.classList.toggle('dark');

});

botonNumeros.forEach(function(boton){
  boton.addEventListener('click',function(){
    agregarNumero(boton.innerText);
  });
});

botonOpera.forEach(function(boton){
  boton.addEventListener('click',function(){
    selectOperacion(boton.innerText);
  });
});

botonIgual.addEventListener('click',function(){
  calcular();
  actualizarDisplay();
});

botonBorrar.addEventListener('click',function(){
  clear();
  actualizarDisplay();
});

botonCorregir.addEventListener('click',function(){
  borrarUltimoNumero();
  actualizarDisplay();
});

function selectOperacion(op){
  if (opeActual === '') return;
  if (opeAnterior !== ''){
    calcular();
  }
  operacion = op.toString();
  opeAnterior = opeActual;
  opeActual = '';
  result.value = operacion;
}

function calcular(){
  var calculo;
  const anterior = parseFloat(opeAnterior);
  const actual = parseFloat(opeActual);
  if (isNaN(anterior) || isNaN(actual)) return;
  switch(operacion) {
    case '+':
      calculo = anterior + actual;
      break;
    case '-':
      calculo = anterior - actual;
      break;
    case '*':
      calculo = anterior * actual;
      break;
    case '/':
      if (actual === 0) {
        alert("Error: División entre cero");
        return;
      }
      calculo = anterior / actual;
      break;
    default:
      console.log("Operación no válida");
      return;
  }
  opeActual = calculo;
  operacion = undefined;
  opeAnterior = '';
}

function agregarNumero(num){
  opeActual = opeActual.toString() + num.toString();
  actualizarDisplay();
}

function actualizarDisplay(){
  result.value = opeActual;
}

function clear(){
  opeActual = '';
  opeAnterior = '';
  operacion = undefined;
}

function borrarUltimoNumero(){
  if (opeActual.length > 0){
    opeActual = opeActual.slice(0, -1);
  }
}

clear();
