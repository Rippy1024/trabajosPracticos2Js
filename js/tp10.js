/*
Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

Ejercicios con Math


*/


const filas = parseInt(prompt("Por favor, ingresa el número de filas:"));
const columnas = parseInt(prompt("Por favor, ingresa el número de columnas:"));


const totalCeldas = filas * columnas;

let numero = totalCeldas;

let tabla = "<table border='1'>";

for (let i = 0; i < filas; i++) {
  tabla += "<tr>";
  
  for (let j = 0; j < columnas; j++) {
    tabla += "<td>" + numero + "</td>";
    numero--;
  }
  
  tabla += "</tr>";
}

tabla += "</table>";

document.write(tabla);
