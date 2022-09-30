// creación y uso de clases
class Persona {
  nombre;
  edad;
  isDeveloper;
  constructor(nombre, edad, isDeveloper) {
    this.nombre = nombre;
    this.edad = edad;
    this.isDeveloper = isDeveloper;
  }
  saludo() {
    console.log(`Hola mi nombre es ${this.nombre}`);
  }
}

const person1 = new Persona("angelo", 18, false);

person1.saludo();
