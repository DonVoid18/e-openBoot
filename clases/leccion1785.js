// trabajando con fechas
const fecha = new Date();
console.log(fecha);

const fecha2 = new Date(1987, 10, 10, 1, 2, 3);
console.log(fecha2);

const fecha3 = new Date(10000000);
console.log(fecha3);

const fecha4 = new Date("October 12, 1999 12:2:3");
console.log(fecha4);

// para comparar fechas tenemos que convertirlas a milisegundos
console.log(fecha2.getTime() === fecha4.getTime());

// obtener anio, month, day
// mes
console.log(fecha2.getMonth())
// anio
console.log(fecha2.getFullYear())
// dia
console.log(fecha2.getDay())

console.log(fecha2.toLocaleDateString("en-GB"))

