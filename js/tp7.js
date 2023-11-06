/*
Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

*/

const numeroMaximo = parseInt(prompt("Por favor, ingresa un número (no mayor de 50):"));


if (isNaN(numeroMaximo) || numeroMaximo <= 0 || numeroMaximo > 50) {
  alert("El número no es válido. Debe ser un número entre 1 y 50.");
} else {
  for (let numero = numeroMaximo; numero >= 1; numero--) {
    let fila = "";

    for (let repeticiones = 1; repeticiones <= numero; repeticiones++) {
      fila += numero;
    }
    document.write(fila + "<br>"); 
  }
}
