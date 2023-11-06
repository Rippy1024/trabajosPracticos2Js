/*
Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….

*/

const filas = 30;

for (let numero = 1; numero <= filas; numero++) {
  let fila = "";

  for (let repeticiones = 1; repeticiones <= numero; repeticiones++) {
    fila += numero;
  }

  document.write(fila + "<br>");
}
