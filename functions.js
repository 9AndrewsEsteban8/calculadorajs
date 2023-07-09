const botonNumeros = document.getElementsByName('data-numbre');
const botonOpera = document.getElementsByName('data-opera');
const bontonIgual = document.getElementsByName('data-igual')[0];
const botonBorrar = document.getElementsByName('dato-borrar')[0];
var result = document.getElementById("resultado");

botonNumeros.forEach(function(boton){
  boton.addEventListener('click',function(){
    agregarNumero(boton.innerText);
  })
});

botonOpera.forEach(function(boton){
  boton.addEventListener('click',function(){
    selectOperaicon(buton.innerText);
  })
});


bontonIgual.addEventListener('click',function(){
  calcular();
  actualizarDisplay();
});

botonBorrar.addEventListener('click',function(){
  clear();
  actualizarDisplay();
});