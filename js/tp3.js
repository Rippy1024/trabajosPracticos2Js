/*
Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm()

*/

let cadenas = [];

do {
  let cadena = prompt("Por favor, ingresa una cadena de texto:");
  
  if (cadena !== null) {
    cadenas.push(cadena);
  }
} while (confirm("¿Deseas ingresar otra cadena?"));

let resultado = cadenas.join('-');

if (cadenas.length > 0) {
  alert("Cadenas concatenadas con guión: " + resultado);
} else {
  alert("No ingresaste ninguna cadena.");
}
