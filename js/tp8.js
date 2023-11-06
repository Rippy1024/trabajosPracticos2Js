/*
Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……

*/


const numeroMaximo = parseInt(prompt("Por favor, ingresa un número (no mayor de 50):"));


if (isNaN(numeroMaximo) || numeroMaximo <= 0 || numeroMaximo > 50) {
  alert("El número no es válido. Debe ser un número entre 1 y 50.");
} else {
  for (let fila = 1; fila <= numeroMaximo; fila++) {
    let piramide = "";
    
    for (let numero = 1; numero <= fila; numero++) {
      piramide += numero; 
    }
    document.write(piramide + "<br>");
  }
}
