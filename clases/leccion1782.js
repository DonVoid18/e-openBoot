// como saber si algunos cumplen una condición

const array = [-1, 123, 1, 231, 2, 5, 43, 5];

const res = array.some((value) => value < 0);
console.log(res)

const existe = array.some((value) => value === 2)
console.log(existe)

const listaObjeto = [
  { nombre: "patrick", edad: 18 },
  { nombre: "rios", edad: 17 },
  { nombre: "nolasco", edad: 11 },
  { nombre: "jojsue", edad: 12 },
  { nombre: "miguel", edad: 15 },
];

const existeMiguel = listaObjeto.some((value) => value.nombre === "miguel")
console.log(existeMiguel)


const str = "angelo patrick es gozu"

console.log(str[2])
const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2,3,"hola", 5])
const ar_set = Array.from(set)
console.log(ar_set)

const keys = array.keys()
console.log(keys)

const ar_key = Array.from(keys)
console.log(ar_key)