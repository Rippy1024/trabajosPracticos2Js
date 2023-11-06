/*
Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10

*/
for (let numero = 1; numero <= 500; numero++) {
    let linea = numero.toString();
  
    if (numero % 4 === 0) {
      linea += " (Múltiplo de 4)";
    }
  
    if (numero % 9 === 0) {
      linea += " (Múltiplo de 9)";
    }
  
    console.log(linea);
 
    if (numero % 5 === 0) {
      console.log("-------------------------------------------------");
    }
  }
  