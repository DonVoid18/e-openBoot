class Persona {
  // private -> #
  // private: Solo se puede acceder desde la misma clase
  #nombre;
  #edad;
  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.#edad = edad;
  }
  // protected -> _
  // solo se puede acceder dentro de la clase y desde clases decendientes
  _isDeveloper = true;

  saludo() {
    console.log(`hola ${this.nombre}`);
  }
  obtenerNombre() {
    console.log(this.#nombre);
  }
  #obtenEdad() {
    return this.#edad;
  }
  getEdad() {
    return this.#edad;
  }
  setEdad(value) {
    this.#edad = value;
  }
}

const person = new Persona("Patrick", 18);

person.obtenerNombre();

// getter: obtener valor
// setter: insertar valor

person.setEdad(20);
console.log(person.getEdad());
