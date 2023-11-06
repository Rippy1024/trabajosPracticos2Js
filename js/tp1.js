/*
Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

let edad = prompt("Por favor, ingresa tu edad:");

function valorValido(valor){
    return !isNaN(valor) && isFinite (valor);
}
if (valorValido(edad)) {
    edad = Number(edad);
  
    if (edad > 18) {
      alert("¡Ya puedes conducir!");
    } else {
      alert("Eres menor de 18 años, no puedes conducir aún.");
    }
  } else {
    alert("La edad ingresada no es un número válido.");
  }