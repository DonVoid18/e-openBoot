const persona = {
  nombre: "patrick",
  edad: 18,
  isDeveloper: true,
  saludo: (value) => {
    return "Hola bro";
  },
  saludo2: function () {
    return "hola bro 2";
  },
};

console.log(persona.saludo);
console.log(persona.saludo2);

const crearPersona = (nombre, edad, isDeveloper) => {
  return {
    nombre,
    edad,
    isDeveloper,
  };
};

console.log(crearPersona("patrick", "rios", true));
