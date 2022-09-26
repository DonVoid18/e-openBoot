// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

// - Una variable que obtenga tu edad a partir del objeto anterior

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const object1 = {
  nombre: "patrick",
  apellido: "Rios",
  edad: 19,
  altura: 1.7,
  eresDesarrollador: true,
};

const edad = object1.edad;
console.log(edad);

const array1 = [
  object1,
  {
    nombre: "sofia",
    apellido: "sanchez",
    edad: 18,
    altura: 1.65,
    eresDesarrollador: false,
  },{
    nombre: "miguel",
    apellido: "sanchez",
    edad: 15,
    altura: 1.65,
    eresDesarrollador: false,
  },
];

array1.sort((a, b) => {
  if (a.edad - b.edad < 0) {
    return -1;
  }
  if (a.edad - b.edad > 0) {
    return 1;
  }
  if (a.edad - b.edad === 0) {
    return 0;
  }
});

console.log(array1);
