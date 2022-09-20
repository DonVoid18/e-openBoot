// trabajar con métodos más avanzados
// map - filter - reduce

const array = ["ambo", "huánuco", "lima", "arequipa", "cuzco"];

// array.forEach((v) => {
//   console.log(v);
// });

const newArray = array.map((value, index) => {
  return `${index + 1}- ${value}`;
});
console.log(newArray);

const listaObjeto = [
  { nombre: "patrick", edad: 18 },
  { nombre: "rios", edad: 17 },
  { nombre: "nolasco", edad: 11 },
  { nombre: "jojsue", edad: 12 },
  { nombre: "miguel", edad: 15 },
];

const personasFilter = listaObjeto.filter((value) => value.edad > 15);
console.log(personasFilter);

const valores = [1, 23, 412, 123, 1251];
const suma = valores.reduce((acumulado, cur, i, arrayOriginal) => {
  console.log(acumulado);
  console.log(cur);
  return acumulado + cur;
});
console.log(suma);
