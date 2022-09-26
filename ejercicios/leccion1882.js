// Crea un archivo llamado fechas.js que contenga las siguientes líneas

// - La fecha de hoy

// - La fecha de tu nacimiento

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

// - Una variable que contenga el día de tu nacimiento

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const hoy = new Date();
console.log(hoy);

const nacimiento = new Date(2003, 4, 9);
console.log(nacimiento);

const verify = hoy.getTime() > nacimiento.getTime();
console.log(verify);

const diaNac = nacimiento.getDay();
const mesNac = nacimiento.getMonth();
const anioNac = nacimiento.getFullYear();

console.log(diaNac, mesNac, anioNac);
