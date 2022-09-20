// Crea un archivo JS que contenga las siguientes líneas

// - Una variable que contenga la lista de la compra (mínimo 5 elementos)

// - Modifica la lista de la compra y añádele "Aceite de Girasol"

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

let compras = ["sandilla", "fideos", "arroz", "plátanos", "pollo"];

// insertar al final
compras.push("Aceite girasol");
// insertar al inicio
// compras.unshift("Aceite girasol")

// eliminar
compras.pop("Aceite girasol");

// console.log(compras);

// lista de objetos
const peliculas = [
  { titulo: "Patrick Rios", director: "Achu M.", fecha: new Date(2010, 0, 1) },
  {
    titulo: "Josue miguel",
    director: "Achu M.",
    fecha: new Date(2022, 11, 17),
  },
  { titulo: "Vilma Ruiz", director: "josa.", fecha: new Date(2009, 9, 5) },
];

const filterData = peliculas.filter(
  (value) => value.fecha > new Date(2010, 0, 1)
);

console.log(filterData);

const directores = peliculas.map((value) => value.director)
const titulos = peliculas.map((value) => value.titulo)

console.log(directores, titulos)

const directoresTitulos1 = directores.concat(titulos)
const directoresTitulos2 = [...directores,...titulos]
console.log(directoresTitulos2)