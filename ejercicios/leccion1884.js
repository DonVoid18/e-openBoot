// Crea un archivo JS que contenga las siguientes líneas

// - Una función sin parámetros que devuelva siempre "true"

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

// - Una función generadora de índices pares automáticos

function noneTrue() {
  return true;
}

// const func1 = () => {
//   console.log("hola soy una promesa");
// };
// setTimeout(func1, 5000);

function* gener() {
  let number = 0;
  while (true) {
    number += 2;
    if(number === 20) break
    yield number
  }
}
const g = gener()
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)
console.log(g.next().value)

