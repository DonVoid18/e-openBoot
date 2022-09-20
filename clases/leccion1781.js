// ordenamiento y comparación de listas
// sort -> modifica el array principal
const array = [2, 3, 4, 100, 2, 15, 1];
console.log(array);

// array.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (a < b) {
//     return 1;
//   }
//   if (a === b) {
//     return 0;
//   }
// });
array.sort((a, b) => b - a);
console.log(array);

const listaObjeto = [
  { nombre: "patrick", edad: 18 },
  { nombre: "rios", edad: 17 },
  { nombre: "nolasco", edad: 11 },
  { nombre: "jojsue", edad: 12 },
  { nombre: "miguel", edad: 15 },
];
listaObjeto.sort((a, b) => a.edad - b.edad);
console.log(listaObjeto);

// every()

const arrayA1 = [12, -12, 12131, 2, 312, 3, 12, 3, 1, 2, 3, 12, 3, 12, 3];

const resultado = arrayA1.every((value) => value > 0);
console.log(resultado);

// comparar arrays
const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];

console.log(ar1 === ar2);

const compararArrays = (array_1, array_2) => {
  if (array_1.length !== array_2.length) return false;
  const res = array_1.every((valor, i) => valor === array_2[i]);
  return res
};
console.log(compararArrays(ar1,ar2))

