/*
Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

let suma = 0;

while (true) {
  let input = prompt("Por favor, ingresa un número:");
  
  if (input === null) {
    break;
  }
  
  let numero = parseFloat(input);
  
  if (!isNaN(numero)) {
    suma += numero; 
  } else {
    alert("Eso no es un número válido. Por favor, intenta de nuevo.");
  }
}

alert("La suma total de los números introducidos es: " + suma);
